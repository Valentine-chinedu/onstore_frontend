import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { userLogin } from '../../redux/users/login-slice';

type FormValues = {
	email: string | undefined;
	password: string | undefined;
};

const Login = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { userInfo } = useAppSelector((state) => state.login);
	const validationSchema = Yup.object().shape({
		email: Yup.string(),
		// .required('Email is required').email('Email is invalid'),
		password: Yup.string(),
		// .required('Password is required')
		// .min(6, 'Password must be at least 6 characters')
		// .max(40, 'Password must not exceed 40 characters'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<FormValues>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data: FormValues) => {
		dispatch(userLogin(data));
	};

	const handleDemoLogin = () => {
		setValue('email', 'valentine11.dev@gmail.com', { shouldValidate: true });
		setValue('password', 'Young2sis', { shouldValidate: true });
	};

	useEffect(() => {
		if (userInfo) return navigate('/');
	}, [userInfo, navigate]);

	return (
		<section className='flex h-screen items-center justify-center'>
			<div className='mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12'>
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* Email input  */}
					<div className='mb-6'>
						<input
							className='m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none'
							type='text'
							id='exampleFormControlInput2'
							placeholder='Email address'
							{...register('email')}
						/>
						{errors.email && (
							<p className='text-red-500'>{errors.email?.message}</p>
						)}
					</div>

					{/* Password input */}
					<div className='mb-6'>
						<input
							type='password'
							className='form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none'
							id='exampleFormControlInput2'
							placeholder='Password'
							{...register('password')}
						/>
						{errors.password && (
							<p className='text-red-500'>{errors.password?.message}</p>
						)}
					</div>

					<div className='text-center lg:text-left'>
						<div className='space-x-4'>
							<button
								type='submit'
								className='inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
							>
								Login
							</button>
							<button
								type='submit'
								className='inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
								onClick={() => handleDemoLogin()}
							>
								Demo Login
							</button>
						</div>
						<p className='mt-2 mb-0 pt-1 text-sm font-semibold'>
							Don't have an account?
							<Link
								to='/register'
								className='text-red-600 transition duration-200 ease-in-out hover:text-red-700 focus:text-red-700'
							>
								Register
							</Link>
						</p>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Login;
