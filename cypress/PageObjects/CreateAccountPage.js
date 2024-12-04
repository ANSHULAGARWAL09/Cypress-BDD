// Import necessary modules
const { faker } = require("@faker-js/faker");

class CreateAccountPage {
  // Selectors for the fields on the Create Account page
  get createAccountTitle(){
    return cy.get('.page-title')
  }

  get firstNameField() {
    return cy.get("#firstname");
  }

  get lastNameField() {
    return cy.get("#lastname");
  }

  get emailField() {
    return cy.get("#email_address");
  }

  get passwordField() {
    return cy.get("#password");
  }

  get confirmPasswordField() {
    return cy.get("#password-confirmation");
  }

  get submitButton() {
    return cy.get(".submit");
  }

  /* Fills the registration form with random data and submits it*/
  fillInformation() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email(firstName, lastName);
    const password = faker.internet.password(8); // Random password of length 8

    // Fill the form fields
    this.firstNameField.type(firstName);
    this.lastNameField.type(lastName);
    this.emailField.type(email);
    this.passwordField.type(password);
    this.confirmPasswordField.type(password);

    return { email, password };

  }

  submitToCreateAccount(){

    // Submit the form
    this.submitButton.click({force:true});

  }
}

export default CreateAccountPage;
