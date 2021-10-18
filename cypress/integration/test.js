describe('Simple test', () => {
    it('Search for ORF in Google', () => {

        cy.visit('https://www.google.at');
        cy.get('#L2AGLb > .jyfHyd')
            .click();     
        cy.get('.gLFyf')
            .type('orf')
            .type('{enter}');
     });
});

