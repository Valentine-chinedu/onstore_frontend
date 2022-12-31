import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Carousels = () => {
	return (
		<Carousel
			className='relative bg-[#0D0D10] lg:h-96'
			showArrows={true}
			showStatus={false}
			showThumbs={true}
			stopOnHover={true}
			interval={10000}
			transitionTime={800}
			autoPlay={true}
			infiniteLoop={true}
			dynamicHeight={true}
		>
			<div className=' md:flex md:w-full md:justify-center lg:items-end'>
				<div className='items-center justify-center  pt-4 md:flex md:w-9/12 lg:h-96 lg:space-x-20 '>
					<div>
						<div className='mb-4 space-y-2 px-4 text-gray-200 lg:w-full lg:text-left'>
							<div className='font-merriweather '>
								<h1 className='text-2xl uppercase lg:text-5xl'>Trendy</h1>
								<h1 className='text-xl uppercase lg:text-4xl'>
									collections for men
								</h1>
							</div>
						</div>
						<div className='absolute top-[30rem] z-40 flex w-full flex-col items-center lg:relative lg:top-0'>
							<div className='flex items-center space-x-2 rounded-lg border-2 border-[#FFA500] bg-black bg-opacity-50 px-2 py-0.5 hover:cursor-pointer hover:bg-gray-500 lg:py-2'>
								<Link
									to='/categories'
									className='text-sm font-medium text-gray-200'
								>
									Start Shopping
								</Link>
								<div className='flex h-4 w-4 items-center rounded-full bg-[#FFA500]'>
									<svg
										className='h-4 w-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										width='24'
										height='24'
									>
										<path fill='none' d='M0 0h24v24H0z' />
										<path
											d='M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z'
											fill='rgba(255,255,255,1)'
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className='relative lg:h-96 lg:w-auto'>
						<div className='absolute left-[5.4rem] top-10 h-72 w-72 rounded-full bg-[#171717] lg:top-8 lg:left-[1rem] lg:h-64 lg:w-64'></div>
						<img
							className='relative left-4  h-full object-contain lg:left-0 lg:w-full lg:object-fill'
							src='/images/slide1_image_onstore.png'
							alt='Man on suit'
							loading='lazy'
						/>
					</div>
				</div>
			</div>
			<div className=' lg:h-96 '>
				<div className='lg:absolute lg:left-20 lg:top-20'>
					<div className='absolute right-0 left-0 top-8 mb-4 space-y-2 text-gray-200 lg:relative lg:top-0 '>
						<div className='font-merriweather'>
							<h1 className='text-xl uppercase text-[#FFA500] lg:text-4xl'>
								elegant and stylish
							</h1>
						</div>
					</div>
					<div className='absolute top-[30rem] z-40 flex w-full flex-col items-center lg:relative lg:top-0'>
						<div className='flex items-center space-x-2 rounded-lg border-2 border-[#FFA500] px-2 py-0.5 lg:py-2'>
							<Link
								to='/home/products'
								className='text-sm font-semibold text-gray-900'
							>
								Start Shopping
							</Link>
							<div className='flex h-4 w-4 items-center rounded-full bg-[#FFA500]'>
								<svg
									className='h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path fill='none' d='M0 0h24v24H0z' />
									<path
										d='M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z'
										fill='rgba(255,255,255,1)'
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className='h-[36rem] bg-red-500 lg:h-full lg:w-full'>
					<img
						className='h-[36rem] object-cover lg:h-full lg:object-cover'
						src='/images/slide2_image_onstore.jpg'
						alt='Shirts'
						loading='lazy'
					/>
				</div>
			</div>
			<div className='h-[36rem] justify-center lg:flex lg:h-auto'>
				<div className='flex-col justify-center lg:flex lg:space-y-10'>
					<div className='relative top-14 font-merriweather text-gray-200 lg:top-0'>
						<h1 className='text-xl uppercase lg:text-3xl'>
							100% Quality Shoes For Men
						</h1>
					</div>

					<div className='absolute top-[31rem] z-40 flex w-full flex-col items-center lg:relative lg:top-0'>
						<div className='flex items-center space-x-2 rounded-lg border-2 border-[#FFA500] px-2 py-0.5 lg:py-2 lg:hover:cursor-pointer lg:hover:bg-gray-400'>
							<Link
								to='/home/products'
								className='text-sm font-medium text-gray-200'
							>
								Start Shopping
							</Link>
							<div className='flex h-4 w-4 items-center rounded-full bg-[#FFA500]'>
								<svg
									className='h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path fill='none' d='M0 0h24v24H0z' />
									<path
										d='M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z'
										fill='rgba(255,255,255,1)'
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className='relative '>
					<img
						className=' h-[36rem] object-contain lg:h-96'
						src='/collection_image3.png'
						alt='Shoes'
						loading='lazy'
					/>
				</div>
			</div>
			<div className='lg:relative'>
				<div className='lg:absolute lg:top-0 lg:right-10 lg:bottom-0 lg:w-[25rem]'>
					<div className='absolute right-0 left-0 top-8 mb-4 text-gray-200 lg:top-36 lg:w-96'>
						<h1 className='font-merriweather text-xl uppercase text-[#FFA500] lg:text-4xl '>
							beauty redefined
						</h1>
					</div>
					<div className='absolute top-[31rem] z-40 flex w-full flex-col items-center lg:relative lg:top-52'>
						<div className='flex items-center space-x-2 rounded-lg border-2 border-[#FFA500] px-2 py-0.5 lg:py-2 lg:hover:cursor-pointer lg:hover:bg-gray-400'>
							<Link
								to='/home/products'
								className='text-sm font-semibold text-gray-900 '
							>
								Start Shopping
							</Link>
							<div className='flex h-4 w-4 items-center rounded-full bg-[#FFA500]'>
								<svg
									className='h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path fill='none' d='M0 0h24v24H0z' />
									<path
										d='M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z'
										fill='rgba(255,255,255,1)'
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className='lg:h-96'>
					<img
						className='h-[36rem] object-cover lg:h-96'
						src='/images/slide4_image_onstore.jpg'
						alt='Watch'
					/>
				</div>
			</div>
		</Carousel>
	);
};

export default Carousels;
