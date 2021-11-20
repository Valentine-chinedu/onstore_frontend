import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FiThumbsUp, FiBox } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import Accordion from './components/Accordion';
import AskedQuestion from './components/AskedQuestion';
import MailingForm from './components/MailingForm';
import TopSeller from './components/TopSeller';
import Carousels from './components/Carousels';

const Home = () => {
	return (
		<div className='bg-gray-50 relative space-y-20 pb-20'>
			<Carousels />
			<div className=' md:container md:mx-auto pl-4 lg:flex lg:items-center'>
				<div className='flex mb-12 lg:mb-0'>
					<div className='mr-4'>
						<div>
							<FiThumbsUp size={25} className='text-orange-700' />
						</div>
					</div>
					<div>
						<h2 className='mb-4 text-sm font-semibold tracking-wide'>
							100% QUALITY
						</h2>
						<p className='text-xs text-gray-500'>
							Aenean magna est, pretium id libero quis, eleifend cursus diam.
						</p>
					</div>
				</div>
				<div className='flex mb-12 lg:mb-0'>
					<div className='mr-4'>
						<div>
							<FiBox size={25} className='text-orange-700' />
						</div>
					</div>
					<div>
						<h2 className='mb-4 text-sm tracking-wide font-semibold'>
							FREE SHIPPING
						</h2>
						<p className='text-xs text-gray-500'>
							Aenean magna est, pretium id libero quis, eleifend cursus diam.
						</p>
					</div>
				</div>
				<div className='flex mb-12 lg:mb-0'>
					<div className='mr-4'>
						<div>
							<IoBagOutline size={25} className='text-orange-700' />
						</div>
					</div>
					<div>
						<h2 className='mb-4 text-sm tracking-wide font-semibold'>
							SECURE PAYMENT
						</h2>
						<p className='text-xs text-gray-500'>
							Aenean magna est, pretium id libero quis, eleifend cursus diam.
						</p>
					</div>
				</div>
				<div className='flex '>
					<div className='mr-4'>
						<div>
							<BsArrowCounterclockwise size={25} className='text-orange-700' />
						</div>
					</div>
					<div>
						<h2 className='mb-4 text-sm tracking-wide font-semibold'>
							FREE RETURN
						</h2>
						<p className='text-xs text-gray-500'>
							Aenean magna est, pretium id libero quis, eleifend cursus diam.
						</p>
					</div>
				</div>
			</div>
			<TopSeller />
			<MailingForm />

			<div className='md:container md:mx-auto lg:flex lg:px-40 lg:py-16'>
				<AskedQuestion />
				<Accordion />
			</div>
		</div>
	);
};

export default Home;
