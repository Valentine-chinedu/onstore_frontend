import React, { Dispatch, SetStateAction } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { GoX } from 'react-icons/go';
import { Link } from 'react-router-dom';

type Iprops = {
	isOpen: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
};
const Topbar = ({ isOpen, setOpen }: Iprops) => {
	return (
		<header className='flex h-16 border-b border-gray-400 bg-gray-100 px-2 text-gray-800 lg:flex-col lg:px-0 '>
			<div className='relative flex items-center lg:hidden'>
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
							fill='#080808'
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
							: 'absolute z-50 text-[#080808] focus:outline-none'
					}
				>
					<GoX size={25} />
				</button>
			</div>
			<div className='flex h-full w-full items-center justify-center px-8 lg:justify-between '>
				<div className='hidden items-center space-x-4 lg:flex'>
					<BiArrowBack />
					<Link className='font-bold' to='/home'>
						Back to Home
					</Link>
				</div>

				<div className='text-xl font-bold'>Admin Dashboard</div>
			</div>
		</header>
	);
};

export default Topbar;
