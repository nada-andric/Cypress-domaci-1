class RegisterPage {

    
    get registerButton () {
        return cy.get('a[href="/register"]');
    }

    get firstName () {
        return cy.get('input[id=first-name]');
    }

    get lastName () {
        return cy.get('input[id=last-name]');
    }

    get emailInput () {
        return cy.get('input[id=email]');
    }

    get passwordInput () {
        return cy.get('input[id=password]');
    }
     
    get passwordConfirmationInput () {
        return cy.get('input[id=password-confirmation]');
    }


    get termsAndConditions () {
        return cy.get('input[class="form-check-input"]');
    }


    get submitButton() {
        return cy.get('button[type="submit"]');
    }

}

export const registerPage = new RegisterPage();