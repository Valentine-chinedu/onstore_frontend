import React from 'react';
import ReactPaginate from 'react-paginate';

export interface IProps {
	handlePageClick: (event: any) => void;
	pageCount: number;
}
const Paginate = ({ handlePageClick, pageCount }: IProps) => {
	return (
		<div>
			<ReactPaginate
				breakLabel='...'
				nextLabel='next'
				onPageChange={handlePageClick}
				pageRangeDisplayed={9}
				pageCount={pageCount}
				previousLabel='< previous'
			/>
		</div>
	);
};

export default Paginate;
