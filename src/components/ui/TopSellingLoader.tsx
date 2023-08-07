import React from 'react';

const TopSellingLoader = () => {
	return (
		<div className='w-full py-16 md:container md:mx-auto md:flex md:justify-center md:py-32'>
			<div className='flex flex-col items-center justify-center space-y-4 lg:space-y-8'>
				<div className='grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-4 md:gap-4 '>
					<div className='h-56 w-44 animate-pulse space-y-4 bg-gray-400 md:h-72 md:w-72'></div>
					<div className='h-56 w-44 animate-pulse space-y-4 bg-gray-400 md:h-72 md:w-72'></div>
					<div className='h-56 w-44 animate-pulse space-y-4 bg-gray-400 md:h-72 md:w-72'></div>
					<div className='h-56 w-44 animate-pulse space-y-4 bg-gray-400 md:h-72 md:w-72'></div>
					<div className='h-56 w-44 animate-pulse space-y-4 bg-gray-400 md:h-72 md:w-72'></div>
					<div className='h-56 w-44 animate-pulse space-y-4 bg-gray-400 md:h-72 md:w-72'></div>
					<div className='h-56 w-44 animate-pulse space-y-4 bg-gray-400 md:h-72 md:w-72'></div>
					<div className='h-56 w-44 animate-pulse space-y-4 bg-gray-400 md:h-72 md:w-72'></div>
				</div>
			</div>
		</div>
	);
};

export default TopSellingLoader;
