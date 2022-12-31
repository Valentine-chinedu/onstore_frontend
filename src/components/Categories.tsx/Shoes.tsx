import React, { useContext } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { ProductContext } from '../../contextprovider/ProductContext';
import ProductDisplay from '../products/ProductDisplay';

const Shoes = () => {
	const { products, category, loadingCategory, loadingProducts } =
		useContext(ProductContext);
	const items = products?.filter(
		(x) => x.categories[1]?.slug === category![3]?.slug
	);

	if (loadingCategory && loadingProducts) {
		return (
			<div className='flex h-screen flex-col items-center justify-center'>
				<FaSpinner size={20} className='mb-4 animate-spin' />
			</div>
		);
	}
	return (
		<div className='mx-4 grid h-full grid-cols-2 gap-x-4 gap-y-6 py-8 md:mx-0 md:grid-cols-4 md:gap-x-8 md:gap-y-12'>
			{items!.map((item) => (
				<div className='' key={item.id}>
					<ProductDisplay product={item} />
				</div>
			))}
		</div>
	);
};

export default Shoes;
