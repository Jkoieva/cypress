class LoginPage{


    elements = {
        signInBtn : () => cy.contains('Sign In'),      
        signInUsingEmail : () => cy.contains('Sign in with Email'),
        emailInput : () => cy.get('[name="email"]'),
        passwordInput : () => cy.get('[name="password"]'),   
        submitBtn : () => cy.get('[type="submit"]')
    }

    clickSignIn() {
        this.elements.signInBtn().click();
    }

    clickSignInUsingEmail() {
        this.elements.signInUsingEmail().click();
    }

    enterEmail(email) {
        this.elements.emailInput().then(($input) => {cy.wrap($input).type(email);
    })}

    enterPassword(password) {
        this.elements.passwordInput().then(($input) => {cy.wrap($input).type(password);
    })}

    clickSubmit() {
        this.elements.submitBtn().click();
    }

  }
  export default LoginPage;