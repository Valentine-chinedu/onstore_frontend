import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';
import DashboardLayout from '../../../components/adminPage/layouts/DashboardLayout';
import Loader from '../../../components/ui/Loader';
import { getOrdersList } from '../../../redux/order/slice-list';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import authAxios from '../../../utils/auth-axios';
import { setError } from '../../../utils/error';
import { formatCurrencry, getDate } from '../../../utils/helper';

function OrdersTable() {
	const dispatch = useAppDispatch();
	const { orders, loading } = useAppSelector((state) => state.orders);
	const { userInfo } = useAppSelector((state) => state.login);
	const [refresh, setRefresh] = useState<boolean>(false);
	const cols = [
		'Order_id',
		'TotalPrice',
		'Address',
		'Status',
		'Created At',
		'Delete',
	];

	const onDelete = (id: string | number) => {
		if (window.confirm('are you sure?')) {
			authAxios
				.delete(`/orders/${id}`)
				.then((res) => {
					toast.success(res.data);
					setRefresh((prev) => (prev = !prev));
				})
				.catch((e) => toast.error(setError(e)));
		}
	};

	useEffect(() => {
		dispatch(getOrdersList());
	}, [dispatch, refresh]);

	return (
		<DashboardLayout>
			{loading ? (
				<Loader />
			) : (
				<div className='py-3'>
					<h3 className='flex items-center justify-between'>
						<span>Orders List</span>
					</h3>
					<table className='w-full '>
						<thead>
							<tr>
								{cols.map((col) => (
									<th key={col} className='px-4 py-2 text-left'>
										{col}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr key={order._id}>
									<td className='px-4 py-2'>{order._id}</td>

									<td className='px-4 py-2'>
										{formatCurrencry(order?.totalPrice)}
									</td>
									<td className='px-4 py-2'>
										{order?.shippingAddress?.address}
									</td>
									<td className='px-4 py-2'>
										{order.isPaid ? (
											<FaCheck color='green' />
										) : (
											<FaTimes color='red' />
										)}
									</td>
									<td className='px-4 py-2'>{getDate(order?.createdAt)}</td>
									<td className='px-4 py-2'>
										<button
											onClick={() => onDelete(order._id)}
											className='rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700'
											disabled={userInfo?.name === 'tester1'}
										>
											<FaTrash />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</DashboardLayout>
	);
}

export default OrdersTable;
