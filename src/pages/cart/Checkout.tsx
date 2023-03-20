import React from 'react';

import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../redux/store';
import authAxios from '../../utils/auth-axios';
import { setError } from '../../utils/error';
import { formatCurrencry } from '../../utils/helper';

const Checkout = () => {
	const navigate = useNavigate();

	const { shippingAddress, cartItems } = useAppSelector((state) => state.cart);

	const itemTotalPrices = cartItems.map((item) => {
		const totalPrice = item.price * item.qty;
		return totalPrice;
	});

	const itemsPrice = itemTotalPrices.reduce((sum, item) => sum + item, 0);

	const taxPrice = itemsPrice * 0.1;

	const shippingPrice = itemsPrice >= 200 ? 0 : 30;

	const totalPrice = itemsPrice + taxPrice + shippingPrice;

	const onSubmit = () => {
		const order = {
			totalPrice,
			cartItems,
			shippingAddress,
		};
		authAxios
			.post('/orders', order)
			.then((res) => {
				toast.success('your order has been created');
				navigate(`/orders/${res?.data._id}`);
			})
			.catch((err) => toast.error(setError(err)));
	};

	return (
		<div className='container mx-auto mb-12 h-full w-full space-y-2 pt-4'>
			<Link
				to='/cart'
				className='ml-2 text-sm font-medium underline md:text-lg'
			>
				Back to Cart
			</Link>
			<div className='flex h-full flex-col items-center space-y-2 md:space-y-4'>
				<div className=' w-full md:w-8/12'>
					<div className='mx-2 border border-gray-400 bg-white md:mx-0'>
						<div className='p-6'>
							<ul className=''>
								{cartItems?.map((item) => (
									<li className=' mb-8' key={item._id}>
										<div className='flex items-center justify-between'>
											<div className='flex items-center md:w-4/12'>
												<img
													src={item.image}
													alt=''
													className='mr-4 h-10 w-10 rounded-full md:h-16 md:w-16'
												/>
												<div className='text-sm md:w-6/12 md:text-base'>
													{item.name}
												</div>
											</div>
											<div className='w-12 text-sm md:text-base'>
												{item?.qty}
											</div>
											<div className='w-12 text-sm md:text-base'>
												{formatCurrencry(item.price * item.qty)}
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className='h-full w-full md:w-4/12'>
					<div className='mx-2 border border-gray-400 bg-white'>
						<div className=' p-6'>
							<ul className='space-y-4'>
								<li className=''>
									<div className=' flex flex-col items-start md:flex'>
										<span className='mb-2 text-sm font-medium md:mb-0 md:text-lg'>
											Address:
										</span>
										<span className='text-sm md:text-base'>
											{shippingAddress?.address}, {shippingAddress?.city},
											{shippingAddress?.postalCode}
										</span>
									</div>
								</li>
								<li className='text-sm font-medium md:text-base'>
									SubTotal (
									{cartItems?.reduce((acc, item) => acc + item.qty, 0)}) item
								</li>
								<li className=' flex items-center justify-between'>
									<span className='text-sm font-medium md:text-lg'>
										Total Price{' '}
									</span>
									<span className='text-sm md:text-lg'>
										{formatCurrencry(itemsPrice)}
									</span>
								</li>
								<li className=' flex items-center justify-between'>
									<span className='text-sm font-medium md:text-lg'>
										Tax Price
									</span>
									<span className='text-sm md:text-lg'>
										{formatCurrencry(taxPrice)}
									</span>
								</li>
								<li className=' flex items-center justify-between'>
									<span className='text-sm font-medium md:text-lg'>
										Shipping Price
									</span>
									<span className='text-sm md:text-lg'>
										{formatCurrencry(shippingPrice)}
									</span>
								</li>
								<li className=' flex items-center justify-between'>
									<span className='text-base font-medium md:text-lg'>
										Total Price
									</span>
									<span className='text-base md:text-xl'>
										{formatCurrencry(totalPrice)}
									</span>
								</li>
								<li className='flex items-center justify-between'>
									<button
										className='w-full rounded-md bg-gray-200 py-2 font-semibold shadow-md hover:bg-gray-300'
										onClick={onSubmit}
										disabled={cartItems?.length === 0}
									>
										Place Order
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
