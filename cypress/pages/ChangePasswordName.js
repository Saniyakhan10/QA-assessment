class ChangePasswordPage {

    // Helper to find input by Label
    getField(labelName) {
        return cy.contains('.oxd-label', labelName).parents('.oxd-grid-item').find('input');
    }

    get elements() {
        return {
            currentPasswordInput: () => this.getField('Current Password'), // Current Password field
            // 'Password' label common hai, isliye regex se exact match kar rahe hain taaki confusion na ho
            passwordInput: () => cy.contains('.oxd-label', /^Password$/).parents('.oxd-grid-item').find('input'),
            confirmPasswordInput: () => this.getField('Confirm Password'), // Confirm Password field
            saveButton: () => cy.get('button[type="submit"]'), // Save button
            successMessage: () => cy.contains('.oxd-toast', 'Successfully Saved') // Success message
        };
    }

    // Password change karne ka complete flow
    changePassword(currentPass, newPass) {
        this.elements.currentPasswordInput().type(currentPass); // Current password enter karein
        this.elements.passwordInput().type(newPass); // New password enter karein
        this.elements.confirmPasswordInput().type(newPass); // Confirm password enter karein
        this.elements.saveButton().click(); // Save karein
    }

    // Verify changes saved
    verifySuccess() {
        this.elements.successMessage().should('be.visible'); // Message ki visibility check karein
    }
}

export default new ChangePasswordPage();

