# Test Cases for OrangeHRM Automation

| Test Case ID | Test Scenario | Steps | Expected Result | Priority |
| :--- | :--- | :--- | :--- | :--- |
| **TC_01** | **Verify Login Functionality** | 1. Go to Login URL<br>2. Enter valid Username<br>3. Enter valid Password<br>4. Click Login | User should be redirected to Dashboard page. | High |
| **TC_02** | **Navigate to Contact Details** | 1. Log in<br>2. Click 'My Info' on sidebar<br>3. Click 'Contact Details' tab | Contact Details form should be displayed. | Medium |
| **TC_03** | **Update Contact Information** | 1. Navigate to Contact Details<br>2. Fill Street, City, State, Zip, Country<br>3. Fill Mobile, Email<br>4. Click Save | Success message "Successfully Updated" should appear. Form should retain new values. | High |
| **TC_04** | **Change Password** | 1. Click User Dropdown > Change Password<br>2. Enter Current Password<br>3. Enter New Password & Confirm<br>4. Click Save | Success message "Successfully Saved" should appear. | High |
| **TC_05** | **Verify Logout** | 1. Click User Dropdown<br>2. Click Logout | User should be redirected to Login page. Login button should be visible. | High |
