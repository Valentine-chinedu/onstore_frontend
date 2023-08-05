describe('Login Component', () => {
	beforeEach(() => {
		// Visit the login page before each test
		cy.visit('/login');
	});

	it('should render the Login component without errors', () => {
		// Assert that the Login component is rendered
		cy.get('form').should('exist');
	});

	it('should display validation errors for empty form submission', () => {
		// Submit the form without filling in any data
		cy.get('[data-testid="login-button"]').click();

		// Assert validation errors for email and password
		cy.contains('Email is required').should('be.visible');
		cy.contains('Password is required').should('be.visible');
	});

	it('should display validation error for an invalid email', () => {
		// Fill in an invalid email
		cy.get('[data-testid="email-input"]').type('invalid_email');
		cy.get('[data-testid="login-button"]').click();

		// Assert validation error for email
		cy.contains('Email is invalid').should('be.visible');
	});

	it('should display validation error for a password with less than 6 characters', () => {
		// Fill in a password with less than 6 characters
		cy.get('[data-testid="password-input"]').type('short');
		cy.get('[data-testid="login-button"]').click();

		// Assert validation error for password
		cy.contains('Password must be at least 6 characters').should('be.visible');
	});

	it('should log in successfully with valid credentials', () => {
		// Fill in valid email and password
		cy.get('[data-testid="email-input"]').type('valentine11.dev@gmail.com');
		cy.get('[data-testid="password-input"]').type('Young2sis');
		cy.get('[data-testid="login-button"]').click();

		// Assert successful login and redirect to the home page
		cy.url().should('eq', 'http://localhost:3000/');
	});

	it('should perform a demo login successfully', () => {
		// Click the "Demo Login" button
		cy.get('[data-testid="demo-login-button"]').click();

		// Assert that the demo credentials are filled
		cy.get('[data-testid="email-input"]').should(
			'have.value',
			'valentine11.dev@gmail.com'
		);
		cy.get('[data-testid="password-input"]').should('have.value', 'Young2sis');

		// Submit the form and perform a demo login
		cy.get('[data-testid="demo-login-button"]').click();

		// Assert successful demo login and redirect to the home page
		cy.url().should('eq', 'http://localhost:3000/');
	});

	it('should navigate to the registration page', () => {
		// Click the "Register" link
		cy.contains('Register').click();

		// Assert navigation to the registration page
		cy.url().should('eq', 'http://localhost:3000/register');
	});
});
