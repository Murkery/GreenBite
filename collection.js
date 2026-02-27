const icons = {
    time: '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    difficulty: '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 20V4"></path></svg>',
    heart: '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
   heartFilled: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'
};


function renderCollection() {
    const collectionGrid = document.getElementById('collection-grid');
    const favorites = JSON.parse(localStorage.getItem('myCollection')) || [];

    if (favorites.length === 0) {
        collectionGrid.innerHTML = '<p>Your collection is empty. Start hearting some recipes!</p>';
        return;
    }

    // Filtere alle Rezepte, deren ID in den Favoriten ist
    const myRecipes = recipes.filter(r => favorites.includes(r.id));

    collectionGrid.innerHTML = "";
    myRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <div class="card-image" style="background-image: url('${recipe.image}')">
                <button class="fav-btn active" onclick="removeFromCollection('${recipe.id}')">${icons.heartFilled}</button>
            </div>
            <div class="card-content">
                <h3>${recipe.name}</h3>
                <button class="view-btn" onclick="goToDetail('${recipe.id}')">View Recipe</button>
            </div>
        `;
        collectionGrid.appendChild(card);
    });
}

function removeFromCollection(id) {
    let favorites = JSON.parse(localStorage.getItem('myCollection')) || [];
    favorites = favorites.filter(favId => favId !== id);
    localStorage.setItem('myCollection', JSON.stringify(favorites));
    renderCollection(); // Seite neu rendern
}

// Beim Laden der Seite ausführen
document.addEventListener('DOMContentLoaded', renderCollection);

document.addEventListener('DOMContentLoaded', renderCollection);

function renderCollection() {
    const grid = document.getElementById('collection-grid');
    if (!grid) return;

    // Favoriten-IDs aus dem Speicher holen
    const favorites = JSON.parse(localStorage.getItem('myCollection')) || [];

    if (favorites.length === 0) {
        grid.innerHTML = '<p id="collection-placeholder">Deine Sammlung ist noch leer. Markiere Rezepte in der Suche mit einem Herz!</p>';
        return;
    }

    // Rezepte filtern: Nur die, deren ID in der Favoriten-Liste steht
    const favoriteRecipes = recipes.filter(r => favorites.includes(r.id));

    // Grid leeren
    grid.innerHTML = "";

    favoriteRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        // In collection.js beim Erstellen der Karte:
    card.innerHTML = `
        <div class="card-image" style="background-image: url('${recipe.image}'); position: relative; height: 180px; background-size: cover;">
            <button class="fav-btn-dezent" onclick="removeFromCollection('${recipe.id}')">
                ${icons.heartFilled}
            </button>
            </div>
            <div class="card-content" style="padding: 15px;">
            <h3 style="margin-bottom: 5px;">${recipe.name}</h3>
            <div class="card-meta" style="margin-bottom: 15px;">
                <span>${icons.time} ${recipe.prepTime}</span>
                <span>${icons.difficulty} ${recipe.difficulty}</span>
            </div>
            <button class="recipe-view-btn" onclick="goToDetail('${recipe.id}')">
                Details
            </button>
        </div>
    `;
        grid.appendChild(card);
    });
}

function removeFromCollection(id) {
    let favorites = JSON.parse(localStorage.getItem('myCollection')) || [];
    favorites = favorites.filter(favId => favId !== id);
    localStorage.setItem('myCollection', JSON.stringify(favorites));
    
    // Seite sofort neu zeichnen
    renderCollection();
}