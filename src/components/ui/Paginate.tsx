import React from 'react';
import ReactPaginate from 'react-paginate';
import { Product } from '../../types';

export interface IProps {
	handlePageClick: (event: any) => void;
	pageCount: number;
	currentProducts: Product[];
}
const Paginate = ({ handlePageClick, currentProducts, pageCount }: IProps) => {
	return (
		<div>
			<ReactPaginate
				className='flex justify-center space-x-10 text-lg font-semibold text-gray-600'
				breakLabel='...'
				breakClassName='text-gray-600'
				nextLabel='next >'
				nextClassName={`${pageCount < 2 && 'invisible'}`}
				onPageChange={handlePageClick}
				pageRangeDisplayed={9}
				pageCount={pageCount}
				previousLabel='< previous'
				previousClassName={`${pageCount < 2 && 'invisible'}`}
			/>
		</div>
	);
};

export default Paginate;
