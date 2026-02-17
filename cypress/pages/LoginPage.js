class LoginPage {
    // Elements ko define karte hain yahan
    elements = {
        usernameInput: () => cy.get('input[name="username"]'), // Username field ka selector
        passwordInput: () => cy.get('input[name="password"]'), // Password field ka selector
        loginButton: () => cy.get('button[type="submit"]'), // Login button ka selector
        errorMessage: () => cy.get('.oxd-alert-content-text'), // Error message agar login fail ho
    };

    // Actions (Actions jo hum perform karenge)
    visit() {
        cy.visit('/web/index.php/auth/login'); // Login page par visit karein
    }

    login(username, password) {
        this.elements.usernameInput().type(username); // Username type karein
        this.elements.passwordInput().type(password); // Password type karein
        this.elements.loginButton().click(); // Login button click karein
    }
}

export default new LoginPage();
