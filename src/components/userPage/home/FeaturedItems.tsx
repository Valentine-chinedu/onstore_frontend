import React from 'react';
import { addToCart } from '../../../redux/cart/cart-Slice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { formatCurrencry } from '../../../utils/helper';
import Loader from '../../ui/FeaturedItemsLoader';

const FeaturedItems = () => {
	const { products, loading } = useAppSelector((state) => state.productList);
	const { userInfo } = useAppSelector((state) => state.login);

	const dispatch = useAppDispatch();

	const items = products?.filter(
		(product) => product.category === 'featured-item'
	);

	console.log(products);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className=' flex flex-col items-center justify-center space-y-10 py-16 md:w-6/12 md:py-32 '>
			<div className=' w-full pl-6 font-merriweather text-xl text-gray-800 md:pl-0 md:text-4xl'>
				<h1>Featured Items</h1>
			</div>
			<div className=' items-center space-y-4 md:flex md:space-y-0 md:space-x-32'>
				<div className='relative flex w-full justify-center '>
					<div className=' flex h-72 w-72 flex-col items-center justify-center space-y-2 rounded-full bg-[#EAE4E4] md:h-96 lg:w-96 '>
						<img
							className='h-44 object-contain md:h-60'
							src={items?.[0]?.image}
							alt='media'
							loading='lazy'
						/>
						<h2 className='font-medium text-gray-900'>{items?.[0]?.name}</h2>
					</div>
					<div className='absolute left-[16.8rem] bottom-[4.5rem] space-y-2 md:left-[18rem] md:w-24'>
						<h1 className='font-medium text-gray-900'>
							{formatCurrencry(items?.[0]?.price)}
						</h1>

						<button
							className='bg-[#FFA500] px-3 py-1.5 text-xs font-medium text-black lg:hover:bg-orange-700'
							disabled={userInfo === null}
							onClick={() => dispatch(addToCart(items?.[0]))}
						>
							Add to Cart
						</button>
					</div>
				</div>
				<div className='grid-col-2 grid grid-flow-col gap-x-2 md:gap-x-12'>
					<div className='space-y-1  bg-[#EAE4E4]'>
						<div className='h-56 w-44 space-y-4 px-2 md:h-80 md:w-72'>
							<div className='pt-2 pl-2'>
								<button
									className=''
									disabled={userInfo === null}
									onClick={() => dispatch(addToCart(items?.[1]))}
								>
									<svg
										className='h-4 cursor-pointer hover:fill-[#FFA500] md:h-6'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										// width='24'
										// height='24'
									>
										<title>add</title>
										<path fill='none' d='M0 0h24v24H0z' />
										<path d='M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' />
									</svg>
								</button>
							</div>
							<div className='flex items-center justify-center md:h-64 '>
								<img
									className=' object-cover'
									src={items?.[1]?.image}
									alt='media'
									loading='lazy'
								/>
							</div>
						</div>
						<div className='ml-4 space-y-0.5 pb-4'>
							<div className='flex'>
								<svg
									className='h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path fill='none' d='M0 0h24v24H0z' />
									<path
										d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
										fill='rgba(241,196,14,1)'
									/>
								</svg>
								<svg
									className='h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path fill='none' d='M0 0h24v24H0z' />
									<path
										d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
										fill='rgba(241,196,14,1)'
									/>
								</svg>
								<svg
									className='h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path fill='none' d='M0 0h24v24H0z' />
									<path
										d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
										fill='rgba(241,196,14,1)'
									/>
								</svg>
								<svg
									className='h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path fill='none' d='M0 0h24v24H0z' />
									<path
										d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
										fill='rgba(241,196,14,1)'
									/>
								</svg>
								<svg
									className='h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path fill='none' d='M0 0h24v24H0z' />
									<path
										d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
										fill='rgba(241,196,14,1)'
									/>
								</svg>
							</div>
							<h1 className='text-xs font-medium md:text-sm'>
								{items?.[1]?.name}
							</h1>
							<h2 className='text-sm font-medium md:text-base'>
								{formatCurrencry(items?.[1]?.price)}
							</h2>
						</div>
					</div>
					<div className='space-y-1  bg-[#EAE4E4]'>
						<div className='h-56 w-44 space-y-4 px-2 md:h-80 md:w-72'>
							<div className='pt-2 pl-2'>
								<button
									disabled={userInfo === null}
									onClick={() => dispatch(addToCart(items?.[2]))}
								>
									<svg
										className='h-4 cursor-pointer hover:fill-[#FFA500] md:h-6'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
									>
										<title>add</title>
										<path fill='none' d='M0 0h24v24H0z' />
										<path d='M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' />
									</svg>
								</button>
							</div>
							<div className='flex h-full items-center justify-center'>
								<img
									className='object-cover'
									src={items?.[2]?.image}
									alt='Watch'
									loading='lazy'
								/>
							</div>
						</div>
						<div className=' ml-4 space-y-0.5 pb-4'>
							<div className='flex'>
								<svg
									className='h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path fill='none' d='M0 0h24v24H0z' />
									<path
										d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
										fill='rgba(241,196,14,1)'
									/>
								</svg>
								<svg
									className='h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path fill='none' d='M0 0h24v24H0z' />
									<path
										d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
										fill='rgba(241,196,14,1)'
									/>
								</svg>
								<svg
									className='h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path fill='none' d='M0 0h24v24H0z' />
									<path
										d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
										fill='rgba(241,196,14,1)'
									/>
								</svg>
								<svg
									className='h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path fill='none' d='M0 0h24v24H0z' />
									<path
										d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
										fill='rgba(241,196,14,1)'
									/>
								</svg>
								<svg
									className='h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path fill='none' d='M0 0h24v24H0z' />
									<path
										d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
										fill='rgba(241,196,14,1)'
									/>
								</svg>
							</div>
							<h1 className='text-xs font-medium md:text-sm'>
								{items?.[2]?.name}
							</h1>
							<h2 className='text-sm font-medium  md:text-base'>
								{formatCurrencry(items?.[2]?.price)}
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedItems;
