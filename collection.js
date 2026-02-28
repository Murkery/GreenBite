// ─────────────────────────────────────────────────────────────
// COLLECTION.JS — Supabase version
// Favorites stored in the `collection` table.
// ─────────────────────────────────────────────────────────────

const iconsC = {
    time:       '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    difficulty: '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 20V4"></path></svg>',
    heartFilled:'<svg viewBox="0 0 24 24" width="18" height="18" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'
};

// ─────────────────────────────────────────────────────────────
// SUPABASE DATA LAYER
// ─────────────────────────────────────────────────────────────

async function getFavoriteIds() {
    const user = await getCurrentUser();
    if (!user) return [];

    const { data, error } = await supabaseClient
        .from('collection')
        .select('recipe_id')
        .eq('user_id', user.id);

    if (error) { console.error('Collection load error:', error); return []; }
    return (data || []).map(row => row.recipe_id);
}

async function addFavorite(recipeId) {
    const user = await getCurrentUser();
    if (!user) return;

    const { error } = await supabaseClient
        .from('collection')
        .upsert({ user_id: user.id, recipe_id: recipeId }, { onConflict: 'user_id,recipe_id' });

    if (error) console.error('Collection insert error:', error);
}

async function removeFavorite(recipeId) {
    const user = await getCurrentUser();
    if (!user) return;

    const { error } = await supabaseClient
        .from('collection')
        .delete()
        .eq('user_id', user.id)
        .eq('recipe_id', recipeId);

    if (error) console.error('Collection delete error:', error);
}

// ─────────────────────────────────────────────────────────────
// RENDER
// ─────────────────────────────────────────────────────────────

async function renderCollection() {
    const grid = document.getElementById('collection-grid');
    if (!grid) return;

    grid.innerHTML = '<p style="color:var(--text-muted);">Loading…</p>';

    const favorites = await getFavoriteIds();

    if (favorites.length === 0) {
        grid.innerHTML = '<p id="collection-placeholder">Your collection is still empty. Mark recipes in the search with a heart!</p>';
        return;
    }

    const favoriteRecipes = recipes.filter(r => favorites.includes(r.id));
    grid.innerHTML = '';

    favoriteRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <div class="card-image" style="background-image:url('${recipe.image}');position:relative;height:180px;background-size:cover;">
                <button class="fav-btn-dezent" onclick="removeFromCollection('${recipe.id}')">
                    ${iconsC.heartFilled}
                </button>
            </div>
            <div class="card-content" style="padding:15px;">
                <h3 style="margin-bottom:5px;">${recipe.name}</h3>
                <div class="card-meta" style="margin-bottom:15px;">
                    <span>${iconsC.time} ${recipe.prepTime}</span>
                    <span>${iconsC.difficulty} ${recipe.difficulty}</span>
                </div>
                <button class="recipe-view-btn" onclick="goToDetail('${recipe.id}')">Details</button>
            </div>`;
        grid.appendChild(card);
    });
}

async function removeFromCollection(id) {
    await removeFavorite(id);
    renderCollection();
}

// ─────────────────────────────────────────────────────────────
// DETAILS PAGE — save/unsave helpers (used by details.html)
// ─────────────────────────────────────────────────────────────

// Check if a recipe is already in the user's collection
async function isFavorite(recipeId) {
    const user = await getCurrentUser();
    if (!user) return false;

    const { data, error } = await supabaseClient
        .from('collection')
        .select('id')
        .eq('user_id', user.id)
        .eq('recipe_id', recipeId)
        .maybeSingle();

    return !error && data !== null;
}

// Toggle favorite from details page
async function toggleFavorite(recipeId) {
    const already = await isFavorite(recipeId);
    if (already) {
        await removeFavorite(recipeId);
    } else {
        await addFavorite(recipeId);
    }
    return !already; // return new state
}

// ─────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', renderCollection);
