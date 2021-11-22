/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi';
import { ProductContext } from '../contextprovider/ProductContext';
import { FaSpinner } from 'react-icons/fa';

function Cart() {
	const { cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart } =
		useContext(ProductContext);

	return (
		<div className='w-screen overscroll-contain'>
			<div className='h-full w-full'>
				<div className='flex justify-between items-center border-b py-2 lg:py-6 px-6 bg-gray-100 mb-8'>
					<h3 className=' font-bold text-lg lg:text-xl tracking-wide'>
						Your Shopping Cart
					</h3>
					<Link
						to='/home/products'
						className='bg-gray-200 py-3 px-3 font-light text-2xl rounded-full'
					>
						<AiOutlineClose
							size={18}
							className=' lg:transform lg:hover:scale-150 lg:ease-in-out lg:duration-150 lg:hover:rotate-90'
						/>
					</Link>
				</div>

				{!cart.line_items ? (
					<div className='flex flex-col justify-center items-center h-screen'>
						<FaSpinner icon='spinner' size={20} className='animate-spin mb-4' />
						<p>Loading....</p>
					</div>
				) : cart.line_items.length === 0 ? (
					<div className='flex flex-col justify-center items-center h-96'>
						<p className='mb-4'>There is no item in your cart yet</p>
						<Link
							to='/home/products'
							className='bg-orange-600 rounded-3xl px-4 py-2 text-sm text-gray-50 font-semibold tracking-wide focus:outline-none'
						>
							START SHOPPING
						</Link>
					</div>
				) : (
					cart.line_items.map((item) => (
						<div
							key={item.id}
							className='flex justify-between border-b border-gray-400 w-full px-4 lg:px-8'
						>
							<div className='pt-4'>
								<div className='flex items-center  space-x-4 mb-2'>
									<img
										className='h-20'
										src={item.media.source}
										alt={item.name}
									/>
									<div className='space-y-4'>
										<h3 className='text-xs lg:text-lg text-gray-800 tracking-wider font-semibold'>
											{item.name}
										</h3>
										<h3 className='font-semibold mr-1 text-xs lg:text-lg text-orange-800 tracking-wide'>
											{item.price.formatted_with_symbol}
										</h3>
									</div>
								</div>
								<div className='items-center ml-4 mb-4 text-sm text-orange-700 font-bold hover:text-orange-900'>
									<button
										className='border-gray-400 border-b'
										onClick={() => handleRemoveFromCart(item.id)}
									>
										Remove
									</button>
								</div>
							</div>
							<div className=' flex flex-col md:flex-row justify-center items-center md:space-x-6'>
								<div className='flex items-center mb-4'>
									<button
										className='focus:outline-none'
										onClick={() =>
											handleUpdateCartQty(item.id, item.quantity - 1)
										}
									>
										<HiMinusCircle
											size={20}
											className='text-orange-600 hover:text-orange-800'
										/>
									</button>
									<h3 className='px-4 mx-1 border-b'>{item.quantity}</h3>
									<button
										className='focus:outline-none'
										onClick={() =>
											handleUpdateCartQty(item.id, item.quantity + 1)
										}
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

				<div className='mx-4 py-4 md:container md:px-4 md:mx-auto'>
					<div className='flex justify-between'>
						<h3 className='font-semibold'>
							Subtotal: ({cart.total_items} items)
						</h3>
						<h3 className='text-orange-700 tracking-wider font-bold lg:text-lg'>
							{cart.subtotal.formatted_with_symbol}
						</h3>
					</div>
					<div className='mt-20 flex items-center justify-around'>
						<button
							className='bg-red-600 hover:bg-red-700 text-gray-50 p-2 focus:outline-none'
							onClick={handleEmptyCart}
						>
							EMPTY CART
						</button>
						<Link
							to='/checkout'
							className='flex bg-orange-800 hover:bg-orange-900 text-gray-50 p-2 focus:outline-none'
						>
							CHECKOUT
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
