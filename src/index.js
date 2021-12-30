import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App';
import ProductProvider from './contextprovider/ProductContext';

ReactDOM.render(
	<BrowserRouter>
		<ScrollToTop />
		<ProductProvider>
			<App />
		</ProductProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
