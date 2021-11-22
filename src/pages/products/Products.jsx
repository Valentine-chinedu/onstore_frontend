/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';

import { FaSpinner } from 'react-icons/fa';
import { ProductContext } from '../../contextprovider/ProductContext';
import ProductDisplay from './components/ProductDisplay';

const Products = () => {
	const { products, loading } = useContext(ProductContext);
	return (
		<div>
			{loading ? (
				<div className='flex flex-col justify-center items-center h-screen'>
					<FaSpinner icon='spinner' size={20} className='animate-spin mb-4' />
					<p>Loading....</p>
				</div>
			) : (
				<div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-0 gap-y-6 lg:gap-y-8 justify-items-center h-full py-8 mx-4 lg:mx-6'>
					{products.map((product) => (
						<div className='' key={product.id}>
							<ProductDisplay product={product} />
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Products;
