import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
	return (
		<div className=' flex-col items-center justify-center bg-[#000000] py-8 md:flex'>
			<div className='flex w-full flex-col items-center space-y-12 md:w-8/12 md:flex-row md:items-center md:justify-evenly md:space-y-0 md:space-x-4 md:py-10 md:pl-0'>
				<div className='ml-8 flex w-full items-center justify-between'>
					<div className='space-y-6'>
						<h2 className=' font-medium text-gray-100'>SHOP</h2>

						<ul className='flex-row text-sm text-gray-300 md:text-base'>
							<Link to='/categories/allproducts'>
								<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 md:mr-20 md:w-24'>
									All Products
								</li>
							</Link>

							<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 lg:mr-24'>
								<Link to='/categories/pants'>Pants</Link>
							</li>
							<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 md:mr-24'>
								<Link to='/categories/shirts'>Shirts</Link>
							</li>
							<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 md:mr-24'>
								<Link to='/home/products'>Shoes</Link>
							</li>
							<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 md:mr-24'>
								<Link to='/categories/watches'>Wristwatches</Link>
							</li>
						</ul>
					</div>
					<div className='space-y-6'>
						<h2 className='font-medium text-gray-100 '>PAGES</h2>

						<ul className='flex-row text-sm text-gray-300 md:text-base'>
							<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 lg:mr-24'>
								<Link to='/home'>Home</Link>
							</li>
							<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 lg:mr-24'>
								Blog
							</li>
							<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 lg:mr-24'>
								About
							</li>
							<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 lg:mr-24'>
								FAQ
							</li>
							<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 lg:mr-24'>
								Contact
							</li>
						</ul>
					</div>
					<div className='space-y-6'>
						<h2 className=' font-medium text-gray-100'>INFORMATION</h2>

						<ul className='flex-row text-sm text-gray-300 md:text-base'>
							<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 md:mr-24'>
								About us
							</li>
							<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 md:mr-24 md:w-28 '>
								costumer Service
							</li>
							<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 md:mr-24 '>
								Manufacturers
							</li>
							<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 md:mr-24 '>
								Privacy Policy
							</li>
							<li className='mr-8 mb-6 hover:cursor-pointer hover:text-gray-100 md:mr-20'>
								Terms & conditions
							</li>
						</ul>
					</div>
				</div>
				<div className='flex h-full w-full flex-col items-center md:flex'>
					<div className=' mb-1.5 flex flex-col'>
						<div className=' flex flex-col items-center '>
							<div className='space-x-1 text-xs'>
								<span className='text-gray-50 md:text-sm'>Get your</span>
								<span className='text-red-500 md:text-sm'>10% off</span>
							</div>
							<h1 className='mb-4 text-sm font-medium text-gray-300 md:text-base'>
								Join Our Mailing List
							</h1>
						</div>

						<div>
							<form>
								<div className='relative flex h-10 w-64 items-center rounded-3xl bg-gray-200 pl-4 md:w-80'>
									<h2 className='mr-2 text-xl text-gray-400'>@</h2>
									<input
										className='w-44 bg-gray-200 placeholder-gray-400 focus:outline-none'
										type='text'
										name='email'
										placeholder='Email address'
									/>
									<button
										className='absolute left-56 rounded-full bg-[#FFA500] p-2.5 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 md:left-72'
										type='submit'
									>
										<AiOutlineSend size={20} color='white' />
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className='flex items-center'>
						<p className='mr-1 text-xs text-gray-300 md:text-base'>
							We never share your info. View our
						</p>
						<p className='text-xs font-medium text-gray-50 md:text-base'>
							Privacy Policy
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
