import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import publicAxios from '../../utils/public-axios';
import { toast } from 'react-hot-toast';
import { setError } from '../../utils/error';

type FormValues = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};

const Register = () => {
	const navigate = useNavigate();
	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.required('Username is required')
			.min(3, 'Username must be at least 3 characters')
			.max(20, 'Username must not exceed 20 characters'),
		email: Yup.string().required('Email is required').email('Email is invalid'),
		password: Yup.string()
			.required('Password is required')
			.min(6, 'Password must be at least 6 characters')
			.max(40, 'Password must not exceed 40 characters'),
		confirmPassword: Yup.string()
			.required('Confirm Password is required')
			.oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data: FormValues) => {
		publicAxios
			.post('/users/register', data)
			.then((res) => {
				toast.success('you have been registred , please login');
				navigate('/login');
			})
			.catch((err) => toast.error(setError(err)));
	};

	return (
		<section className='flex h-screen items-center justify-center'>
			<div className='mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12'>
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* UserName input  */}
					<div className='mb-6'>
						<input
							className={`m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none ${
								errors.name?.message ? 'border-red-500' : 'border-gray-300'
							}`}
							type='text'
							id='exampleFormControlInput2'
							placeholder='Username'
							{...register('name')}
						/>
						{errors.name?.message && (
							<p className='text-red-500'>{errors.name?.message}</p>
						)}
					</div>

					{/* Email input  */}
					<div className='mb-6'>
						<input
							className={`m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none ${
								errors.email?.message ? 'border-red-500' : 'border-gray-300'
							}`}
							type='text'
							id='exampleFormControlInput2'
							placeholder='Email address'
							{...register('email')}
						/>
						{errors.email?.message && (
							<p className='text-red-500'>{errors.email?.message}</p>
						)}
					</div>

					{/* Password input */}
					<div className='mb-6'>
						<input
							type='password'
							className='m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none'
							id='exampleFormControlInput2'
							placeholder='Password'
							{...register('password')}
						/>
						{errors.password?.message && (
							<p className='text-red-500'>{errors.password?.message}</p>
						)}
					</div>

					{/* confirm password */}
					<div className='mb-6'>
						<input
							type='password'
							className='m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none'
							id='exampleFormControlInput2'
							placeholder='Confirm Password'
							{...register('confirmPassword')}
						/>
						{errors.confirmPassword?.message && (
							<p className='text-red-500'>{errors.password?.message}</p>
						)}
					</div>

					<div className='text-center lg:text-left'>
						<button
							type='submit'
							className='inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
						>
							Register
						</button>
						<p className='mt-2 mb-0 pt-1 text-sm font-semibold'>
							Already have an account?
							<Link
								to='/login'
								className='text-red-600 transition duration-200 ease-in-out hover:text-red-700 focus:text-red-700'
							>
								Login
							</Link>
						</p>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Register;
