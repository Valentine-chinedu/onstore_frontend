import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Carousels = () => {
	return (
		<Carousel
			className='h-96 bg-[#0D0D10] md:h-[650px]'
			showArrows={true}
			showStatus={false}
			showThumbs={true}
			stopOnHover={true}
			interval={10000}
			transitionTime={800}
			infiniteLoop={true}
			dynamicHeight={true}
		>
			<div className=' h-96 justify-center pt-2 md:h-[650px] lg:flex lg:pt-8'>
				<div className='relative md:h-[650px] lg:h-full lg:w-full'>
					<img
						className='h-96 object-contain md:h-[650px]'
						src='/collection_image2.png'
						alt='Man on suit'
						loading='lazy'
					/>
				</div>
			</div>
			<div className='lg:h-[650px]'>
				<div className='h-96 lg:h-full lg:w-full'>
					<img
						className='h-full object-cover lg:h-full lg:object-cover'
						src='/images/slide2_image_onstore.jpg'
						alt='Shirts'
						loading='lazy'
					/>
				</div>
			</div>
			<div className='h-96 justify-center md:h-[650px] lg:flex'>
				<div className='relative md:h-[650px] lg:h-full lg:w-full'>
					<img
						className=' h-96 object-contain md:h-[650px]'
						src='/collection_image3.png'
						alt='Shoes'
						loading='lazy'
					/>
				</div>
			</div>
			<div className='relative h-96 md:h-[650px]'>
				<div className='h-32 lg:h-full lg:w-full'>
					<img
						className='h-96  object-cover md:h-[650px]'
						src='/images/slide4_image_onstore.jpg'
						alt='Watch'
					/>
				</div>
			</div>
		</Carousel>
	);
};

export default Carousels;
