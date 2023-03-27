/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { formatCurrencry } from '../../utils/helper';
import Stripe, { Token } from 'react-stripe-checkout';
import authAxios from '../../utils/auth-axios';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import Loader from '../../components/ui/Loader';
import { getOrdersList } from '../../redux/order/slice-list';
import { getOrderById } from '../../redux/order/order-details';

const OrderDetails = () => {
	const { orders, loading } = useAppSelector((state) => state.orders);
	const dispatch = useAppDispatch();
	const { id } = useParams();

	const order = orders?.find((order) => order._id === id!);

	const itemsPrice: number | undefined = order?.cartItems?.reduce(
		(acc, item) => acc + item.qty * item.price,
		0
	);
	const navigate = useNavigate();

	const taxPrice = itemsPrice ? itemsPrice * 0.1 : 0;

	const shippingPrice = itemsPrice ? (itemsPrice >= 200 ? 0 : 30) : 0;

	const totalPrice = itemsPrice && itemsPrice + taxPrice + shippingPrice;

	const handlePayment = (token: Token) => {
		authAxios
			.post('/orders/stripe', {
				token: token.id,
				amount: order?.totalPrice,
			})
			.then((res) => {
				authAxios.put(`/orders/${order?._id}`).then((res) => {
					toast.success('you have been paid successfully🙂');
					navigate('/');
				});
			})
			.catch((error) => toast.error(setError(error)));
	};
	const tokenHandler = (token: Token) => {
		handlePayment(token);
	};

	useEffect(() => {
		dispatch(getOrdersList());
	}, [dispatch]);

	console.log(order);

	return (
		<div className='container mx-auto flex flex-col items-center pb-16 pt-12'>
			<h2 className='mb-5 text-3xl'>Summary</h2>

			{loading ? (
				<Loader />
			) : (
				<div className='w-full space-y-8'>
					<div className=' w-full'>
						<div className='mx-2 border border-gray-400 bg-white md:mx-0'>
							<div className='p-6'>
								<ul className=''>
									{order?.cartItems?.map((item) => (
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
					<div>
						<div className='mx-2 border border-gray-400 bg-white'>
							<div className=' p-6'>
								<ul className='space-y-4'>
									<li className='text-sm font-medium md:text-base'>
										SubTotal (
										{order?.cartItems?.reduce((acc, item) => acc + item.qty, 0)}
										) item
									</li>
									<li className=' flex items-center justify-between'>
										<span className='text-sm font-medium md:text-lg'>
											Total Price{' '}
										</span>
										<span className='text-sm md:text-lg'>
											{formatCurrencry(totalPrice)}
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

									{!order?.isPaid && (
										<li className=''>
											<Stripe
												currency='USD'
												description={`Total Price ${formatCurrencry(
													order?.totalPrice
												)}`}
												name='Type Shop'
												image='/LogoMakr-6Tit9e.png'
												stripeKey={process.env.REACT_APP_STRIPE_KEY!}
												token={tokenHandler}
											/>
										</li>
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default OrderDetails;
