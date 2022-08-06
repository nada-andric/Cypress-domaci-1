describe('Registration', () => {
    beforeEach(() => {
      cy.visit('https://gallery-app.vivifyideas.com/')
    })
    
    
    
    it('Successful login', () => {
      cy.get('a[href="/login"]').click()
      cy.get('input[id=email]').type('mejl@mejl.mejl')
      cy.get('input[id=password]').type('11111111')
      cy.get('button[type="submit"]').click()
    })

    it('Login without email', () => {
        cy.get('a[href="/login"]').click()
        cy.get('input[id=password]').type('11111111')
        cy.get('button[type="submit"]').click()
      })
 
      it('Login without password', () => {
        cy.get('a[href="/login"]').click()
        cy.get('input[id=email]').type('mejl@mejl.mejl')
        cy.get('button[type="submit"]').click()
      })

      it('Login without  required requirements', () => {
        cy.get('a[href="/login"]').click()
        cy.get('button[type="submit"]').click()
      })

      it('Login with wrong password', () => {
        cy.get('a[href="/login"]').click()
        cy.get('input[id=email]').type('mejl@mejl.mejl')
        cy.get('input[id=password]').type('111111115435')
        cy.get('button[type="submit"]').click()
      })

      it('Login with wrong email', () => {
        cy.get('a[href="/login"]').click()
        cy.get('input[id=email]').type('mejl@mejl.com')
        cy.get('input[id=password]').type('111111115435')
        cy.get('button[type="submit"]').click()
      })
})
