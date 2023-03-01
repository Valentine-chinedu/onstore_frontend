import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { addToCart } from '../../../redux/cart/addToCart-slice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';

const FeaturedItems = () => {
	const { products, loading } = useAppSelector((state) => state.productList);
	const { loading: isLoading } = useAppSelector((state) => state.addToCart);
	const { userInfo } = useAppSelector((state) => state.login);

	const dispatch = useAppDispatch();

	const items = products?.filter(
		(product) => product.category === 'featured-item'
	);

	if (loading) {
		return (
			<div className='flex w-full flex-col items-center justify-center'>
				<FaSpinner size={20} className='mb-4 animate-spin' />
			</div>
		);
	}

	return (
		<div className='flex flex-col items-center justify-center space-y-10 py-8 md:w-6/12 '>
			<div className=' w-full pl-6 font-merriweather text-xl text-gray-800 md:pl-0'>
				<h1>Featured Items</h1>
			</div>
			<div className=' items-center space-y-4 md:flex md:space-y-0 md:space-x-32'>
				<div className='relative flex w-full justify-center '>
					<div className=' flex h-72 w-72 flex-col items-center justify-center space-y-2 rounded-full bg-[#EAE4E4] '>
						<img
							className='h-44 object-contain'
							src={items[0]?.image}
							alt='Watch'
							loading='lazy'
						/>
						<h2 className='font-medium text-gray-900'>{items[0]?.name}</h2>
					</div>
					<div className='absolute left-[16.8rem] bottom-[4.5rem] space-y-2 md:left-[14.5rem] md:w-24'>
						<h1 className='font-medium text-gray-900'>{items[0]?.price}</h1>

						<button
							className='bg-[#FFA500] px-3 py-1.5 text-xs font-medium text-black disabled:bg-gray-500 lg:hover:bg-orange-700'
							disabled={userInfo === null}
							onClick={() =>
								dispatch(
									addToCart({
										productId: items[0]?._id,
										quantity: 1,
										userId: userInfo!._id,
									})
								)
							}
						>
							{isLoading ? (
								<FaSpinner size={20} className='mb-4 animate-spin' />
							) : (
								'Add to Cart'
							)}
						</button>
					</div>
				</div>
				<div className='grid-col-2 grid grid-flow-col gap-x-4 md:gap-x-12'>
					<div className='space-y-1'>
						<div className='h-56 w-44 space-y-4 bg-[#EAE4E4] px-2'>
							<div className='pt-2 pl-2'>
								<button
									className='disabled:bg-gray-500'
									disabled={userInfo === null}
									onClick={() =>
										dispatch(
											addToCart({
												productId: items[1]?._id,
												quantity: 1,
												userId: userInfo!._id,
											})
										)
									}
								>
									{isLoading ? (
										<FaSpinner size={20} className='mb-4 animate-spin' />
									) : (
										<svg
											className='h-4 hover:fill-[#FFA500]'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											// width='24'
											// height='24'
										>
											<title>add</title>
											<path fill='none' d='M0 0h24v24H0z' />
											<path d='M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' />
										</svg>
									)}
								</button>
							</div>
							<img
								className=' h-24'
								src={items[1]?.image}
								alt='media'
								loading='lazy'
							/>
						</div>
						<div className='space-y-0.5'>
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
							<h1 className='text-xs font-medium'>{items[1]?.name}</h1>
							<h2 className='text-sm font-medium'>{items[1]?.price}</h2>
						</div>
					</div>
					<div className='space-y-1'>
						<div className='h-56 w-44 space-y-4 bg-[#EAE4E4] px-2'>
							<div className='pt-2 pl-2'>
								<button
									className='disabled:bg-gray-500'
									disabled={userInfo === null}
									onClick={() =>
										dispatch(
											addToCart({
												productId: items[2]?._id,
												quantity: 1,
												userId: userInfo!._id,
											})
										)
									}
								>
									{isLoading ? (
										<FaSpinner size={20} className='mb-4 animate-spin' />
									) : (
										<svg
											className='h-4 hover:fill-[#FFA500]'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
										>
											<title>add</title>
											<path fill='none' d='M0 0h24v24H0z' />
											<path d='M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' />
										</svg>
									)}
								</button>
							</div>
							<img
								className='h-40 object-contain'
								src={items[2]?.image}
								alt='Watch'
								loading='lazy'
							/>
						</div>
						<div className=' space-y-0.5'>
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
							<h1 className='text-xs font-medium'>{items[2]?.name}</h1>
							<h2 className='text-sm font-medium'>{items[2]?.price}</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedItems;
