import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { FiThumbsUp, FiBox } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import Accordion from './components/Accordion';
import AskedQuestion from './components/AskedQuestion';
import MailingForm from './components/MailingForm';
import TopSeller from './components/TopSeller';

const Home = () => {
	return (
		<div className='bg-gray-50 relative'>
			<div className='relative z-0 h-52 lg:h-96'>
				<Carousel
					showArrows={false}
					showStatus={false}
					showThumbs={false}
					stopOnHover={false}
					interval={10000}
					transitionTime={800}
					autoPlay={true}
					infiniteLoop={true}
					dynamicHeight={true}
				>
					<div className='crl-div'>
						{/* carousel display for large screens. hidden in sm and medium screens */}
						<div className='crl-div2'>
							<h2 className='crl-h'>Welcome to onStore</h2>

							<Link to='/home/products' className='crl-link'>
								SHOP NOW
							</Link>
						</div>
						<img
							className='crl-img'
							src='/images/Shirts/Shirts_Clothing_Blue.jpg'
							alt=''
						/>
					</div>
					<div className='crl-div'>
						<div className='crl-div2'>
							<h2 className='crl-h'>100% Quality Wears</h2>

							<Link to='/home/products' className='crl-link'>
								SHOP NOW
							</Link>
						</div>
						<img
							className='crl-img'
							src='/images/shoes/Classic_Sneakers_Grey.jpg'
							alt=''
						/>
					</div>
					<div className='crl-div'>
						<div className='crl-div2'>
							<h2 className='crl-h'>Beauty Redefined</h2>

							<Link to='/home/products' className='crl-link'>
								SHOP NOW
							</Link>
						</div>
						<img
							className='crl-img'
							src='/images/Watches/Men_Military_Quartz_Brown.jpg'
							alt=''
						/>
					</div>
					<div className='crl-div'>
						<div className='crl-div2'>
							<h2 className='crl-h'>Elegant and Stylish</h2>

							<Link to='/home/products' className='crl-link'>
								SHOP NOW
							</Link>
						</div>
						<img
							className='crl-img'
							src='/images/Pants/Suit_Material_Trousers.jpg'
							alt=''
						/>
					</div>
				</Carousel>
			</div>

			<div className=' md:container md:mx-auto py-12 pl-4 border-b lg:flex lg:items-center'>
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
			<div className='md:container md:mx-auto pb-12 lg:flex lg:items-center lg:justify-center'>
				<div className='flex flex-col justify-center items-center border mx-4 py-16 lg:w-3/5'>
					<div className='flex font-normal tracking-wider italic lg:mb-4 lg:text-2xl'>
						<p className='mr-1 lg:mr-2'>Get your</p>
						<p className='text-red-500'>10% off!</p>
					</div>
					<div className='lg:flex-row items-center flex flex-col font-bold text-2xl tracking-wide lg:text-4xl lg:mb-8'>
						<h2 className='lg:mr-3'>Join Our Mailing</h2>
						<h2>List</h2>
					</div>
					<MailingForm />

					<div className='flex items-center'>
						<p className='mr-1 text-xs text-gray-500'>
							We never share your info. View our
						</p>
						<p className='text-xs text-gray-900'>Privacy Policy</p>
					</div>
				</div>
			</div>
			<div className='md:container md:mx-auto lg:flex lg:px-40 lg:py-16'>
				<AskedQuestion />
				<Accordion />
			</div>
		</div>
	);
};

export default Home;
