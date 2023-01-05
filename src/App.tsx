import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Footer, Header } from './components';
import AllProducts from './components/Categories.tsx/AllProducts';
import Pants from './components/Categories.tsx/Pants';
import Shirts from './components/Categories.tsx/Shirts';
import Shoes from './components/Categories.tsx/Shoes';
import Watches from './components/Categories.tsx/Watches';
import { Cart, Home, ProductDetails } from './pages';
import Categories from './pages/Categories';

const App = () => {
	const { pathname } = useLocation();
	return (
		<div className='h-screen overflow-x-hidden font-sans'>
			{pathname !== '/cart' && pathname !== '/checkout' && <Header />}

			<Routes>
				<Route index element={<Home />} />
				<Route path='home' element={<Home />} />
				<Route path='categories' element={<Categories />}>
					<Route index element={<Pants />} />
					<Route path='pants' element={<Pants />} />
					<Route path='shirts' element={<Shirts />} />
					<Route path='shoes' element={<Shoes />} />
					<Route path='watches' element={<Watches />} />
					<Route path='allproducts' element={<AllProducts />} />
				</Route>
				<Route path='/home/product/:id' element={<ProductDetails />} />
				<Route path='cart' element={<Cart />} />
			</Routes>

			<Footer />
		</div>
	);
};

export default App;