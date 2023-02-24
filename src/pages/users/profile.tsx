import React, { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form/dist/useForm';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import * as Yup from 'yup';
import authAxios from '../../utils/auth-axios';
import { toast } from 'react-hot-toast';
import { getUserBydId } from '../../redux/users/user-details';
import { getUserOrder } from '../../redux/order/user-orders';
import Loader from '../../components/ui/Loader';
import { formatCurrencry, getDate } from '../../utils/helper';
import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { setError } from '../../utils/error';

type FormValues = {
	email: string;
	name: string;
	password: string;
	confirmPassword: string;
};

const Profile = () => {
	const dispatch = useAppDispatch();
	const { user, loading } = useAppSelector((state) => state.userDetails);
	const { orders, loading: orderLoading } = useAppSelector(
		(state) => state.userOrder
	);

	const { id } = useParams();
	const [refresh, setRefresh] = useState<boolean>(false);
	const validationSchema = Yup.object().shape({
		name: Yup.string().required(),
		email: Yup.string().required('Email is required').email('Email is invalid'),
		password: Yup.string(),
		confirmPassword: Yup.string().oneOf(
			[Yup.ref('password'), null],
			'Confirm Password does not match'
		),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data: FormValues) => {
		const update = {
			name: data.name,
			email: data.email,
			password: data.password === '' ? null : data.password,
		};
		authAxios
			.put(`/users/${user?._id}`, update)
			.then((res) => {
				toast.success('user has been updated');
				setRefresh((prev) => (prev = !prev));
			})
			.catch((err) => toast.error(setError(err)));
	};

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
		dispatch(getUserBydId(id));
		dispatch(getUserOrder());
	}, [dispatch, id, refresh]);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const cols = ['Order id', 'Price', 'Address', 'Paid', 'Date', 'Options'];

	return (
		<div className='container mx-auto'>
			{loading || !user || orderLoading || !orders ? (
				<Loader />
			) : (
				<div>
					<div className='w-full p-2 md:w-1/2 lg:w-1/3'>
						<h2 className='text-lg font-medium'>User Profile</h2>
						<div className='rounded bg-white p-4 shadow'>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className='mb-4'>
									<label className='mb-2 block font-medium text-gray-700'>
										Username
									</label>
									<input
										type='text'
										placeholder='Enter name'
										className={`w-full rounded border border-gray-400 p-2 ${
											errors.name?.message && 'border-red-500'
										}`}
										{...register('name', {
											value: user?.name,
										})}
									/>
									<p
										className={`text-sm text-red-500 ${
											errors.name?.message && 'block'
										}`}
									>
										{errors.name?.message}
									</p>
								</div>
								<div className='mb-4'>
									<label className='mb-2 block font-medium text-gray-700'>
										Email Address
									</label>
									<input
										type='email'
										placeholder='Enter email'
										className={`w-full rounded border border-gray-400 p-2 ${
											errors.email?.message && 'border-red-500'
										}`}
										{...register('email', {
											value: user?.email,
										})}
									/>
									<p
										className={`text-sm text-red-500 ${
											errors.email?.message && 'block'
										}`}
									>
										{errors.email?.message}
									</p>
								</div>
								<div className='mb-4'>
									<label className='mb-2 block font-medium text-gray-700'>
										Password
									</label>
									<input
										type='password'
										placeholder='********'
										className={`w-full rounded border border-gray-400 p-2 ${
											errors.password?.message && 'border-red-500'
										}`}
										{...register('password')}
									/>
									<p
										className={`text-sm text-red-500 ${
											errors.password?.message && 'block'
										}`}
									>
										{errors.password?.message}
									</p>
								</div>
								<div className='mb-4'>
									<label className='mb-2 block font-medium text-gray-700'>
										Confirm Password
									</label>
									<input
										type='password'
										placeholder='********'
										className={`w-full rounded border border-gray-400 p-2 ${
											errors.confirmPassword?.message && 'border-red-500'
										}`}
										{...register('confirmPassword')}
									/>
									<p
										className={`text-sm text-red-500 ${
											errors.confirmPassword?.message && 'block'
										}`}
									>
										{errors.confirmPassword?.message}
									</p>
								</div>
								<button
									type='submit'
									className='rounded bg-teal-500 py-2 px-4 font-bold text-white hover:bg-teal-600'
								>
									Update
								</button>
							</form>
						</div>
					</div>
					<div className='sm:col-span-7 lg:col-span-8'>
						<div className='cols-{cols}'>
							{orders.map((order) => (
								<tr key={order._id} className='text-sm'>
									<td className='px-2 py-1'>{order._id}</td>

									<td className='px-2 py-1'>
										{formatCurrencry(order?.totalPrice)}
									</td>
									<td className='px-2 py-1'>
										{order?.shippingAddress?.address}
									</td>
									<td className='px-2 py-1'>
										{order.isPaid ? <FaCheck /> : <FaTimes color='red' />}
									</td>
									<td className='px-2 py-1'>{getDate(order?.createdAt)}</td>
									<td className='px-2 py-1'>
										<a
											href={`/orders/${order._id}`}
											className='text-secondary-500 hover:underline'
										>
											<GrView />
										</a>
										<button
											onClick={() => onDelete(order._id)}
											className='rounded bg-red-500 py-1 px-2 font-medium text-white hover:bg-red-600'
										>
											<FaTrash />
										</button>
									</td>
								</tr>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;