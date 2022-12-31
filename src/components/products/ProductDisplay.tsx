import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../contextprovider/ProductContext';

import { Products } from '../../types/products';

interface IProps {
	product: Products;
}
const ProductDisplay = ({ product }: IProps) => {
	const { handleAddToCart } = useContext(ProductContext);

	return (
		<div className='relative rounded-lg border pb-4 shadow-lg md:w-52 lg:w-60 lg:transform lg:transition lg:duration-500 lg:ease-in-out lg:hover:scale-105'>
			<Link to={`/home/product/${product.id}`}>
				<div className='border-b '>
					<img
						className='h-60 w-full rounded-t-lg object-cover'
						src={product.media.source}
						alt={product.name}
						loading='lazy'
					/>
				</div>

				<div className='mt-1 mb-0.5 ml-2'>
					<h5 className='text-xs text-gray-900 '>{product.name}</h5>
				</div>
			</Link>

			<div className='ml-2 mb-2 text-sm font-medium text-gray-900'>
				<h5>{product.price.formatted_with_symbol} </h5>
			</div>
			<div className=' flex w-full justify-center'>
				<button
					className='font- items-center rounded-lg bg-[#FFA500] px-2 py-1 text-xs font-medium tracking-wider text-black hover:bg-orange-800 focus:outline-none'
					onClick={() => handleAddToCart!(product.id, 1)}
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default ProductDisplay;
