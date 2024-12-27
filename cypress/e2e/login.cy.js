describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://citaweb.clinicasanfelipe.com/CSF_CITAS',{
      headers: {
        'accept': 'application/json, text/plain, */*',
        'user-agent': 'axios/0.27.2'
      }
    })

    cy.wait(2000)

    cy.get('input[data-value="1"]').first().click({force: true})

    cy.get('#txtDni').type('72635086')

    cy.get('#div_LO_backpass').click()
    cy.get('#div_LO_backpass').click()
    cy.get('#div_LO_backpass').click()
    cy.get('#div_LO_backpass').click()

    cy.get('.number-item').contains("1").click()
    cy.get('.number-item').contains("1").click()
    cy.get('.number-item').contains("1").click()
    cy.get('.number-item').contains("1").click()

    cy.wait(1000)

    cy.get('#btnLogin').click()
  })
})