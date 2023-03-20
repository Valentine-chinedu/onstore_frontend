import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';

import { useParams, useNavigate } from 'react-router-dom';
import { addToCart } from '../../../redux/cart/cart-Slice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { formatCurrencry } from '../../../utils/helper';
import DefaultLayout from '../../layouts/DefaultLayout';

function ProductDetails() {
	const { products, loading } = useAppSelector((state) => state.productList);
	const { userInfo } = useAppSelector((state) => state.login);

	const dispatch = useAppDispatch();
	const params = useParams();
	const { id } = params;

	const product = products?.find((product) => product._id === id);

	const navigate = useNavigate();

	console.log(product);

	return (
		<DefaultLayout>
			<div className='h-full pt-4 pb-8'>
				{loading ? (
					<div className='flex h-screen items-center justify-center'>
						<FaSpinner size={20} className='animate-spin' />
					</div>
				) : (
					<div className='h-full'>
						<div className='ml-4 mb-4 flex items-center'>
							<BsArrowLeft size={20} />
							<button
								onClick={() => navigate(-1)}
								className='ml-2 font-medium  '
							>
								Back to results
							</button>
						</div>
						<div className='h-full items-center md:flex md:justify-center'>
							<div className='mx-4 bg-gray-500 object-contain'>
								<img
									className='w-full'
									src={product?.image}
									alt={product?.name}
									loading='lazy'
								/>
							</div>
							<div>
								<div className='ml-4 mt-2 mb-2 space-y-4 '>
									<h2 className='text-sm font-semibold text-gray-900 lg:text-xl'>
										{product?.name}
									</h2>

									<div className='flex items-center'>
										<h3 className='font-bold tracking-wide text-gray-900'>
											{formatCurrencry(product?.price)}
										</h3>
									</div>
								</div>
								<div className='ml-4 mb-4 w-40 rounded-lg border-2 border-gray-400 p-4'>
									<ul>
										<li className='mb-2 text-sm font-medium text-green-600 lg:text-lg'>
											Instock: {product?.qty}
										</li>
										<li>
											<button
												className='font- items-center rounded-lg bg-[#FFA500] px-2 py-2 text-xs font-bold tracking-wider text-gray-800 hover:bg-orange-800 focus:outline-none disabled:bg-gray-500'
												disabled={userInfo === null}
												onClick={() => dispatch(addToCart(product!))}
											>
												'Add To Cart'
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</DefaultLayout>
	);
}

export default ProductDetails;
