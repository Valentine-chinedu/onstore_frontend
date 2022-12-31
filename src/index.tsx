import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<BrowserRouter>
		<ScrollToTop />
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</BrowserRouter>
);
