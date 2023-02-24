import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
	return (
		<header
			className='border-b pt-6 text-white shadow '
			style={{ backgroundColor: '#1b1b1b' }}
		>
			<div className='container'>
				<div className='h-16'>
					<div className='flex items-center justify-between '>
						<Link to='/home'>Back to Home</Link>

						<div className='text-xl'>Admin Dashboard</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Topbar;
