import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getCategories } from '../redux/categories/slice-list';
import { useAppDispatch, useAppSelector } from '../redux/store';

const Categories = () => {
	const { categories } = useAppSelector((state) => state.categoriesList);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);
	return (
		<div className='flex-col items-center md:flex'>
			<nav className='flex h-16 w-full items-end justify-center space-x-8 bg-gray-600 pb-2 text-sm font-medium text-gray-100'>
				{categories?.map((category) => (
					<Link
						to={`/category/${category}`}
						className='focuse:text-gray-400 text-gray-300 hover:text-gray-400'
					>
						{category}
					</Link>
				))}
			</nav>
			<div className='md:w-8/12'>
				<Outlet />
			</div>
		</div>
	);
};

export default Categories;
