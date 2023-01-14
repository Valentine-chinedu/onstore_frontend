import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
// import { ProductContext } from '../../contextprovider/ProductContext';
import {
	useAddToCartMutation,
	useGetCartQuery,
	useGetProductsQuery,
} from '../../services/clientApi';

function ProductDetails() {
	const params = useParams();
	const navigate = useNavigate();

	const { data: products, isLoading } = useGetProductsQuery();
	const [addToCart, { isLoading: isUpdating }] = useAddToCartMutation();
	const { data: cart } = useGetCartQuery();

	const product = products!.find((x) => x.id === params.id);
	console.log(product);

	return (
		<div className='pt-4 pb-8'>
			{isLoading ? (
				<div className='flex h-screen items-center justify-center'>
					<FaSpinner size={20} className='animate-spin' />
				</div>
			) : (
				<div>
					<div className='ml-4 mb-4 flex items-center'>
						<BsArrowLeft />
						<button onClick={() => navigate(-1)} className='ml-2 text-sm'>
							Back to results
						</button>
					</div>
					<div className='md:flex md:justify-center md:py-8'>
						<div className='mx-4'>
							<img
								className='w-full md:h-72 md:w-64 lg:h-96 lg:w-80'
								src={product!.media.source}
								alt={product!.name}
								loading='lazy'
							/>
						</div>
						<div>
							<div className='ml-4 mt-2'>
								<h2 className='text-sm font-medium text-gray-900'>
									{product!.name}
								</h2>

								<div className='mb-4 flex items-center'>
									<h3 className='font-bold tracking-wide text-gray-900'>
										{product!.price.formatted_with_symbol}
									</h3>
								</div>
							</div>
							<div className='ml-4 mb-4 w-40 rounded-lg border-2 px-2 py-2'>
								<ul>
									<li className='mb-2 text-sm font-medium text-green-600'>
										Status: In Stock
									</li>
									<li>
										{isUpdating ? (
											<div className='flex w-full flex-col items-center justify-center'>
												<FaSpinner size={20} className='mb-4 animate-spin' />
											</div>
										) : (
											<button
												onClick={() => {
													addToCart({
														cart_id: cart!.id,
														product_id: product!.id,
														quantity: 1,
													});
												}}
												className='w-full rounded-2xl bg-orange-600 px-4 py-1 text-xs font-medium text-black
											 hover:bg-orange-800 focus:outline-none '
											>
												ADD TO CART
											</button>
										)}
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
