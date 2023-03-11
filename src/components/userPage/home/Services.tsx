import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

const Services = () => {
	return (
		<div className=' w-full bg-black py-8 pl-4 md:flex md:justify-center md:py-32'>
			<div className='md:flex md:w-8/12 md:space-x-4'>
				<div className='mb-12 flex md:flex-col md:items-center md:space-y-6 lg:mb-0'>
					<div className='mr-4'>
						<div>
							<FiThumbsUp size={25} className='text-[rgba(255,165,0,1)]' />
						</div>
					</div>
					<div className='flex-col items-center md:flex md:text-center'>
						<h2 className='mb-4 font-semibold tracking-wide text-gray-100 md:mb-2'>
							100% QUALITY
						</h2>
						<p className='text-sm text-gray-300'>
							Aenean magna est, pretium id libero quis, eleifend cursus diam.
						</p>
					</div>
				</div>

				<div className='mb-12 flex md:flex-col md:items-center md:space-y-6 lg:mb-0'>
					<div className='mr-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='24'
							height='24'
						>
							<path fill='none' d='M0 0h24v24H0z' />
							<path
								d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 8H4v8h16v-8zm0-2V5H4v4h16zm-6 6h4v2h-4v-2z'
								fill='rgba(255,165,0,1)'
							/>
						</svg>
					</div>
					<div className='flex-col items-center md:flex md:text-center'>
						<h2 className='mb-4 font-semibold tracking-wide text-gray-100 md:mb-2'>
							SECURE PAYMENT
						</h2>
						<p className='text-sm text-gray-300'>
							Aenean magna est, pretium id libero quis, eleifend cursus diam.
						</p>
					</div>
				</div>
				<div className='mb-12 flex md:flex-col md:items-center md:space-y-6 lg:mb-0'>
					<div className='mr-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='24'
							height='24'
						>
							<path fill='none' d='M0 0h24v24H0z' />
							<path
								d='M9 4h5.446a1 1 0 0 1 .848.47L18.75 10h4.408a.5.5 0 0 1 .439.74L19.637 18H19a6.01 6.01 0 0 1-1.535-.198L20.63 12H3.4l1.048 5.824A6.013 6.013 0 0 1 3 18h-.545l-1.24-6.821A1 1 0 0 1 2.197 10H3V5a1 1 0 0 1 1-1h1V1h4v3zm-4 6h11.392l-2.5-4H5v4zM3 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 11 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 19 20h2v2h-2a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 11 22a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 3 22H1v-2h2z'
								fill='rgba(255,165,0,1)'
							/>
						</svg>
					</div>
					<div className='flex-col items-center md:flex md:text-center'>
						<h2 className='mb-4 font-semibold tracking-wide text-gray-100 md:mb-2'>
							FREE SHIPPING
						</h2>
						<p className='text-sm text-gray-300'>
							Aenean magna est, pretium id libero quis, eleifend cursus diam.
						</p>
					</div>
				</div>

				<div className='mb-12 flex md:flex-col md:items-center md:space-y-6 lg:mb-0'>
					<div className='mr-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='24'
							height='24'
						>
							<path fill='none' d='M0 0h24v24H0z' />
							<path
								d='M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z'
								fill='rgba(255,165,0,1)'
							/>
						</svg>
					</div>
					<div className='flex-col items-center md:flex md:text-center'>
						<h2 className='mb-4 font-semibold tracking-wide text-gray-100 md:mb-2'>
							FREE RETURN
						</h2>
						<p className='text-sm text-gray-300'>
							Aenean magna est, pretium id libero quis, eleifend cursus diam.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
