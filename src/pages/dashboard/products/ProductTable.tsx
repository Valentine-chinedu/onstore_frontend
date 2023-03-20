import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../../components/layouts/DashboardLayout';
import ProductModal from '../../../components/adminPage/modal/productModal';
import Loader from '../../../components/ui/Loader';
import Paginate from '../../../components/ui/Paginate';
import { getProducts } from '../../../redux/products/list-slice';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import authAxios from '../../../utils/auth-axios';
import { setError } from '../../../utils/error';
import { formatCurrencry, getDate } from '../../../utils/helper';

function ProductTable() {
	const { products, loading } = useAppSelector((state) => state.productList);
	const [PageOffSet, setPageOffSet] = useState(0);
	const [refresh, setRefresh] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);
	const { userInfo } = useAppSelector((state) => state.login);

	const dispatch = useAppDispatch();

	const productsPerPage = 10;

	const endOffSet = PageOffSet + productsPerPage;
	const currentProducts = products?.slice(PageOffSet, endOffSet);
	const pageCount = Math.ceil(products?.length / productsPerPage);

	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * productsPerPage) % products?.length;
		setPageOffSet(newOffset);
	};

	const onOpen = () => setShow(true);
	const onClose = () => setShow(false);

	const cols = [
		'Image',
		'Name',
		'Category',
		'Price',
		'Quantity',
		'Created At',
		'Options',
	];

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
	console.log(products);

	return (
		<DashboardLayout>
			{loading ? (
				<Loader />
			) : (
				<div className='mb-8 flex flex-col space-y-4 pt-12'>
					<div className='flex items-center justify-between'>
						<span className='text-2xl font-bold'>Product List</span>
						<button
							className='rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-800'
							onClick={onOpen}
							disabled={userInfo?.name === 'tester1'}
						>
							Add Product
						</button>
					</div>

					{currentProducts ? (
						<div className='table w-full border-collapse'>
							<div className='table-header-group bg-gray-500 text-gray-100'>
								<div className='table-row'>
									{cols?.map((col) => (
										<div className='table-cell text-center'>{col}</div>
									))}
								</div>
							</div>
							<div className='table-row-group'>
								{currentProducts?.map((product) => (
									<div className='table-row text-gray-700' key={product._id}>
										<div className='flex  h-20 items-center justify-center'>
											<img
												className='h-10'
												src={product?.image}
												alt='product'
												loading='lazy'
											/>
										</div>

										<div className='table-cell text-center'>{product.name}</div>
										<div className='table-cell text-center'>
											{product.category}
										</div>
										<div className='table-cell text-center'>
											{formatCurrencry(product.price)}
										</div>
										<div className='table-cell text-center'>{product.qty}</div>
										<div className='table-cell text-center'>
											{getDate(product?.createdAt)}
										</div>
										<div className='table-cell  text-center'>
											<div className=' flex justify-center space-x-4 '>
												<Link
													to={`/dashboard/product-edit/${product._id}`}
													className=''
												>
													<FaEdit className='text-2xl hover:text-gray-500' />
												</Link>
												<button
													onClick={() => onDelete(product._id)}
													disabled={userInfo?.name === 'tester1'}
												>
													<FaTrash className='text-xl text-red-500 hover:text-gray-500' />
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					) : (
						<div className='flex justify-center'>
							<p>No products found !</p>
						</div>
					)}
				</div>
			)}
			{currentProducts?.length > 0 && (
				<Paginate
					handlePageClick={handlePageClick}
					currentProducts={currentProducts}
					pageCount={pageCount}
				/>
			)}
			<ProductModal setRefresh={setRefresh} show={show} handleClose={onClose} />
		</DashboardLayout>
	);
}

export default ProductTable;
