describe('Dashboard Spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {fixture: 'reservations.json'})
    cy.visit('http://localhost:3000/')
  })
  
  it('Should display a heading on page load', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations')
  })

  it('Should display a reservation form on page load', () => {
    cy.get('.res-form').should('be.visible')
  })

  it('Should display already submitted reservations on page load', () => {
    cy.get('.resy-container').children().should('have.length', 3)
  })

  it('Should update form data when the user inputs information', () => {
    cy.get()
  })

})