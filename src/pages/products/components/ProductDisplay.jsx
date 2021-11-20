import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contextprovider/ProductContext';

const ProductDisplay = ({ product }) => {
	const { handleAddToCart } = useContext(ProductContext);

	return (
		<div className='bg-white rounded-lg pb-4 relative lg:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:scale-105'>
			<Link to={`/home/product/${product.id}`}>
				<div className='border-b'>
					<img
						className='w-full object-cover rounded-t-lg '
						src={product.media.source}
						alt={product.name}
					/>
				</div>

				<div className='ml-2  my-2'>
					<h5 className='text-gray-700 font-medium text-xs'>{product.name}</h5>
				</div>
			</Link>

			<div className='text-gray-700 ml-2 mb-2 text-sm'>
				<h5>{product.price.formatted_with_symbol} USD</h5>
			</div>
			<div className=' w-full flex justify-center'>
				<button
					className='focus:outline-none focus:ring-yellow-400 focus:ring-2 rounded-3xl bg-orange-700 hover:bg-orange-800 text-gray-50 text-xs p-1 tracking-wider items-center'
					onClick={() => handleAddToCart(product.id, 1)}
				>
					ADD TO CART
				</button>
			</div>
		</div>
	);
};

export default ProductDisplay;
