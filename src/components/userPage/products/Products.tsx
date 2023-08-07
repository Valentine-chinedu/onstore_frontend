import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../../../redux/products/category-slice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';

import ProductDisplay from './ProductDisplay';
import TopSellingLoader from '../../ui/TopSellingLoader';

const Products = () => {
	const { products: items, loading } = useAppSelector(
		(state) => state.productsByCategory
	);

	const dispatch = useAppDispatch();
	const params = useParams();
	const category = params.category;

	console.log(items);

	useEffect(() => {
		dispatch(getProductByCategory(category!));
	}, [dispatch, category]);

	if (loading) {
		return <TopSellingLoader />;
	}
	return (
		<div className='mx-4 grid h-full grid-cols-2 gap-x-4 gap-y-6 md:mx-0 md:grid-cols-4 md:gap-x-8 md:gap-y-12 lg:py-8'>
			{items?.map((item) => (
				<div className='' key={item._id}>
					<ProductDisplay product={item} />
				</div>
			))}
		</div>
	);
};

export default Products;
