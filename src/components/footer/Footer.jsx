import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSend } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

const Footer = () => {
	const { register, handleSubmit, errors, reset } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	return (
		<div className=' bg-gray-900 w-screen'>
			<div className='flex flex-col md:flex-row pl-8 lg:justify-evenly lg:py-10 w-full border-b mb-8 md:space-x-12 lg:space-x-0'>
				<div className='flex ml-4 pt-10'>
					<div className='mr-24'>
						<h2 className='mb-10 font-medium text-gray-50 lg:text-lg text-sm'>
							SHOP
						</h2>

						<ul className='flex-row '>
							<Link to='/home/products'>
								<li className='mr-8 lg:mr-24 text-xs lg:text-sm text-gray-200 font-medium mb-6'>
									All Products
								</li>
							</Link>

							<li className='mr-8 lg:mr-24 text-xs lg:text-sm text-gray-200 font-medium mb-6'>
								<Link to='/home/products'>Pants</Link>
							</li>
							<li className='mr-8 lg:mr-24 text-xs lg:text-sm text-gray-200 font-medium mb-6'>
								<Link to='/home/products'>Shirts</Link>
							</li>
							<li className='mr-8 lg:mr-24 text-xs lg:text-sm text-gray-200 font-medium mb-6'>
								<Link to='/home/products'>Shoes</Link>
							</li>
							<li className='mr-8 lg:mr-24 text-xs lg:text-sm text-gray-200 font-medium mb-6'>
								<Link to='/home/products'>Wristwatch</Link>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='mb-10 font-medium text-gray-50 lg:text-lg text-sm'>
							PAGES
						</h2>

						<ul className='flex-row '>
							<li className='mr-8 lg:mr-24 text-xs lg:text-sm text-gray-200 font-medium mb-6'>
								<Link to='/home'>Home</Link>
							</li>
							<li className='mr-8 lg:mr-24 text-xs lg:text-sm text-gray-200 font-medium mb-6'>
								<Link to='/'>Blog</Link>
							</li>
							<li className='mr-8 lg:mr-24 text-xs lg:text-sm text-gray-200 font-medium mb-6'>
								<Link to='/'>About</Link>
							</li>
							<li className='mr-8 lg:mr-24 text-xs lg:text-sm text-gray-200 font-medium mb-6'>
								<Link to='/'>FAQ</Link>
							</li>
							<li className='mr-8 lg:mr-24 text-xs lg:text-sm text-gray-200 font-medium mb-6'>
								<Link to='/'>Contact</Link>
							</li>
						</ul>
					</div>
				</div>
				<div>
					<div className='ml-4 mt-10 mb-6'>
						<h4 className='mb-2 font-medium text-sm lg:text-lg text-gray-50 lg:mb-10'>
							NEWSLETTER
						</h4>

						<div>
							<form onSubmit={handleSubmit(onSubmit)}>
								{errors.email && (
									<p className='ml-4 mb-2 text-red-600'>
										{errors.email.message}
									</p>
								)}
								<div className='bg-gray-100 w-80 relative rounded-3xl border pl-6 h-12 items-center flex'>
									<h2 className='mr-3 text-gray-400 text-2xl'>@</h2>
									<input
										className='bg-gray-100 placeholder-gray-400 focus:outline-none w-48'
										type='text'
										name='email'
										placeholder='Email address'
										ref={register({
											required: 'Email is required.',
											pattern: {
												value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
												message: 'Email is not valid.',
											},
										})}
									/>
									<button
										className=' left-72 absolute bg-orange-700 p-3 rounded-full hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50'
										type='submit'
									>
										<AiOutlineSend size={24} color='white' />
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className='ml-4 flex items-center mb-16'>
						<p className='mr-1 text-xs text-gray-300 lg:text-sm'>
							We never share your info. View our
						</p>
						<h className='text-xs text-gray-50 lg:text-base'>Privacy Policy</h>
					</div>
				</div>
			</div>

			<div className='ml-12 text-xs text-gray-600 lg:flex lg:items-center lg:justify-between'>
				<p className='mb-3 text-gray-100 lg:text-sm'>Created with love </p>
				<div className='flex pb-3'>
					<img
						className='h-10 mr-4'
						src='./mastercard.png'
						alt='MasterCard'
						loading='lazy'
					/>
					<img
						className='h-10 '
						src='./visa-credit-card.png'
						alt='VisaCard'
						loading='lazy'
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
