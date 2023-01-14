import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './services/store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<BrowserRouter>
		<ScrollToTop />
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
