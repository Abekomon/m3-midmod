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
    cy.get('input[name="name"]').type('Max').should('have.value', 'Max')
    cy.get('input[name="date"]').type('02/21').should('have.value', '02/21')
    cy.get('input[name="time"]').type('7:45').should('have.value', '7:45')
    cy.get('input[name="guests"]').type(2).should('have.value', 2)
  })
  
  it('Should allow a user to add a new reservation', () => {
    cy.get('input[name="name"]').type('Max')
    .get('input[name="date"]').type('02/21')
    .get('input[name="time"]').type('7:45')
    .get('input[name="guests"]').type(2)
    .get('.res-form button').click()
    .get('.resy-container').children().should('have.length', 4)
  })

  it('Should not submit a new reservation if all inputs are not filled out', () => {
    cy.get('input[name="name"]').type('Max')
    .get('input[name="date"]').type('02/21')
    .get('input[name="time"]').type('7:45')
    .get('.res-form button').click()
    .get('.resy-container').children().should('have.length', 3)
  })
})