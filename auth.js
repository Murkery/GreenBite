function validateAuth(username, password, isLoginMode) {
    const users = JSON.parse(localStorage.getItem('greenbite_users') || '{}');

    if (isLoginMode) {
        if (users[username] && users[username] === password) {
            // ZUERST SPEICHERN
            localStorage.setItem('isLoggedIn', 'true'); 
            localStorage.setItem('currentUser', username); 
            // DANN ERST ERFOLG MELDEN
            return { success: true };
        }
        return { success: false, message: "Falscher Name oder Passwort!" };
    } else {
        if (users[username]) {
            return { success: false, message: "Nutzer existiert bereits!" };
        }
        users[username] = password;
        localStorage.setItem('greenbite_users', JSON.stringify(users));
        
        // Auch beim Registrieren direkt einloggen
        localStorage.setItem('isLoggedIn', 'true'); 
        localStorage.setItem('currentUser', username); 
        
        return { success: true };
    }
}