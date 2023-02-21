describe('Dashboard Spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {fixture: 'reservations.json'})
    cy.visit('http://localhost:3000/')
  })
  
  it('passes', () => {
    
  })
})