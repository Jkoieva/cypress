import LoginPage from "../../loginpage";
import HomePage from "../../homepage";


describe('template spec', () => {
  it('Login', () => {

    const loginPage = new LoginPage;
    const homePage = new HomePage;
    cy.visit('https://www.kaggle.com/');
    loginPage.clickSignIn();
    loginPage.clickSignInUsingEmail();
    loginPage.enterEmail('freepolly@gmail.com');
    loginPage.enterPassword('164264!krwbbr');
    loginPage.clickSubmit();
    homePage.verifyWelcomeText()



  })
})