import React, { useEffect, useState } from 'react';
import { GoX } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { reset } from '../../../redux/cart/cart-Slice';
import { getCategories } from '../../../redux/categories/slice-list';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { userLogout } from '../../../redux/users/login-slice';
import logo from './onStore_logo.png';

const Header = () => {
	const { cartItems } = useAppSelector((store) => store.cart);
	const { userInfo } = useAppSelector((state) => state.login);
	const { categories } = useAppSelector((state) => state.categoriesList);

	const dispatch = useAppDispatch();

	const filteredCategory = categories?.filter(
		(category) => category !== 'featured-item' && category !== 'top-selling'
	);
	const [isOpen, setOpen] = useState(false);

	let navigate = useNavigate();

	function handleClickToHome() {
		navigate('/home');
		setOpen(false);
	}

	function handleClickToLogin() {
		navigate('/login');
		setOpen(false);
	}

	function handleClickToLogout() {
		dispatch(userLogout());
		dispatch(reset());
		navigate('/login');
	}

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	return (
		<nav className='md:p-o sticky  top-0 z-50 flex justify-center overflow-hidden bg-black'>
			<div className='z-50 flex h-12 w-full items-center justify-between px-2 md:w-11/12 md:px-0 lg:h-12'>
				<div className='relative flex items-center md:mr-4 md:ml-2 lg:mr-0 lg:ml-0 lg:hidden'>
					<button
						onClick={() => {
							setOpen(true);
						}}
						className={isOpen ? 'invisible' : 'focus:outline-none'}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='24'
							height='24'
						>
							<path fill='none' d='M0 0h24v24H0z' />
							<path
								d='M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z'
								fill='rgba(255,255,255,1)'
							/>
						</svg>
					</button>
					<button
						onClick={() => {
							setOpen(false);
						}}
						className={
							!isOpen
								? 'invisible absolute'
								: 'absolute z-50 text-gray-100 focus:outline-none'
						}
					>
						<GoX size={25} />
					</button>
				</div>
				<div className='flex items-center space-x-4 lg:mr-10'>
					<button onClick={handleClickToHome}>
						<img
							className='ml-2 h-16 lg:h-16'
							src={logo}
							alt='logo'
							loading='lazy'
						/>
					</button>
					<Link className='nav-btn' to={`/profile/${userInfo?._id}`}>
						Profile
					</Link>
					{userInfo?.isAdmin && (
						<Link className='nav-btn' to='/dashboard'>
							Dashboard
						</Link>
					)}
				</div>

				<div
					className={`fixed top-0 left-0  flex h-72 flex-col justify-center bg-gray-800 md:h-72 lg:relative lg:h-32 lg:w-auto lg:flex-row lg:items-center lg:bg-black ${
						isOpen
							? 'transition-height w-40 duration-500 ease-in-out md:w-52 lg:transition-none'
							: 'transition-height w-0 overflow-hidden duration-500 ease-in-out lg:transition-none'
					}`}
				>
					<div className='flex w-full flex-col items-start overflow-hidden lg:ml-0 lg:h-full lg:flex-row lg:items-center lg:space-x-8'>
						<nav className='flex h-16 w-full items-center justify-center space-x-8 pb-2'>
							{filteredCategory?.map((category) => (
								<NavLink
									to={`/products/${category}`}
									onClick={() => {
										setOpen(false);
									}}
									className='nav-btn'
								>
									{category}
								</NavLink>
							))}
						</nav>
					</div>
				</div>

				<div className='relative flex h-10 items-center space-x-6 md:mr-2 lg:mr-0'>
					{!userInfo ? (
						<button onClick={handleClickToLogin} className='nav-btn'>
							Login
						</button>
					) : (
						<button onClick={handleClickToLogout} className='nav-btn'>
							Logout
						</button>
					)}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						width='24'
						height='24'
					>
						<path fill='none' d='M0 0h24v24H0z' />
						<path
							d='M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z'
							fill='rgba(255,255,255,1)'
						/>
					</svg>
					<div className='relative flex h-10 items-center justify-around text-gray-100 md:mr-2 lg:mr-0'>
						<Link to='/cart'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width='24'
								height='24'
							>
								<path fill='none' d='M0 0h24v24H0z' />
								<path
									d='M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'
									fill='rgba(255,255,255,1)'
								/>
							</svg>
						</Link>
						{cartItems?.length > 0 && (
							<div className='absolute top-0 right-0 rounded-full bg-red-600 px-1.5 text-xs font-bold tracking-tighter text-white'>
								{cartItems.length}
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
