const { Given , Then , When} = require( "@badeball/cypress-cucumber-preprocessor");
import CreateAccountPage from "../PageObjects/CreateAccountPage";
import HomePage from "../PageObjects/HomePage"
import SignInPage from "../PageObjects/SignInPage";
const homePage = new HomePage()
const createAccountPage = new CreateAccountPage()
const signInPage = new SignInPage()
const And = Then; // Or alias to Given/When as needed
let user = null
    
//test steps 
Given ("I open the browser", () => {
    homePage.goTo(Cypress.env('url'))
    cy.url().should('include','magento');
})

When ("I am on the Wesite main Page", () => {
    homePage.logo.should("exist");
    
})

Then ("I click on Create an Account link", () => {
    homePage.createAccountLink.click({ force: true });
})

And ('I verify that I landed on the {string}', actualPageTitle=>{
    createAccountPage.createAccountTitle.invoke('text').then((pageTitle) => {
        expect(pageTitle.trim()).to.equal(actualPageTitle);
    })

})

When ('I filled the FirstName LastName Email and Password',() => {
    const { email, password } = createAccountPage.fillInformation();
    user =  cy.wrap({ email, password })
    cy.wrap({ email, password }).as('user');
    console.log(user)
})

Then ('I click on Create an Account Submit button',() => {
    createAccountPage.submitToCreateAccount();

})

And ('I verify the Account is Successfully Created', () => {
    cy.get('div:contains("Thank you for registering")').should("exist");

})

Then ('I logout from the Website and Verify user is Logged Out', () => {
    homePage.myProfile.click({ force: true });
    homePage.signOutLink.click();
    homePage.signOutConfirmation.should("exist");

})

When ('I click on Sign In Button', () => {
    homePage.signInLink.click({ force: true });

})

Then ('I filled the Email and Password', function() {
    const { email, password } = this.user;
    signInPage.login(email, password);
})

And ('I click on Submit Button', () => {
    signInPage.clickToSubmit()

})

When ('I verify that I am able to Successfully SignIn to the Already Created Account', () => {
    signInPage.pageTitle.should("exist");
});
