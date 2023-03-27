import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/userPage';
import { ProductDetails } from './components/userPage/products';

import Products from './components/userPage/products/Products';
import { Cart, Home } from './pages';
import Checkout from './pages/cart/Checkout';
import OrderDetails from './pages/cart/orderDetails';
import ShippingAddress from './pages/cart/ShippingAddress';
import DashboardPage from './pages/dashboard/DashboardPage';
import OrdersTable from './pages/dashboard/order/OrdersTable';
import ProductTable from './pages/dashboard/products/ProductTable';
import ProductUpdate from './pages/dashboard/products/ProductUpdate';
import UserTable from './pages/dashboard/users/users-table';
import ProductsPage from './pages/ProductsPage';
import Login from './pages/users/login';
import Profile from './pages/users/profile';
import Register from './pages/users/register';
import AdminProvider from './utils/admin-provider';
import AuthProvider from './utils/auth-provider';

const App = () => {
	return (
		<div className='flex h-screen flex-col justify-between overflow-x-hidden font-sans'>
			<Routes>
				<Route index element={<Home />} />
				<Route path='home' element={<Home />} />
				<Route path='products/:category' element={<ProductsPage />}>
					<Route path=':category' element={<Products />} />
					<Route index element={<Products />} />
				</Route>
				<Route path='/product/:id' element={<ProductDetails />} />
				<Route path='cart' element={<Cart />} />
				<Route
					path='/shipping-address'
					element={
						<AuthProvider>
							<ShippingAddress />
						</AuthProvider>
					}
				/>
				<Route
					path='/checkout'
					element={
						<AuthProvider>
							<Checkout />
						</AuthProvider>
					}
				/>
				<Route
					path='/profile/:id'
					element={
						<AuthProvider>
							<Profile />
						</AuthProvider>
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route
					path='/orders/:id'
					element={
						<AuthProvider>
							<OrderDetails />
						</AuthProvider>
					}
				/>
				<Route
					path='/dashboard'
					element={
						<AdminProvider>
							<DashboardPage />
						</AdminProvider>
					}
				/>
				<Route
					path='/dashboard/product-list'
					element={
						<AdminProvider>
							<ProductTable />
						</AdminProvider>
					}
				/>
				<Route
					path='/dashboard/product-list/:pageNumber'
					element={
						<AdminProvider>
							<ProductTable />
						</AdminProvider>
					}
				/>
				<Route
					path='/dashboard/user-list'
					element={
						<AdminProvider>
							<UserTable />
						</AdminProvider>
					}
				/>
				<Route
					path='/dashboard/orders-list'
					element={
						<AdminProvider>
							<OrdersTable />
						</AdminProvider>
					}
				/>
				<Route
					path='/dashboard/product-edit/:id'
					element={
						<AdminProvider>
							<ProductUpdate />
						</AdminProvider>
					}
				/>
			</Routes>
			<Toaster position='top-center' reverseOrder={false} />
			<Footer />
		</div>
	);
};

export default App;
