import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const TopSeller = () => {
	return (
		<div className='space-y-10'>
			<div className='md:container md:mx-auto flex justify-center items-center'>
				<div className='  p-3 mr-2 w-12 bg-gray-100 rounded-full'>
					<FiArrowRightCircle size={24} />
				</div>
				<div className=''>
					<h3 className='font-bold text-sm tracking-wider'>TOP SELLING</h3>
				</div>
			</div>
			<div className='md:container md:mx-auto flex lg:justify-center lg:items-center h-96 overflow-x-scroll pl-4 lg:overflow-hidden mb-4 lg:mb-32'>
				<div className=' h-full flex'>
					<div className='flex h-full w-64 lg:w-auto mr-4 lg:mr-8'>
						<div className='relative'>
							<img
								className='h-80 lg:h-96'
								s
								src='/images/Pants/Black_Cargo_Pant.jpg'
								alt='pants'
							/>
							<Link to='/home/products'>
								<h3 className='absolute tracking-wider text-xs lg:text-sm font-bold top-36 lg:top-44 left-16 lg:left-20 bg-white px-8 py-2 lg:py-4 rounded-3xl hover:bg-gray-200'>
									PANTS
								</h3>
							</Link>
						</div>
					</div>
					<div className='h-full w-64 lg:w-auto mr-4 lg:mr-8'>
						<div className='relative'>
							<img
								className='h-80 lg:h-96'
								src='/images/Shirts/Shirts_Clothing_Blue.jpg'
								alt='shirts'
							/>
							<Link to='/home/products'>
								<h3 className='absolute tracking-wider text-xs lg:text-sm font-bold top-36 lg:top-44 left-16 lg:left-20 bg-white px-8 py-2 lg:py-4 rounded-3xl hover:bg-gray-200'>
									SHIRTS
								</h3>
							</Link>
						</div>
					</div>
					<div className='h-full w-64 lg:w-auto mr-4 lg:mr-8'>
						<div className='relative'>
							<img
								className='h-80 lg:h-96'
								src='/images/shoes/Men_Sneakers_WhiteBlack.jpg'
								alt='shoes'
							/>
							<Link to='/home/products'>
								<h3 className='absolute tracking-wider text-xs lg:text-sm font-bold top-36 lg:top-44 left-16 lg:left-20 bg-white px-8 py-2 lg:py-4 rounded-3xl hover:bg-gray-200'>
									SHOES
								</h3>
							</Link>
						</div>
					</div>
					<div className='h-full w-64 lg:w-auto'>
						<div className='relative'>
							<img
								className='h-80 lg:h-96'
								src='/images/Watches/Business_Quartz_Watch.jpg'
								alt='wristwatch'
							/>
							<Link to='/home/products'>
								<h3 className='absolute tracking-wider text-xs lg:text-sm font-bold top-36 lg:top-44 left-16 bg-white px-8 py-2 lg:py-4 rounded-3xl hover:bg-gray-200'>
									WRISTWATCH
								</h3>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopSeller;
