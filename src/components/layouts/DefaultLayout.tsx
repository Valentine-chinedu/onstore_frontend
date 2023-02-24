import React, { ReactNode } from 'react';
import Header from '../header/Header';

type LayoutProvider = {
	children: ReactNode;
};

const DefaultLayout = ({ children }: LayoutProvider) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default DefaultLayout;
