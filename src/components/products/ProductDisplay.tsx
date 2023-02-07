import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/cart/addToCart-slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Product } from '../../types/products';

interface IProps {
	product: Product;
}
const ProductDisplay = ({ product }: IProps) => {
	const { loading } = useAppSelector((state) => state.addToCart);
	const { userInfo } = useAppSelector((state) => state.login);
	const dispatch = useAppDispatch();

	return (
		<div className='relative rounded-lg border pb-4 shadow-lg md:w-52 lg:w-60 lg:transform lg:transition lg:duration-500 lg:ease-in-out lg:hover:scale-105'>
			<Link to={`/home/product/${product._id}`}>
				<div className='border-b '>
					<img
						className='h-60 w-full rounded-t-lg object-cover'
						src={product?.image}
						alt={product?.name}
						loading='lazy'
					/>
				</div>

				<div className='mt-1 mb-0.5 ml-2'>
					<h5 className='text-xs text-gray-900 '>{product?.name}</h5>
				</div>
			</Link>

			<div className='ml-2 mb-2 text-sm font-medium text-gray-900'>
				<h5>{product?.price} </h5>
			</div>
			<div className=' flex w-full justify-center'>
				<button
					className='font- items-center rounded-lg bg-[#FFA500] px-2 py-1 text-xs font-medium tracking-wider text-black hover:bg-orange-800 focus:outline-none disabled:bg-gray-500'
					disabled={userInfo === null}
					onClick={() =>
						dispatch(
							addToCart({
								productId: product?._id,
								userId: userInfo!._id,
								quantity: 1,
							})
						)
					}
				>
					{loading ? (
						<FaSpinner size={20} className='mb-4 animate-spin' />
					) : (
						'Add To Cart'
					)}
				</button>
			</div>
		</div>
	);
};

export default ProductDisplay;
