import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../redux/cart/cart-Slice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { Product } from '../../../types/products';
import { formatCurrencry } from '../../../utils/helper';

interface IProps {
	product: Product;
}
const ProductDisplay = ({ product }: IProps) => {
	const { userInfo } = useAppSelector((state) => state.login);
	const dispatch = useAppDispatch();

	return (
		<div className='relative rounded-lg border pb-4 shadow-lg  md:container md:mx-auto lg:transform lg:transition lg:duration-500 lg:ease-in-out lg:hover:scale-105'>
			<Link to={`/product/${product?._id}`}>
				<div className='border-b '>
					<img
						className='h-60 w-full rounded-t-lg object-cover'
						src={product?.image}
						alt={product?.name}
						loading='lazy'
					/>
				</div>

				<div className='mt-1 mb-0.5 ml-2'>
					<h5 className='text-xs font-medium text-gray-900 md:text-sm '>
						{product?.name}
					</h5>
				</div>
			</Link>

			<div className='ml-2 mb-2 text-sm font-medium text-gray-900'>
				<h5>{formatCurrencry(product?.price)} </h5>
			</div>
			<div className=' flex w-full justify-center'>
				<button
					className='font- items-center rounded-lg bg-[#FFA500] px-2 py-1 text-xs font-medium tracking-wider text-black hover:bg-orange-800 focus:outline-none disabled:bg-gray-500'
					disabled={userInfo === null}
					onClick={() => dispatch(addToCart(product))}
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default ProductDisplay;
