describe('Register Component', () => {
	beforeEach(() => {
		// Visit the register page before each test
		cy.visit('/register');
	});

	it('should render the Register component without errors', () => {
		// Assert that the Register component is rendered
		cy.get('form').should('exist');
	});

	it('should display validation errors for empty form submission', () => {
		// Submit the form without filling in any data
		cy.get('[data-testid="register-button"]').click();

		// Assert validation errors for all fields
		cy.contains('Username is required').should('be.visible');
		cy.contains('Email is required').should('be.visible');
		cy.contains('Password is required').should('be.visible');
		cy.contains('Confirm Password is required').should('be.visible');
	});

	it('should display validation errors for invalid data', () => {
		// Fill in invalid data
		cy.get('[data-testid="username-input"]').type('a');
		cy.get('[data-testid="email-input"]').type('invalid_email');
		cy.get('[data-testid="password-input"]').type('short');
		cy.get('[data-testid="comfirm-password-input"]').type('mismatch');
		cy.get('[data-testid="register-button"]').click();

		// Assert validation errors for each field
		cy.contains('Username must be at least 3 characters').should('be.visible');
		cy.contains('Email is invalid').should('be.visible');
		cy.contains('Password must be at least 6 characters').should('be.visible');
		cy.contains('Confirm Password does not match').should('be.visible');
	});

	it('should register successfully with valid credentials', () => {
		// Fill in valid data
		cy.get('[data-testid="username-input"]').type('john_doe');
		cy.get('[data-testid="email-input"]').type('john@example.com');
		cy.get('[data-testid="password-input"]').type('securePassword');
		cy.get('[data-testid="comfirm-password-input"]').type('securePassword');
		cy.get('[data-testid="register-button"]').click();

		// Assert successful registration and redirect to the login page
		cy.url().should('eq', 'http://localhost:3000/login');
		cy.contains('you have been registred , please login').should('be.visible');
	});

	it('should navigate to the login page', () => {
		// Click the "Login" link
		cy.contains('Login').click();

		// Assert navigation to the login page
		cy.url().should('eq', 'http://localhost:3000/login');
	});
});
