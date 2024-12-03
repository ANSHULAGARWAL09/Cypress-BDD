Feature: Test the sign up flow
I want to validate the Account Creation and Signing on the website "https://magento.softwaretestingboard.com/"

Scenario: As a user I should be able to Create the Account Successfully 
Given I open the browser
When I am on the Wesite main Page
And I click on Create an Account link
Then I verify that I landed on the 'Create New Customer Account'
When I filled the FirstName LastName Email and Password 
Then I click on Create an Account Submit button
And I verify the Account is Successfully Created 
Then I logout from the Website and Verify user is Logged Out
When I click on Sign In Button
Then I filled the Email and Password 
And I click on Submit Button 
Then I verify that I am able to Successfully SignIn to the Already Created Account
