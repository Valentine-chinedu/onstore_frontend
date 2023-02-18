import React from 'react';

const Topbar = () => {
	return (
		<header
			className='border-b pt-6 text-white shadow '
			style={{ backgroundColor: '#1b1b1b' }}
		>
			<div className='container'>
				<div className='h-16'>
					<div className='items-center '>
						<div className=' '>
							<h1 className='mb-2 '>home</h1>
						</div>
						<div className='text-xl'>Admin Dashboard</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Topbar;
