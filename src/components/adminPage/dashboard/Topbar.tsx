import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Topbar = () => {
	return (
		<header className='h-16 border-b border-gray-400 bg-gray-100 text-gray-800 '>
			<div className='flex h-full items-center justify-between px-8 '>
				<div className='flex items-center space-x-4'>
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
