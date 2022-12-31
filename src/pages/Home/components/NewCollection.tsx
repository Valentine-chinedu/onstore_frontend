import React from 'react';
import { Link } from 'react-router-dom';

const NewCollection = () => {
	return (
		<div className='flex h-full  w-full py-8 md:justify-center '>
			<div className='space-y-8 md:w-8/12 md:space-y-6'>
				<div className='flex flex-col pl-6'>
					<h1 className=' font-merriweather text-gray-900'>New Arrivals</h1>
					<p className=' font-bold text-gray-900'>
						Latest fashion styles to hit our store.
					</p>
				</div>
				<div className='items-end justify-between space-y-4 md:flex md:w-full md:space-x-20'>
					<Link to='/categories/pants'>
						<div className='flex flex-col items-center space-y-2 md:w-96'>
							<img src='/collection_image1.png' alt='jacket' />
							<h2 className='font-medium text-gray-900'>
								Blazer Suite Jacket Fashion Coat
							</h2>
						</div>
					</Link>
					<div className='w-full space-y-4'>
						<div className='flex h-64 w-full items-center justify-center space-x-8 rounded-tl-3xl bg-black md:justify-around md:space-x-0'>
							<div className='flex flex-col justify-center space-y-2 md:space-y-4'>
								<img
									className='h-[6rem] object-contain md:h-[8rem]'
									src='/collection_image2.png'
									alt='Watch'
								/>
								<div className='flex flex-col items-center'>
									<h1 className='text-sm font-medium text-gray-100'>SHIRTS</h1>
									<Link
										to='/categories/shirts'
										className='text-xs font-semibold text-gray-300 lg:hover:text-orange-600'
									>
										See All
									</Link>
								</div>
							</div>
							<div className='flex flex-col justify-center space-y-2'>
								<img
									className='h-[6rem] object-contain md:h-[8rem]'
									src='/collection_image3.png'
									alt='Watch'
									loading='lazy'
								/>
								<div className='flex flex-col items-center'>
									<h1 className='text-sm font-medium text-gray-100'>
										SNEAKERS
									</h1>
									<Link
										to='/home/products'
										className='text-xs font-semibold text-gray-300 lg:hover:text-orange'
									>
										See All
									</Link>
								</div>
							</div>
							<div className='flex flex-col justify-center space-y-2'>
								<img
									className='h-[6rem] object-contain md:h-[8rem]'
									src='/collection_image4.png'
									alt='Watch'
									loading='lazy'
								/>
								<div className='flex flex-col items-center'>
									<h1 className='text-sm font-medium text-gray-100'>WATCHES</h1>
									<Link
										to='/home/products'
										className='text-xs font-semibold text-gray-300 lg:hover:text-orange'
									>
										See All
									</Link>
								</div>
							</div>
						</div>
						<div className='flex h-64 w-full items-center justify-center space-x-6 rounded-bl-3xl bg-black'>
							<div className='flex flex-col items-center space-y-2'>
								<div className='text-center'>
									<h1 className=' font-semibold text-gray-100 '>
										SweatPants Parkour
									</h1>
									<h1 className=' font-semibold text-gray-100 '>Freerunning</h1>
								</div>
								<div>
									<Link
										to='/home/products'
										className='rounded-sm bg-[#FFA500] px-2 py-1 text-xs font-semibold text-black lg:hover:bg-orange-600'
									>
										Shop Now
									</Link>
								</div>
							</div>

							<div className=''>
								<img
									className='h-[10rem] object-contain md:h-[14rem]'
									src='/collection_image5.png'
									alt='Watch'
									loading='lazy'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewCollection;
