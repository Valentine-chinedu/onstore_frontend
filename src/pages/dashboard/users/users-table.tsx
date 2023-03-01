import React from 'react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';
import DashboardLayout from '../../../components/layouts/DashboardLayout';
import Loader from '../../../components/ui/Loader';
import { useAppDispatch, useAppSelector } from '../../../redux/store';

import { getUsersList } from '../../../redux/users/user-list';
import authAxios from '../../../utils/auth-axios';
import { setError } from '../../../utils/error';
import { getDate } from '../../../utils/helper';

const UserTable = () => {
	const dispatch = useAppDispatch();
	const { users, loading } = useAppSelector((state) => state.userList);

	const cols = ['name', 'email', 'created At', 'admin', 'promote', 'delete'];

	const [refresh, setRefresh] = useState<boolean>(false);

	const onDelete = (id: string | number) => {
		if (window.confirm('are you sure?')) {
			authAxios
				.delete(`/users/${id}`)
				.then((res) => {
					toast.success('user has beend deleted');
					setRefresh((prev) => (prev = !prev));
				})
				.catch((e) => toast.error(setError(e)));
		}
	};

	const onPromote = (id: string | number) => {
		if (window.confirm('are you sure?')) {
			authAxios
				.post(`/users/promote/${id}`)
				.then((res) => {
					toast.success('user has beend promoted');
					setRefresh((prev) => (prev = !prev));
				})
				.catch((e) => toast.error(setError(e)));
		}
	};

	useEffect(() => {
		dispatch(getUsersList());
	}, [dispatch, refresh]);

	return (
		<DashboardLayout>
			{loading ? (
				<Loader />
			) : (
				<div className='py-3'>
					<div className='d-flex justify-content-between align-items-center'>
						<span>User List</span>
						{/* <button className="text-sm">Add User</button> */}
					</div>
					<div className='overflow-x-auto'>
						<table className='w-full'>
							<thead>
								<tr className='text-left font-medium'>
									{cols.map((col) => (
										<th key={col} className='px-4 py-2'>
											{col}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{users?.map((user) => (
									<tr key={user._id}>
										<td className='px-4 py-2'>{user.name}</td>
										<td className='px-4 py-2'>{user.email}</td>
										<td className='px-4 py-2'>{getDate(user.createdAt)}</td>
										<td className='px-4 py-2'>
											{user.isAdmin ? (
												<FaCheck color='green' />
											) : (
												<FaTimes color='red' />
											)}
										</td>
										<td className='px-4 py-2'>
											{!user?.isAdmin && (
												<button
													onClick={() => onPromote(user._id)}
													className='rounded-full bg-green-500 px-3 py-1 text-white hover:bg-green-600'
												>
													Promote
												</button>
											)}
										</td>
										<td className='px-4 py-2'>
											<button
												onClick={() => onDelete(user._id)}
												className='rounded-full bg-red-500 px-3 py-1 text-white hover:bg-red-600'
											>
												<FaTrash />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</DashboardLayout>
	);
};

export default UserTable;
