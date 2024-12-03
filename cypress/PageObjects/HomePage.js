class HomePage {
    // Selectors for HomePage
    get logo() {
      return cy.get(".logo");
    }
  
    get createAccountLink() {
      return cy.contains('Create an Account');
    }
  
    get signInLink() {
      return cy.contains('Sign In');
    }

    get signOutLink() {
        return cy.contains('Sign Out');
    }

    get myProfile(){
        return cy.get('div[class="panel header"] button[type="button"')
    }

    get signOutConfirmation(){
        return cy.get('.base')
    }
  
    // Method to go to the home page
    goTo(url) {
      cy.visit("/");
    }
  }
  
  export default HomePage;
  