const Loader = () => {
	return (
		<div className=' flex flex-col items-center justify-center space-y-10 py-16 md:w-6/12 md:py-32 '>
			<div className=' w-full pl-6 md:pl-0 '>
				<div className=' h-8 w-64 animate-pulse  bg-gray-400 lg:w-96'></div>
			</div>
			<div className=' items-center space-y-4 px-2 md:flex md:space-y-0 md:space-x-32'>
				<div className='relative flex w-full justify-center '>
					<div className=' flex h-72 w-72 animate-pulse flex-col items-center justify-center space-y-2 rounded-full bg-gray-400 md:h-96 lg:w-96 '></div>
				</div>
				<div className='grid-col-2 grid grid-flow-col gap-x-2 md:gap-x-12'>
					<div className='h-80 w-44 animate-pulse space-y-1 bg-gray-400 lg:w-80'></div>
					<div className='h-80 w-44 animate-pulse space-y-1  bg-gray-400 lg:w-80'></div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
