import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Categories = () => {
	return (
		<div className='flex-col items-center md:flex'>
			<nav className='flex h-16 w-full items-end justify-center space-x-8 bg-gray-600 pb-2 text-sm font-medium text-gray-100'>
				<Link
					to='pants'
					className=':text-gray-300 focuse:text-gray-400 hover:text-gray-400'
				>
					Pants
				</Link>
				<Link
					to='shirts'
					className=':text-gray-300 focuse:text-gray-400 hover:text-gray-400'
				>
					Shirts
				</Link>
				<Link
					to='shoes'
					className=':text-gray-300 focuse:text-gray-400 hover:text-gray-400'
				>
					Shoes
				</Link>
				<Link
					to='watches'
					className=':text-gray-300 focuse:text-gray-400 hover:text-gray-400'
				>
					Watches
				</Link>
				<Link
					to='allproducts'
					className=':text-gray-300 focuse:text-gray-400 hover:text-gray-400'
				>
					All Products
				</Link>
			</nav>
			<div className='md:w-8/12'>
				<Outlet />
			</div>
		</div>
	);
};

export default Categories;
