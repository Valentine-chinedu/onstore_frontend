import React, { ReactNode } from 'react';
import Sidebar from '../dashboard/Sidebar';
import Topbar from '../dashboard/Topbar';

type LayoutProvider = {
	children: ReactNode;
};

const DashboardLayout = ({ children }: LayoutProvider) => {
	return (
		<>
			<div className='flex flex-col lg:flex-row '>
				<Sidebar />
				<div style={{ minHeight: '100vh' }} className='flex-grow'>
					<Topbar />
					<main>
						<div className='container'>{children}</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default DashboardLayout;
