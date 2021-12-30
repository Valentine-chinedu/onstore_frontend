import React, { useContext } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ProductContext } from '../../contextprovider/ProductContext';

type TParams = { id: string };

function ProductDetails({ match }: RouteComponentProps<TParams>) {
	const { products, handleAddToCart } = useContext(ProductContext);
	const product = products!.find((x) => x.id === match.params.id);

	return (
		<div className='pt-4'>
			{!product ? (
				<div className='flex justify-center items-center h-screen'>
					<FaSpinner size={20} className='animate-spin' />
				</div>
			) : (
				<div>
					<div className='flex items-center ml-4 mb-4'>
						<BsArrowLeft />
						<Link to='/home/products' className='text-sm ml-2'>
							Back to results
						</Link>
					</div>
					<div className='md:flex md:justify-center md:py-8'>
						<div className='mx-4'>
							<img
								className='w-full md:h-72 md:w-64 lg:h-96 lg:w-80'
								src={product.media.source}
								alt={product.name}
							/>
						</div>
						<div>
							<div className='ml-4 mt-4'>
								<h2 className='font-bold text-xl'>{product.name}</h2>

								<h3 className='flex'>
									<p className='mr-1'>Rating:</p>
									rating
								</h3>

								<div className='flex items-center mb-8'>
									<h3 className='text-xl mr-1 tracking-wide'>
										{product.price.formatted_with_symbol}
									</h3>
									<h3 className='text-xl tracking-wide mr-4'>USD</h3>
									<h3 className='tracking-wider line-through text-red-600'>
										$59.99USD
									</h3>
								</div>
							</div>
							<div className='ml-4 border-2 w-40 px-2 py-2 rounded-lg mb-4'>
								<ul>
									<li className='text-sm mb-2 font-medium text-green-600'>
										Status: In Stock
									</li>
									<li>
										<button
											onClick={() => {
												handleAddToCart!(product.id, 1);
											}}
											className='bg-orange-600 hover:bg-orange-800 text-white text-xs px-4 py-1 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 '
										>
											ADD TO CART
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default ProductDetails;
