import { loginPage } from "../page_objects/loginPage";




describe('Registration', () => {
    beforeEach(() => {
      cy.visit("/")
      loginPage.loginButton.click()
    })
    
    
    it('Successful login', () => {
      loginPage.login('mejl@mejl.mejl', '11111111' )
    })

    it('Login without email', () => {
        loginPage.passwordInput.type('11111111')
        loginPage.submitButton.click()
      })
 
      it('Login without password', () => {
        loginPage.emailInput.type('mejl@mejl.mejl')
        loginPage.submitButton.click()
      })

      it('Login without  required requirements', () => {
        loginPage.submitButton.click()
      })

      it('Login with wrong password', () => {
        loginPage.emailInput.type('mejl@mejl.mejl')
        loginPage.passwordInput.type('111111115435')
        loginPage.submitButton.click()
      })

      it('Login with wrong email', () => {
        loginPage.emailInput.type('mejl@mejl.com')
        loginPage.passwordInput.type('111111115435')
        loginPage.submitButton.click()
      })
})
