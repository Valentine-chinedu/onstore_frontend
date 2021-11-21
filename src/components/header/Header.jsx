import React, { useContext, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GoSearch, GoThreeBars, GoX } from 'react-icons/go';
import { Link, useHistory } from 'react-router-dom';
import { ProductContext } from '../../contextprovider/ProductContext';

const Header = () => {
	const { cart } = useContext(ProductContext);
	const [isOpen, setOpen] = useState(false);

	let history = useHistory();

	function handleClickToProducts() {
		history.push('/home/products');
		setOpen(false);
	}

	function handleClickToHome() {
		history.push('/home');
		setOpen(false);
	}

	return (
		<nav className=' pb-2 px-2 lg:px-8 md:px-4 sticky top-0 z-50 bg-gray-50 overflow-hidden border-b-2'>
			<div className=' flex items-center justify-between h-16 lg:h-20 z-50'>
				<div className='flex'>
					<div className='relative flex items-center md:mr-4 md:ml-2 lg:mr-0 lg:ml-0 lg:hidden'>
						<button
							onClick={() => {
								setOpen(true);
							}}
							className={isOpen ? 'invisible' : 'focus:outline-none'}
						>
							<GoThreeBars size={25} />
						</button>
						<button
							onClick={() => {
								setOpen(false);
							}}
							className={
								!isOpen ? 'absolute invisible' : 'absolute focus:outline-none'
							}
						>
							<GoX size={25} />
						</button>
					</div>
					<div className='lg:mr-10 '>
						<Link to='/home'>
							<img
								className='h-16 lg:h-24 ml-2'
								src='./onStore_logo.png'
								alt='logo'
								loading='lazy'
							/>
						</Link>
					</div>

					<div
						className={`fixed lg:relative lg:pt-3 flex flex-col top-12 left-0 lg:right-8 lg:top-auto justify-center lg:items-end lg:flex-row h-60 lg:h-20 bg-gray-50 lg:w-full ${
							isOpen
								? 'transition-height duration-500 ease-in-out  w-40 lg:transition-none'
								: 'transition-height duration-500 ease-in-out w-0 overflow-hidden lg:transition-none'
						}`}
					>
						<div className='flex flex-col lg:flex-row items-start ml-4 overflow-hidden'>
							<button onClick={handleClickToHome} className='nav-btn'>
								Home
							</button>
							<button onClick={handleClickToProducts} className='nav-btn'>
								Products
							</button>
							<button className='nav-btn'>About</button>
							<button className='nav-btn'>Newsletter</button>
						</div>
					</div>
				</div>

				<form className='flex border-gray-400 border h-7 md:h-9 lg:h-11 rounded-full w-52 md:w-64 lg:w-72'>
					<div className='flex justify-between items-center'>
						<button type='submit' className='focus:outline-none ml-2 mr-4'>
							<GoSearch className='text-gray-500 text-sm lg:text-lg' />
						</button>
						<input
							className='focus:outline-none text-sm appearance-none bg-gray-50 w-40'
							type='text'
							name='search'
							placeholder='Search Products'
						/>
					</div>
				</form>
				<div className='flex relative justify-around items-center h-10 md:mr-2 lg:mr-0'>
					<Link to='/cart'>
						<AiOutlineShoppingCart size={28} />
					</Link>
					{cart.total_unique_items > 0 ? (
						<div className='absolute top-0 right-0 text-xs font-bold text-white tracking-tighter rounded-full bg-orange-700 px-1.5'>
							{cart.total_unique_items}
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</nav>
	);
};

export default Header;
