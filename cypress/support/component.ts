// Import commands.js using ES2015 syntax:
import './commands';

// Ensure global app styles are loaded:
import '../../src/index.css';

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react18';

Cypress.Commands.add('mount', mount);

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from failing the test
	return false;
});

// Example use:
// cy.mount(<MyComponent />)
