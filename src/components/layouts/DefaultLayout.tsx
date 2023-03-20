import React, { ReactNode } from 'react';
import Header from '../userPage/header/Header';

type LayoutProvider = {
	children: ReactNode;
};

const DefaultLayout = ({ children }: LayoutProvider) => {
	return (
		<>
			<Header />
			<main className='h-full'>{children}</main>
		</>
	);
};

export default DefaultLayout;
