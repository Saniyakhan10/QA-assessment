class DashboardPage {
    // Elements defining Navigation items
    elements = {
        myInfoLink: () => cy.contains('span', 'My Info'), // 'My Info' menu item
        userDropdown: () => cy.get('.oxd-userdropdown-tab'), // Top right user menu
        changePasswordLink: () => cy.contains('a', 'Change Password'), // Change Password link inside dropdown
        logoutLink: () => cy.contains('a', 'Logout'), // Logout link
        dashboardTitle: () => cy.contains('h6', 'Dashboard') // Validation ke liye check karenge ki Dashboard load hua ya nahi
    };

    // Navigate to 'My Info' page
    navigateToMyInfo() {
        this.elements.myInfoLink().click(); // 'My Info' par click karein
    }

    // Open User Dropdown menu
    openUserDropdown() {
        this.elements.userDropdown().click(); // Dropdown open karein
    }

    // Click 'Change Password'
    clickChangePassword() {
        this.openUserDropdown(); // Pehle dropdown open karein
        this.elements.changePasswordLink().click(); // Phir 'Change Password' click karein
    }

    // Logout from application
    logout() {
        this.openUserDropdown();
        this.elements.logoutLink().click(); // Logout click karein
    }
}

export default new DashboardPage();
