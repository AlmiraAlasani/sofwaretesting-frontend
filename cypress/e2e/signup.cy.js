// cypress/integration/signup.spec.js
describe('Signup', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('registers a new user', () => {
      const username = 'testuser';
      const password = 'testpassword';
  
      cy.intercept('POST', '**/api/auth/register').as('registerRequest');
  
      cy.get('input[type="text"]').type(username).should('have.value', username);
      cy.get('input[type="password"]').type(password).should('have.value', password);
  
      cy.get('button[type="submit"]').click();
  
      cy.wait('@registerRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(200); // Assuming successful registration returns status code 200
  
        // Add assertions for success response handling if applicable
  
        // Example: Check if a success message is displayed
        cy.contains('Registration successful').should('be.visible');
      });
    });
  
    it('displays an error message on registration failure', () => {
      const username = 'testuser';
      const password = 'testpassword';
  
      cy.intercept('POST', '**/api/auth/register', {
        statusCode: 500,
        body: { message: 'Registration failed' },
      }).as('registerRequest');
  
      cy.get('input[type="text"]').type(username).should('have.value', username);
      cy.get('input[type="password"]').type(password).should('have.value', password);
  
      cy.get('button[type="submit"]').click();
  
      cy.wait('@registerRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(500);
  
        // Add assertions for error response handling if applicable
  
        // Example: Check if an error message is displayed
        cy.contains('Registration failed').should('be.visible');
      });
    });
  });
  