import React from 'react';
import { Outlet } from 'react-router-dom';
import DefaultLayout from '../components/layouts/DefaultLayout';

const ProductsPage = () => {
	return (
		<DefaultLayout>
			<div className='flex h-full flex-col items-center justify-center'>
				<div className='md:w-8/12'>
					<Outlet />
				</div>
			</div>
		</DefaultLayout>
	);
};

export default ProductsPage;
