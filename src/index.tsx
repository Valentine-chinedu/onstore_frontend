import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<BrowserRouter>
		<ScrollToTop />
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</BrowserRouter>
);

declare global {
	interface Window {
		Cypress?: Cypress.Cypress;
		store?: any;
	}
}

if (window.Cypress) {
	window.store = store;
}
