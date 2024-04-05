import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pom/loginPage'; 

Given ('Agent access link web Agent Tools', () =>{
    cy.viewport('iphone-xr');
    cy.visit ({
        url: 'https://orientasi.sit.bravo.bfi.co.id/', 
        failOnStatusCode: false
    });
});

When ('Agent click login button', () =>{
    LoginPage.loginButton.click();
});

When ('Agent input {string} phone number', (phoneNumber) => {
    LoginPage.phoneNumberField.clear().type(phoneNumber);
});

When ('Agent click button konfirmasi', () => {
    LoginPage.sendVerifiCodeButton.click();
});

When ('Agent input OTP', () => {
    LoginPage.inputOtp1.type('1');
    LoginPage.inputOtp2.type('1');
    LoginPage.inputOtp3.type('1');
    LoginPage.inputOtp4.type('1');
}); 

When ('Agent click konfirmasi button', () => {
   LoginPage.sendVerifiConfirmButton.click();
});

Then ('Agent should be able to see lounge page', () => {
    cy.wait (1000);
    cy.get('[data-testid="footer-toolbar-menu"]').should('be.enabled');
});