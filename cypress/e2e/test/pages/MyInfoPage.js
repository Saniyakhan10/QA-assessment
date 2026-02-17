class MyInfoPage {
    // Helper functionality: Label ke basis par input find karne ke liye
    getField(labelName) {
        // Label dhundho, fir uska parent container dhundho, fir input find karo
        return cy.contains("label", labelName).parents(".oxd-grid-item").find("input");
    }

    // Getter for Elements so 'this' works correctly
    get elements() {
        return {
            contactDetailsTab: () => cy.contains("a", "Contact Details"), // Contact Details tab
            street1Input: () => this.getField("Street 1"), // Address Line 1
            cityInput: () => this.getField("City"), // City input
            stateInput: () => this.getField("State/Province"), // State input
            zipInput: () => this.getField("Zip/Postal Code"), // Zip code
            // Country dropdown thoda alag hai, isliye specific selector use kiya
            countryDropdown: () => cy.contains("label", "Country").parents(".oxd-grid-item").find(".oxd-select-text"),
            mobileInput: () => this.getField("Mobile"), // Mobile number
            emailInput: () => this.getField("Work Email"), // Email address
            saveButton: () => cy.get('button[type="submit"]').eq(0), // Save button (pehla wala usually personal details ke liye hota hai)
            successMessage: () => cy.contains(".oxd-toast", "Successfully Updated"), // Update ke baad success message verify karne ke liye
        };
    }

    // Actions: Navigate to Contact Details
    openContactDetails() {
        this.elements.contactDetailsTab().click(); // Tab par click karein
    }

    // Form fill karne ka function
    fillContactDetails(details) {
        // Har field ko check karke fill karein agar data diya hai
        if (details.street1) this.elements.street1Input().clear().type(details.street1);
        if (details.city) this.elements.cityInput().clear().type(details.city);
        if (details.state) this.elements.stateInput().clear().type(details.state);
        if (details.zip) this.elements.zipInput().clear().type(details.zip);

        // Country select karne ke liye dropdown open karke option select karein
        if (details.country) {
            this.elements.countryDropdown().click();
            cy.contains(".oxd-select-option", details.country).click();
        }

        if (details.mobile) this.elements.mobileInput().clear().type(details.mobile);
        if (details.email) this.elements.emailInput().clear().type(details.email);
    }

    // Save changes
    save() {
        this.elements.saveButton().click(); // Save par click karein
    }

    // Verify successful update
    verifySuccess() {
        this.elements.successMessage().should("be.visible"); // Check karein ki success toast dikh raha hai
    }
}

export default new MyInfoPage();

