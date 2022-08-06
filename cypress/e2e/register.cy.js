
describe('Registration', () => {
  beforeEach(() => {
    cy.visit('https://gallery-app.vivifyideas.com/')
  })
  
  
  
  it('Successful registration', () => {
    cy.get('a[href="/register"]').click()
    cy.get('input[id=first-name]').type('Mika')
    cy.get('input[id=last-name]').type('Antic')
    cy.get('input[id=email]').type('mejl@mejl.mejl' + Math.floor((Math.random() * 100000) + 1))
    cy.get('input[id=password]').type('11111111')
    cy.get('input[id=password-confirmation]').type('11111111')
    cy.get('input[class="form-check-input"]').click()
    cy.get('button[type="submit"]').click()
  })

  it('Register with minimum characters (first name)', () => {
    cy.get('a[href="/register"]').click()
    cy.get('input[id=first-name]').type('MA')
    cy.get('input[id=last-name]').type('Antic')
    cy.get('input[id=email]').type('mejl@mejl.mejl1' + Math.floor((Math.random() * 100000) + 1))
    cy.get('input[id=password]').type('11111111')
    cy.get('input[id=password-confirmation]').type('11111111')
    cy.get('input[class="form-check-input"]').click()
    cy.get('button[type="submit"]').click()
  })


  it('Register with maximum characters (first name)', () => {
    cy.get('a[href="/register"]').click()
    cy.get('input[id=first-name]').type('commodis commodius commodo commune comparandae comparare comparat comparaverit complectitur complexiones compluribus compositis comprehenderit comprehensam comprobavit concederetur concedo conceptam concertationesque concessum conciliant concludaturque cu')
    cy.get('input[id=last-name]').type('Antic')
    cy.get('input[id=email]').type('mejl@mejl.mejl1' + Math.floor((Math.random() * 100000) + 1))
    cy.get('input[id=password]').type('11111111')
    cy.get('input[id=password-confirmation]').type('11111111')
    cy.get('input[class="form-check-input"]').click()
    cy.get('button[type="submit"]').click()
  })

  it('Register with minimum characters (last name)', () => {
    cy.get('a[href="/register"]').click()
    cy.get('input[id=first-name]').type('Mika')
    cy.get('input[id=last-name]').type('A')
    cy.get('input[id=email]').type('mejl@mejl.mejl' + Math.floor((Math.random() * 100000) + 1))
    cy.get('input[id=password]').type('11111111')
    cy.get('input[id=password-confirmation]').type('11111111')
    cy.get('input[class="form-check-input"]').click()
    cy.get('button[type="submit"]').click()
  })

  it('Register with maximum characters (last name)', () => {
    cy.get('a[href="/register"]').click()
    cy.get('input[id=first-name]').type('Mika')
    cy.get('input[id=last-name]').type('concessum conciliant concludaturque conclusionemque conclusum concordia concupiscunt concursio concursionibus condimentum conducunt conectitur conetur confectum conferebamus conficiuntque conficiuntur confidam confidere confidet confirmare confirmat crasi')
    cy.get('input[id=email]').type('mejl@mejl.mejl' + Math.floor((Math.random() * 100000) + 1))
    cy.get('input[id=password]').type('11111111')
    cy.get('input[id=password-confirmation]').type('11111111')
    cy.get('input[class="form-check-input"]').click()
    cy.get('button[type="submit"]').click()
  })


  it('Register with special characters (first and last name)', () => {
    cy.get('a[href="/register"]').click()
    cy.get('input[id=first-name]').type('Mika%^6')
    cy.get('input[id=last-name]').type('Antic$#')
    cy.get('input[id=email]').type('mejl@mejl.mejl' + Math.floor((Math.random() * 100000) + 1))
    cy.get('input[id=password]').type('11111111')
    cy.get('input[id=password-confirmation]').type('11111111')
    cy.get('input[class="form-check-input"]').click()
    cy.get('button[type="submit"]').click()
  })

  it('Register with valid 9 characters password (all digits) ', () => {
    cy.get('a[href="/register"]').click()
    cy.get('input[id=first-name]').type('Mika')
    cy.get('input[id=last-name]').type('Antic')
    cy.get('input[id=email]').type('mejl@mejl.mejl' + Math.floor((Math.random() * 100000) + 1))
    cy.get('input[id=password]').type('111111111')
    cy.get('input[id=password-confirmation]').type('111111111')
    cy.get('input[class="form-check-input"]').click()
    cy.get('button[type="submit"]').click()
  })

  it('Register without required requirements ', () => {
    cy.get('a[href="/register"]').click()
    cy.get('button[type="submit"]').click()
  })

  it('Register without required accepted terms and conditions ', () => {
    cy.get('a[href="/register"]').click()
    cy.get('input[id=first-name]').type('Mika')
    cy.get('input[id=last-name]').type('Antic')
    cy.get('input[id=email]').type('mejl@mejl.mejl' + Math.floor((Math.random() * 100000) + 1))
    cy.get('input[id=password]').type('111111111')
    cy.get('input[id=password-confirmation]').type('111111111')
    cy.get('button[type="submit"]').click()
  })
  
  it('Register with invalid email (without @ sign)', () => {
    cy.get('a[href="/register"]').click()
    cy.get('input[id=first-name]').type('Mika')
    cy.get('input[id=last-name]').type('Antic')
    cy.get('input[id=email]').type('mejlmejl.mejl' + Math.floor((Math.random() * 100000) + 1))
    cy.get('input[id=password]').type('111111111')
    cy.get('input[id=password-confirmation]').type('111111111')
    cy.get('button[type="submit"]').click()
  })

  it('Register with invalid email (without . sign)', () => {
    cy.get('a[href="/register"]').click()
    cy.get('input[id=first-name]').type('Mika')
    cy.get('input[id=last-name]').type('Antic')
    cy.get('input[id=email]').type('mejl@mejlmejl' + Math.floor((Math.random() * 100000) + 1))
    cy.get('input[id=password]').type('111111111')
    cy.get('input[id=password-confirmation]').type('111111111')
    cy.get('input[class="form-check-input"]').click()
    cy.get('button[type="submit"]').click()
  })
  
  it('Register with existing email', () => {
    cy.get('a[href="/register"]').click()
    cy.get('input[id=first-name]').type('Mika')
    cy.get('input[id=last-name]').type('Antic')
    cy.get('input[id=email]').type('mejl@mejlmejl')
    cy.get('input[id=password]').type('111111111')
    cy.get('input[id=password-confirmation]').type('111111111')
    cy.get('input[class="form-check-input"]').click()
    cy.get('button[type="submit"]').click()
  })




})