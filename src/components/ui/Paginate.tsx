import React from 'react';
import ReactPaginate from 'react-paginate';
import { Product } from '../../types';

export interface IProps {
	handlePageClick: (event: any) => void;
	pageCount: number;
	currentProducts: Product[];
}
const Paginate = ({ handlePageClick, pageCount }: IProps) => {
	return (
		<div>
			<ReactPaginate
				className='flex justify-center space-x-4 text-sm font-semibold text-gray-600 lg:space-x-10 lg:text-lg'
				breakLabel='...'
				breakClassName='text-gray-600'
				nextLabel='next >'
				onPageChange={handlePageClick}
				pageRangeDisplayed={9}
				pageCount={pageCount}
				previousLabel='< previous'
			/>
		</div>
	);
};

export default Paginate;
