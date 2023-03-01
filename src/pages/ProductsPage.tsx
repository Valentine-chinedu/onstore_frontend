import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import DefaultLayout from '../components/adminPage/layouts/DefaultLayout';
import { getCategories } from '../redux/categories/slice-list';
import { useAppDispatch, useAppSelector } from '../redux/store';

const ProductsPage = () => {
	const { categories } = useAppSelector((state) => state.categoriesList);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	const filteredCategory = categories?.filter(
		(category) => category !== 'featured-item' && category !== 'top-selling'
	);

	return (
		<DefaultLayout>
			<div className='flex-col items-center md:flex'>
				<nav className='flex h-16 w-full items-end justify-center space-x-8 bg-gray-600 pb-2 text-sm font-medium text-gray-100'>
					{filteredCategory?.map((category) => (
						<Link
							to={`/products/${category}`}
							className='text-gray-300 hover:text-gray-400 focus:text-gray-400'
						>
							{category}
						</Link>
					))}
				</nav>
				<div className='md:w-8/12'>
					<Outlet />
				</div>
			</div>
		</DefaultLayout>
	);
};

export default ProductsPage;
