import React from 'react';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { reset } from '../../redux/cart/list-slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import authAxios from '../../utils/auth-axios';
import { setError } from '../../utils/error';
import { formatCurrencry } from '../../utils/helper';

const Checkout = () => {
	const { shippingAddress, cartItems } = useAppSelector(
		(state) => state.cartItems
	);
	const dispatch = useAppDispatch();

	const navigate = useNavigate();
	const itemsPrice = cartItems.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	);

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
				dispatch(reset());
				navigate(`/orders/${res.data._id}`);
			})
			.catch((err) => toast.error(setError(err)));
	};

	return (
		<div className='container mx-auto'>
			<div className='flex flex-wrap'>
				<div className='mb-2 w-full md:w-8/12'>
					<div className='bg-white shadow'>
						<div className='p-6'>
							<ul className='list-group list-group-flush'>
								<li className='list-group-item'>
									<div className='flex items-center justify-between'>
										<span className='text-lg'>Address:</span>
										<span className='text-lg'>
											{shippingAddress?.address} {shippingAddress?.city}{' '}
											{shippingAddress?.postalCode}
										</span>
									</div>
								</li>
								<h3 className='my-3'>Items</h3>
								{cartItems.map((item) => (
									<li className='list-group-item mb-2' key={item.productId}>
										<div className='flex'>
											<div className='md:w-2/12'>
												<img
													src={item.media}
													alt=''
													className='h-16 w-16 rounded-full'
												/>
											</div>
											<div className='md:w-6/12'>{item.name}</div>
											<div className='w-12'>{item?.quantity}</div>
											<div className='w-12'>
												{formatCurrencry(item.price * item.quantity)}
											</div>
											<div className='w-12'></div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className='w-full md:w-4/12'>
					<div className='bg-white shadow'>
						<div className='p-6'>
							<ul className='list-group list-group-flush'>
								<li className='list-group-item'>
									SubTotal (
									{cartItems.reduce((acc, item) => acc + item.quantity, 0)})
									item
								</li>
								<li className='list-group-item flex items-center justify-between'>
									<span className='text-lg'>Total Price :</span>
									<span className='text-lg'>
										{formatCurrencry(
											cartItems.reduce(
												(acc, item) => acc + item.price * item.quantity,
												0
											)
										)}
									</span>
								</li>
								<li className='list-group-item flex items-center justify-between'>
									<span className='text-lg'>Tax Price</span>
									<span className='text-lg'>{formatCurrencry(taxPrice)}</span>
								</li>
								<li className='list-group-item flex items-center justify-between'>
									<span className='text-lg'>Shipping Price</span>
									<span className='text-lg'>
										{formatCurrencry(shippingPrice)}
									</span>
								</li>
								<li className='list-group-item flex items-center justify-between'>
									<span className='text-lg'>Total Price</span>
									<span className=''>{formatCurrencry(totalPrice)}</span>
								</li>
								<li className='flex items-center justify-between'>
									<button
										className='w-full'
										onClick={onSubmit}
										disabled={cartItems.length === 0}
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
