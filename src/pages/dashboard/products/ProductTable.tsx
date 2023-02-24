import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../../components/layouts/DashboardLayout';
import ProductModal from '../../../components/modal/productModal';
import Loader from '../../../components/ui/Loader';
import Paginate from '../../../components/ui/Paginate';
import { getProducts } from '../../../redux/products/list-slice';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import authAxios from '../../../utils/auth-axios';
import { setError } from '../../../utils/error';
import { formatCurrencry, getDate } from '../../../utils/helper';

function ProductTable() {
	const dispatch = useAppDispatch();
	const { products, loading } = useAppSelector((state) => state.productList);
	const [PageOffSet, setPageOffSet] = useState(0);
	const [refresh, setRefresh] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);
	const productsPerPage = 10;

	const endOffSet = PageOffSet + productsPerPage;
	const currentProducts = products?.slice(PageOffSet, endOffSet);
	const pageCount = Math.ceil(products?.length / productsPerPage);

	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * productsPerPage) % products.length;
		setPageOffSet(newOffset);
	};

	const onOpen = () => setShow(true);
	const onClose = () => setShow(false);

	const cols = ['image', 'name', 'category', 'price', 'created At', 'options'];

	const onDelete = (id: string | number) => {
		if (window.confirm('are you sure?')) {
			authAxios
				.delete(`/products/${id}`)
				.then((res) => {
					toast.success('Product has beend deleted');
					setRefresh((prev) => (prev = !prev));
				})
				.catch((e) => toast.error(setError(e)));
		}
	};

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch, refresh]);
	// console.log(currentProducts?[0].image);

	return (
		<DashboardLayout>
			{loading ? (
				<Loader />
			) : (
				<div className='flex flex-col space-y-4 py-3'>
					<div className='flex items-center justify-between'>
						<span>Product List</span>
						<button
							className='rounded bg-red-600 px-2 py-1 text-white hover:bg-red-700'
							onClick={onOpen}
						>
							Add Product
						</button>
					</div>

					{currentProducts ? (
						<table className='table-auto border-collapse border border-gray-700'>
							<thead className=' bg-gray-500 text-gray-100'>
								<tr>
									{cols?.map((col) => (
										<th className='py-2'>{col}</th>
									))}
								</tr>
							</thead>
							<tbody className=''>
								{currentProducts?.map((product) => (
									<tr className=' text-gray-700' key={product._id}>
										<td className=''>
											<img
												className='h-10 rounded-full'
												src={product?.image}
												alt='product'
												loading='lazy'
											/>
										</td>
										<td className='flex h-16 items-center justify-center border-l border-gray-900'>
											{product.name}
										</td>
										<td className='bg-yellow-300 py-2'>{product.category}</td>
										<td className='py-2'>{formatCurrencry(product.price)}</td>
										<td className='py-2'>{getDate(product?.createdAt)}</td>
										<td className='py-2'>
											<Link
												to={`/dashboard/product-edit/${product._id}`}
												className=''
											>
												<FaEdit />
											</Link>
											<button
												onClick={() => onDelete(product._id)}
												className=''
											>
												<FaTrash />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<p>No products found</p>
					)}
				</div>
			)}
			<Paginate handlePageClick={handlePageClick} pageCount={pageCount} />
			<ProductModal setRefresh={setRefresh} show={show} handleClose={onClose} />
		</DashboardLayout>
	);
}

export default ProductTable;
