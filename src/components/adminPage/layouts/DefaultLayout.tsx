import React, { ReactNode } from 'react';
import Header from '../../userPage/header/Header';

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
