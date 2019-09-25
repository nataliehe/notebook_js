describe('Notes', () => {
  it('can add a new note and display it', () => {
    cy.visit('/notes');
    cy.contains('New note').click();
    cy.get('#new-note-form').find('#note').type('Hello Notebook');
    cy.get('#new-note-form').submit();
    cy.get('.notes').should('contain', 'Hello Notebook');
  });
});
