import React, { ReactNode } from 'react';
import Header from '../userPage/header/Header';

type LayoutProvider = {
	children: ReactNode;
};

const DefaultLayout = ({ children }: LayoutProvider) => {
	return (
		<div className='pt-12 lg:pt-16'>
			<Header />
			<main className='h-full'>{children}</main>
		</div>
	);
};

export default DefaultLayout;
