describe('Can use a meeting filter by Country - Belgium', () => {
    it('successfully loads', () => {
      cy.visit('/')

      // Given user is on the landing page for WD site
      cy.title().should('eq', 'Sample Disclosure')

      // Given the Country filter is available
      // When user selects 'Belgium' from the Country filter list on left panel
      cy.get('#Belgium-cb-label-CountryFilter').click()

      // And clicks on Update button for the country filter list
      cy.get('#btn-update').click()

      // Then the grid displays all meetings that are associated with the country 'Belgium'
      cy.get('tr > td:nth-child(3)').should(($lis) => {
          expect($lis).to.have.length(24)
          expect($lis.eq(0)).to.contain('Special')
        }) 

      cy.get('tr > td:nth-child(4)')
        .should('contain.text', 'Belgium')

      // And no meetings associated with any other country appear on the list

      cy.get('tr > td:nth-child(4)')
          .should('not.contain.text', 'Australia')

    })
  })
