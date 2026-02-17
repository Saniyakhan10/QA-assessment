import LoginPage from '../../pages/LoginPage';
import DashboardPage from '../../pages/DashboardPage';
import MyInfoPage from '../../pages/MyInfoPage';
import ChangePasswordPage from '../../pages/ChangePasswordPage';

describe('OrangeHRM User Flow Automation', () => {

    it('Perform Login, Update Contact Details, Change Password and Logout', () => {
        // 1. Automate login flow (Login process automate karein)
        cy.log('Step 1: Login');
        LoginPage.visit(); // Login page open karein
        LoginPage.login('Admin', 'admin123'); // Credentials enter karke login karein

        // Verify Dashboard load ho gaya hai
        DashboardPage.elements.dashboardTitle().should('be.visible');

        // 2. Go to My Info -> Contact Details and fill contact details
        cy.log('Step 2: Navigate to My Info -> Contact Details');
        DashboardPage.navigateToMyInfo(); // 'My Info' par jayein
        MyInfoPage.openContactDetails(); // 'Contact Details' tab open karein

        // 3. Fill all contact details (Form fill karein)
        cy.log('Step 3: Update Contact Details');
        MyInfoPage.fillContactDetails({
            street1: '123 Cypress Avenue',
            city: 'New York',
            state: 'NY',
            zip: '10001',
            country: 'United States',
            mobile: '9876543210',
            email: 'qa.test@example.com'
        });
        MyInfoPage.save(); // Save karein
        MyInfoPage.verifySuccess(); // Success message verify karein

        // 3. Change Password (Password change karein)
        cy.log('Step 4: Change Password');
        DashboardPage.clickChangePassword(); // Dropdown se Change Password par jayein

        // Note: Demo site par password change karna risky ho sakta hai, par hum test ke liye 'admin1234' set kar rahe hain.
        // Real world mein hum random password use karte.
        ChangePasswordPage.changePassword('admin123', 'admin1234');
        ChangePasswordPage.verifySuccess(); // Verify karein ki password change ho gaya

        // 4. Sign out (Logout karein)
        cy.log('Step 5: Sign out');
        DashboardPage.logout();

        // Validate we are back on login page (User wapas login page par aa gaya hai)
        LoginPage.elements.loginButton().should('be.visible');
    });
});
