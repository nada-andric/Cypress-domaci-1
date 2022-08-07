import { registerPage } from "../page_objects/registerPage";

describe('Registration', () => {
  beforeEach(() => {
    cy.visit('/')
    registerPage.registerButton.click()
  })
  
  
  
  it('Successful registration', () => {
    registerPage.firstName.type('Mika')
    registerPage.lastName.type('Antic')
    registerPage.emailInput.type('mejl@mejl.mejl' + Math.floor((Math.random() * 100000) + 1))
    registerPage.passwordInput.type('11111111')
    registerPage.passwordConfirmationInput.type('11111111')
    registerPage.termsAndConditions.click()
    registerPage.submitButton.click()
  })

  it('Register with minimum characters (first name)', () => {
    registerPage.firstName.type('MA')
    registerPage.lastName.type('Antic')
    registerPage.emailInput.type('mejl@mejl.mejl1' + Math.floor((Math.random() * 100000) + 1))
    registerPage.passwordInput.type('11111111')
    registerPage.passwordConfirmationInput.type('11111111')
    registerPage.termsAndConditions.click()
    registerPage.submitButton.click()
  })


  it('Register with maximum characters (first name)', () => {
    registerPage.firstName.type('commodis commodius commodo commune comparandae comparare comparat comparaverit complectitur complexiones compluribus compositis comprehenderit comprehensam comprobavit concederetur concedo conceptam concertationesque concessum conciliant concludaturque cu')
    registerPage.lastName.type('Antic')
    registerPage.emailInput.type('mejl@mejl.mejl1' + Math.floor((Math.random() * 100000) + 1))
    registerPage.passwordInput.type('11111111')
    registerPage.passwordConfirmationInput.type('11111111')
    registerPage.termsAndConditions.click()
    registerPage.submitButton.click()
  })

  it('Register with minimum characters (last name)', () => {
    registerPage.firstName.type('Mika')
    registerPage.lastName.type('A')
    registerPage.emailInput.type('mejl@mejl.mejl' + Math.floor((Math.random() * 100000) + 1))
    registerPage.passwordInput.type('11111111')
    registerPage.passwordConfirmationInput.type('11111111')
    registerPage.termsAndConditions.click()
    registerPage.submitButton.click()
  })

  it('Register with maximum characters (last name)', () => {
    registerPage.firstName.type('Mika')
    registerPage.lastName.type('concessum conciliant concludaturque conclusionemque conclusum concordia concupiscunt concursio concursionibus condimentum conducunt conectitur conetur confectum conferebamus conficiuntque conficiuntur confidam confidere confidet confirmare confirmat crasi')
    registerPage.emailInput.type('mejl@mejl.mejl' + Math.floor((Math.random() * 100000) + 1))
    registerPage.passwordInput.type('11111111')
    registerPage.passwordConfirmationInput.type('11111111')
    registerPage.termsAndConditions.click()
    registerPage.submitButton.click()
  })


  it('Register with special characters (first and last name)', () => {
    registerPage.firstName.type('Mika%^6')
    registerPage.lastName.type('Antic$#')
    registerPage.emailInput.type('mejl@mejl.mejl' + Math.floor((Math.random() * 100000) + 1))
    registerPage.passwordInput.type('11111111')
    registerPage.passwordConfirmationInput.type('11111111')
    registerPage.termsAndConditions.click()
    registerPage.submitButton.click()
  })

  it('Register with valid 9 characters password (all digits) ', () => {
    registerPage.firstName.type('Mika')
    registerPage.lastName.type('Antic')
    registerPage.emailInput.type('mejl@mejl.mejl' + Math.floor((Math.random() * 100000) + 1))
    registerPage.passwordInput.type('111111111')
    registerPage.passwordConfirmationInput.type('111111111')
    registerPage.termsAndConditions.click()
    registerPage.submitButton.click()
  })

  it('Register without required requirements ', () => {
    registerPage.submitButton.click()
  })

  it('Register without required accepted terms and conditions ', () => {
    registerPage.firstName.type('Mika')
    registerPage.lastName.type('Antic')
    registerPage.emailInput.type('mejl@mejl.mejl' + Math.floor((Math.random() * 100000) + 1))
    registerPage.passwordInput.type('111111111')
    registerPage.passwordConfirmationInput.type('111111111')
    registerPage.submitButton.click()
  })
  
  it('Register with invalid email (without @ sign)', () => {
    registerPage.firstName.type('Mika')
    registerPage.lastName.type('Antic')
    registerPage.emailInput.type('mejlmejl.mejl' + Math.floor((Math.random() * 100000) + 1))
    registerPage.passwordInput.type('111111111')
    registerPage.passwordConfirmationInput.type('111111111')
    registerPage.submitButton.click()
  })

  it('Register with invalid email (without . sign)', () => {
    registerPage.firstName.type('Mika')
    registerPage.lastName.type('Antic')
    registerPage.emailInput.type('mejl@mejlmejl' + Math.floor((Math.random() * 100000) + 1))
    registerPage.passwordInput.type('111111111')
    registerPage.passwordConfirmationInput.type('111111111')
    registerPage.termsAndConditions.click()
    registerPage.submitButton.click()
  })
  
  it('Register with existing email', () => {
    registerPage.firstName.type('Mika')
    registerPage.lastName.type('Antic')
    registerPage.emailInput.type('mejl@mejlmejl')
    registerPage.passwordInput.type('111111111')
    registerPage.passwordConfirmationInput.type('111111111')
    registerPage.termsAndConditions.click()
    registerPage.submitButton.click()
  })




})