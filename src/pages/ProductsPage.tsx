import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import DefaultLayout from '../components/layouts/DefaultLayout';
import { getCategories } from '../redux/categories/slice-list';
import { useAppDispatch, useAppSelector } from '../redux/store';

const ProductsPage = () => {
	const { categories } = useAppSelector((state) => state.categoriesList);
	const filteredCategory = categories?.filter(
		(category) => category !== 'featured-item' && category !== 'top-selling'
	);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);
	return (
		<DefaultLayout>
			<div className=''>
				<div className='flex w-full items-center justify-center space-x-4 bg-gray-500 lg:space-x-8'>
					{filteredCategory?.map((category) => (
						<NavLink to={`/products/${category}`} className='nav-btn'>
							{category}
						</NavLink>
					))}
				</div>
				<div className='flex h-full flex-col items-center py-8 md:container md:mx-auto'>
					<Outlet />
				</div>
			</div>
		</DefaultLayout>
	);
};

export default ProductsPage;
