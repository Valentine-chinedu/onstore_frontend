import React, { ReactNode, useState } from 'react';
import Sidebar from '../adminPage/dashboard/Sidebar';
import Topbar from '../adminPage/dashboard/Topbar';

type LayoutProvider = {
	children: ReactNode;
};

const DashboardLayout = ({ children }: LayoutProvider) => {
	const [openSideBar, setOpenSideBar] = useState(false);
	return (
		<>
			<div className='flex flex-col '>
				<Topbar setOpen={setOpenSideBar} isOpen={openSideBar} />
				<div className='flex min-h-screen flex-grow'>
					<Sidebar isOpen={openSideBar} />
					<main className='w-full'>
						<div className='lg:px-6'>{children}</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default DashboardLayout;
