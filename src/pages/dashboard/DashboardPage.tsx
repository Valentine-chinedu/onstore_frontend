import React, { useEffect } from 'react';
import DashboardLayout from '../../components/adminPage/layouts/DashboardLayout';
import { getOrdersList } from '../../redux/order/slice-list';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { formatCurrencry } from '../../utils/helper';

const DashboardPage = () => {
	const { total } = useAppSelector((state) => state.productFilter);
	const { orders } = useAppSelector((state) => state.orders);
	const { users } = useAppSelector((state) => state.userList);
	const dispatch = useAppDispatch();

	const getTotalCost = () => {
		let total = 0;
		if (!orders) return 500.3;
		// eslint-disable-next-line array-callback-return
		orders.map((item: any) => {
			// eslint-disable-next-line array-callback-return
			if (!item) return;
			total += item.totalPrice;
		});
		return total;
	};

	const totalPrice = getTotalCost();

	useEffect(() => {
		dispatch(getOrdersList());
	}, [dispatch]);

	return (
		<DashboardLayout>
			<div className='g-6 my-6 flex flex-wrap'>
				<div className='w-full p-2 md:w-1/3'>
					<div className='rounded-lg border-0 bg-white p-4 shadow'>
						<div className='flex'>
							<div className='w-full'>
								<span className='text-sm font-medium text-gray-600'>Price</span>
								<h3 className='mt-2 text-xl font-bold'>
									{formatCurrencry(totalPrice)}
								</h3>
							</div>
							<div className='flex h-16 w-16 items-center justify-center rounded-full text-white'>
								<i className='bi bi-credit-card text-lg'></i>
							</div>
						</div>
						<div className='mt-4 text-sm'>
							<span className='p-2'>
								<i className='bi bi-arrow-up mr-2'></i>
								13%
							</span>
							<span className='text-gray-500'>Since last month</span>
						</div>
					</div>
				</div>
				<div className='w-full p-2 md:w-1/3'>
					<div className='rounded-lg border-0 bg-white p-4 shadow'>
						<div className='flex'>
							<div className='w-full'>
								<span className='text-sm font-medium text-gray-600'>
									Clients
								</span>
								<h3 className='mt-2 text-xl font-bold'>
									{users?.length ? users?.length : 0}
								</h3>
							</div>
						</div>
						<div className='mt-4 text-sm'>
							<span className='p-2'>
								<i className='bi bi-arrow-up mr-2'></i>
								30%
							</span>
							<span className='text-gray-500'>Since last Month</span>
						</div>
					</div>
				</div>
				<div className='w-full p-2 md:w-1/3'>
					<div className='rounded-lg border-0 bg-white p-4 shadow'>
						<div className='flex'>
							<div className='w-full'>
								<span className='text-sm font-medium text-gray-600'>
									Products
								</span>
								<h3 className='mt-2 text-xl font-bold'>{total}</h3>
							</div>
							<div className='flex h-16 w-16 items-center justify-center rounded-full text-white'>
								<i className='bi bi-clock-history text-lg'></i>
							</div>
						</div>
						<div className='mt-2 mb-0 text-sm'>
							<span className=''>
								<i className='' />
								-5%
							</span>
							<span className='text-xs'>Since last month</span>
						</div>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default DashboardPage;
