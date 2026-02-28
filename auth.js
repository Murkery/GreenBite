// ─────────────────────────────────────────────────────────────
// AUTH — Supabase version
// Uses email format: username@greenbite.local (hidden from user)
// ─────────────────────────────────────────────────────────────

function toEmail(username) {
    return `${username.trim().toLowerCase()}@greenbite.local`;
}

async function validateAuth(username, password, isLoginMode) {
    const email = toEmail(username);

    if (isLoginMode) {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) return { success: false, message: 'Wrong username or password!' };
        return { success: true, username };
    } else {
        const { data, error } = await supabaseClient.auth.signUp({
            email,
            password,
            options: { data: { username } }   // stored in user_metadata
        });
        if (error) return { success: false, message: error.message };
        // Supabase may require email confirmation — sign in immediately too
        const { error: signInErr } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (signInErr) return { success: false, message: 'Account created — please log in.' };
        return { success: true, username };
    }
}

async function signOutUser() {
    await supabaseClient.auth.signOut();
    window.location.href = 'index.html';
}
