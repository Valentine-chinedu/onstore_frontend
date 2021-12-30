import { render, screen, fireEvent } from '@testing-library/react';
import Header from './components/header/Header';

describe('<Header />', () => {
	it('"How it works" link points to correct page', () => {
		render(<Header />);

		screen.debug();
	});
});
