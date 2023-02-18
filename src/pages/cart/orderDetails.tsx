import React, { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { formatCurrencry } from '../../utils/helper';
import Stripe from 'react-stripe-checkout';
import authAxios from '../../utils/auth-axios';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import Loader from '../../components/ui/Loader';
import { getOrderById } from '../../redux/order/order-details';

const OrderDetails = () => {
	const { order, loading } = useAppSelector((state) => state.orderDetail);
	const dispatch = useAppDispatch();
	const { id } = useParams();

	const itemsPrice: number | undefined = order?.cartItems.reduce(
		(acc, item) => acc + item.qty * item.price,
		0
	);
	const navigate = useNavigate();

	const taxPrice = itemsPrice ? itemsPrice * 0.1 : 0;

	const shippingPrice = itemsPrice ? (itemsPrice >= 200 ? 0 : 30) : 0;

	const totalPrice = itemsPrice && itemsPrice + taxPrice + shippingPrice;

	const handlePayment = (token: any) => {
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
	const tokenHandler = (token: any) => {
		handlePayment(token);
	};

	useEffect(() => {
		dispatch(getOrderById(id));
	}, [dispatch, id]);

	return (
		<div className='container mx-auto'>
			<h2 className='mb-5'>Payment</h2>

			{loading ? (
				<Loader />
			) : (
				<div>
					<div className='mb-2'>
						<div>
							<div>
								<h4>Order Summery</h4>
								<ul>
									{order?.cartItems.map((item) => (
										<li key={item._id}>
											<div>
												<div>
													<img src={item.image} alt='' className='h-16 w-16' />
												</div>
												<div className=''>{item.name}</div>
												<div>{item?.qty}</div>

												<div>{formatCurrencry(item.price * item.qty)}</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div>
						<div>
							<div>
								<h2 className='text-center'>Payment</h2>
								<ul>
									<li>
										SubTotal (
										{order?.cartItems.reduce((acc, item) => acc + item.qty, 0)})
										item
									</li>
									<li className='flex items-center justify-between'>
										<span>Total Price :</span>
										<span>
											{formatCurrencry(
												order?.cartItems.reduce(
													(acc, item) => acc + item.price * item.qty,
													0
												)
											)}
										</span>
									</li>
									<li className='flex items-center justify-between'>
										<span>Tax Price</span>
										<span>{formatCurrencry(taxPrice)}</span>
									</li>
									<li className=' d-flex justify-content-between align-items-center'>
										<span>Shipping Price</span>
										<span>{formatCurrencry(shippingPrice)}</span>
									</li>
									<li>
										<h5 className=' d-flex justify-content-between align-items-center'>
											<span>Total Price</span>
											<span>{formatCurrencry(totalPrice)}</span>
										</h5>
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
