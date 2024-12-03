import CreateAccountPage from './CreateAccountPage'; // Import CreateAccountPage

class SignInPage {
  // Selectors for the fields on the Sign-In page
  get emailField() {
    return cy.get("#email");
  }

  get passwordField() {
    return cy.get("input[name='login[password]']");
  }

  get signInButton() {
    return cy.get("fieldset[class='fieldset login'] div[class='primary'] span");
  }

  get pageTitle(){
    return cy.get('.page-title')
  }

// Retrieve the email and password from CreateAccountPage
    login(email, password) {
        this.emailField.type(email);
        this.passwordField.type(password);
    }

   clickToSubmit() {
        this.signInButton.click();

  }
}

export default SignInPage;
