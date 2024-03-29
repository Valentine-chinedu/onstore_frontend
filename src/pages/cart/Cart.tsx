import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi';
import { FaSpinner } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { formatCurrencry } from '../../utils/helper';
import {
	decreaseItemQty,
	increaseItemQty,
	removeFromCart,
	reset,
} from '../../redux/cart/cart-Slice';

function Cart() {
	const { cartItems } = useAppSelector((state) => state.cart);

	const dispatch = useAppDispatch();

	const itemTotalPrices = cartItems.map((item) => {
		const totalPrice = item.price * item.qty;
		return totalPrice;
	});

	const totalPrice = itemTotalPrices.reduce((sum, item) => sum + item, 0);

	console.log(itemTotalPrices);

	console.log(cartItems);

	return (
		<div className='h-full w-screen flex-col items-center overscroll-contain pb-12 md:flex'>
			<div className='mb-8 flex w-full items-center justify-between border-b bg-gray-100 py-2 px-6 lg:py-6'>
				<h3 className=' text-lg font-bold tracking-wide lg:text-xl'>
					Your Shopping Cart
				</h3>
				<Link
					to='/home'
					className='rounded-full bg-gray-200 py-3 px-3 text-2xl font-light'
				>
					<AiOutlineClose
						size={18}
						className=' lg:transform lg:duration-150 lg:ease-in-out lg:hover:rotate-90 lg:hover:scale-150'
					/>
				</Link>
			</div>
			<div className='h-full w-full md:w-7/12'>
				{!cartItems ? (
					<div className='flex h-screen flex-col items-center justify-center'>
						<FaSpinner size={20} className='mb-4 animate-spin' />
						<p>Loading....</p>
					</div>
				) : cartItems?.length === 0 ? (
					<div className='flex h-96 flex-col items-center justify-center'>
						<p className='mb-4 font-semibold md:text-xl'>
							There is no item in your cart yet
						</p>
						<Link
							to='/products'
							className='rounded-3xl bg-orange-600 px-4 py-2 text-sm font-semibold tracking-wide text-gray-50 focus:outline-none'
						>
							START SHOPPING
						</Link>
					</div>
				) : (
					cartItems?.map((item, index) => (
						<div
							key={index}
							data-testid='cart-item'
							className=' flex w-full justify-between border-b border-gray-400 px-4 lg:px-8'
						>
							<div className='pt-4'>
								<div className='mb-2 flex  items-center space-x-4'>
									<div className='flex w-24 items-center'>
										<img
											className='h-20'
											src={item.image}
											alt={item.name}
											loading='lazy'
										/>
									</div>
									<div className='space-y-4'>
										<h3 className='text-xs font-semibold text-gray-800'>
											{item.name}
										</h3>
										<h3 className='mr-1 text-sm font-semibold text-orange-800'>
											{formatCurrencry(item.price)}
										</h3>
									</div>
								</div>
								<div className='ml-4 mb-4 items-center text-sm font-bold text-orange-700 hover:text-orange-900'>
									<button
										className='border-b border-gray-400'
										data-testid='remove-button'
										onClick={() => dispatch(removeFromCart(item._id))}
									>
										Remove
									</button>
								</div>
							</div>
							<div className=' flex flex-col items-center justify-center md:flex-row md:space-x-6'>
								<div className='mb-4 flex items-center'>
									<button
										className='focus:outline-none'
										data-testid='decrease-quantity'
										onClick={() => dispatch(decreaseItemQty(item._id))}
									>
										<HiMinusCircle
											size={20}
											className='text-orange-600 hover:text-orange-800'
										/>
									</button>
									<h3 className='mx-1 border-b px-4'>{item.qty}</h3>
									<button
										className='focus:outline-none'
										data-testid='increase-quantity'
										onClick={() => dispatch(increaseItemQty(item._id))}
									>
										<HiPlusCircle
											size={20}
											className='text-orange-600 hover:text-orange-800'
										/>
									</button>
								</div>
							</div>
						</div>
					))
				)}

				{cartItems?.length > 0 ? (
					<div className='mx-4 space-y-8 py-4 md:px-8'>
						<div className='flex justify-between'>
							<h3 className=''>Subtotal: ({cartItems?.length} items)</h3>
							<h3 className='font-bold tracking-wider text-orange-700 lg:text-lg'>
								{formatCurrencry(totalPrice)}
							</h3>
						</div>
						<div className='flex justify-between'>
							<button
								className='border  border-red-500 p-1 text-xs font-medium text-red-600 hover:bg-red-200 focus:outline-none'
								data-testid='empty-cart-button'
								onClick={() => dispatch(reset())}
							>
								EMPTY CART
							</button>
							<Link
								to='/shipping-address'
								data-testid='checkout-button'
								className='border bg-green-600 p-1.5 font-semibold text-gray-100 hover:bg-green-800 focus:outline-none'
							>
								CHECK OUT
							</Link>
						</div>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
}

export default Cart;
