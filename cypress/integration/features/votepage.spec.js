describe('Can go to vote card page for a particular company - Activision Blizzard', () => {
    it('successfully loads', () => {
      cy.visit('/')

      // Given user is on the landing page for WD site
      cy.title().should('eq', 'Sample Disclosure')
        
      // When user clicks the Company Name 'Activision Blizzard Inc' hyperlink
      // go to the second page
      cy.get('a.k-link:nth-child(4)').click()

      var SelectorAriaLabel = "a[aria-label*='"
      var CompanyName = 'Activision Blizzard Inc'
      var SelectorCloser =  "']"
      var CompanySelector = SelectorAriaLabel.concat(CompanyName, SelectorCloser)

      cy.get(CompanySelector).click()

      // Then the user lands onto the 'Activision Blizzard Inc' vote card page.        
      // And 'Activision Blizzard Inc' should appear in the top banner
      cy.get('h2#detail-issuer-name')
        .should('contain.text', CompanyName)
    })
})