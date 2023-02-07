import React, { useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';

import { useParams, useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart/addToCart-slice';
import { getProductById } from '../../redux/products/details-slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

function ProductDetails() {
	const { product, loading } = useAppSelector((state) => state.productDetail);
	const { userInfo } = useAppSelector((state) => state.login);
	const { loading: isLoading } = useAppSelector((state) => state.addToCart);

	const dispatch = useAppDispatch();
	const params = useParams();
	const { id } = params;

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getProductById('id'));
		window.scrollTo(0, 0);
	}, [id, dispatch]);

	return (
		<div className='pt-4 pb-8'>
			{loading ? (
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
								src={product?.image}
								alt={product?.name}
								loading='lazy'
							/>
						</div>
						<div>
							<div className='ml-4 mt-2'>
								<h2 className='text-sm font-medium text-gray-900'>
									{product?.name}
								</h2>

								<div className='mb-4 flex items-center'>
									<h3 className='font-bold tracking-wide text-gray-900'>
										{product?.price}
									</h3>
								</div>
							</div>
							<div className='ml-4 mb-4 w-40 rounded-lg border-2 px-2 py-2'>
								<ul>
									<li className='mb-2 text-sm font-medium text-green-600'>
										Status: In Stock
									</li>
									<li>
										<button
											className='font- items-center rounded-lg bg-[#FFA500] px-2 py-1 text-xs font-medium tracking-wider text-black hover:bg-orange-800 focus:outline-none disabled:bg-gray-500'
											disabled={userInfo === null}
											onClick={() =>
												dispatch(
													addToCart({
														productId: product!._id,
														userId: userInfo!._id,
														quantity: 1,
													})
												)
											}
										>
											{isLoading ? (
												<FaSpinner size={20} className='mb-4 animate-spin' />
											) : (
												'Add To Cart'
											)}
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
