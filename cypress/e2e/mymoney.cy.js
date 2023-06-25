describe('Home Page (Frontend)', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('creates a new transaction', () => {
      // Test for creating a new transaction as before
    });
  
    it('should display the account balance', () => {
      // Test for displaying the account balance as before
    });
  
    it('should delete a transaction', () => {
      // Test for deleting a transaction as before
    });
  
    it('should display the expense transaction', () => {
      // Test for displaying the expense transaction as before
    });
  
    it('should update the account balance correctly', () => {
      // Test for updating the account balance as before
    });
  
    it('should highlight the transaction amount in red if it is an expense', () => {
      // Test for highlighting the transaction amount as before
    });
  
    it('should validate input fields for required values', () => {
      // Test for validating required input fields as before
    });
  
    it('should display a success message after adding a transaction', () => {
      const description = 'Sample Transaction';
      const amount = '50';
  
      cy.get('input[name="description"]').first().type(description);
      cy.get('input[name="amount"]').first().type(amount);
      cy.get('button:contains("Add Transaction")').click();
  
      cy.get('.success-message').should('be.visible').and('contain', 'Transaction added successfully');
    });
  
    it('should clear input fields after successful transaction creation', () => {
      const description = 'Sample Transaction';
      const amount = '50';
  
      cy.get('input[name="description"]').first().type(description);
      cy.get('input[name="amount"]').first().type(amount);
      cy.get('button:contains("Add Transaction")').click();
  
      cy.get('input[name="description"]').should('have.value', '');
      cy.get('input[name="amount"]').should('have.value', '');
    });
  
    it('should display a loading spinner during transaction creation', () => {
      const description = 'Sample Transaction';
      const amount = '50';
  
      cy.intercept('POST', '/api/transactions', {
        delay: 2000, // Add a delay of 2 seconds to simulate a slow request
      }).as('createTransaction');
  
      cy.get('input[name="description"]').first().type(description);
      cy.get('input[name="amount"]').first().type(amount);
      cy.get('button:contains("Add Transaction")').click();
  
      cy.get('.loading-spinner').should('be.visible');
  
      cy.wait('@createTransaction');
  
      cy.get('.loading-spinner').should('not.exist');
    });
  });
  