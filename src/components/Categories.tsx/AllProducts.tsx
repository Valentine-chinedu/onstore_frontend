/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';

import { FaSpinner } from 'react-icons/fa';
import { ProductContext } from '../../contextprovider/ProductContext';
import ProductDisplay from '../products/ProductDisplay';

const AllProducts = () => {
	const { products, loadingProducts } = useContext(ProductContext);
	return (
		<div>
			{loadingProducts ? (
				<div className='flex h-screen flex-col items-center justify-center'>
					<FaSpinner size={20} className='mb-4 animate-spin' />
				</div>
			) : (
				<div className=' mx-4 grid h-full grid-cols-2 gap-x-4 gap-y-6 py-8 md:mx-0 md:grid-cols-4 md:gap-x-8 md:gap-y-12'>
					{products!.map((product) => (
						<div className='' key={product.id}>
							<ProductDisplay product={product} />
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default AllProducts;
