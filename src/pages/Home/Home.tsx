import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Accordion from './components/Accordion';
import FAQ from './components/FAQ';
import TopSeller from './components/TopSeller';
import Carousels from './components/Carousels';
import { Link } from 'react-router-dom';
import FeaturedItems from './components/FeaturedItems';
import NewCollection from './components/NewCollection';
import Services from './components/Services';

const Home = () => {
	return (
		<div className='items-center md:flex md:flex-col'>
			<Carousels />
			<FeaturedItems />
			<div className='flex h-80 items-center justify-center bg-image1 bg-contain bg-repeat-round md:h-[600px] md:w-full'>
				<div className=''>
					<div className=' flex w-full flex-col items-center space-y-3 text-gray-100'>
						<h1 className=' font-semibold'>Promotion</h1>
						<p className='text-sm font-medium text-gray-50 md:text-xl'>
							Buy Now and Get 10% Discount
						</p>
						<div className='md:pt-4'>
							<Link
								to='/categories'
								className='rounded-sm bg-[#FFA500] px-2 py-0.5 text-sm font-semibold text-black md:py-1 md:px-2.5'
							>
								Shop Now
							</Link>
						</div>
					</div>
				</div>
			</div>
			<NewCollection />
			<Services />
			<TopSeller />
			<div className='w-full justify-center bg-gray-500 px-4 py-8 md:flex'>
				<div className='md:w-6/12'>
					<FAQ />
					<Accordion />
				</div>
			</div>
		</div>
	);
};

export default Home;
