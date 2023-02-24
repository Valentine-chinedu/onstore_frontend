import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/error';
import { useAppSelector } from '../../../redux/store';
import authAxios from '../../../utils/auth-axios';
import DashboardLayout from '../../../components/layouts/DashboardLayout';

type FormValues = {
	name: string;
	image: string;
	category: string;
	brand: string;
	price: number;
	description: string;
};
const ProductUpdate = () => {
	const { products } = useAppSelector((state) => state.productFilter);

	const { id } = useParams();
	const navigate = useNavigate();
	const product = products.find((p) => p._id === id);
	const validationSchema = Yup.object().shape({
		name: Yup.string().required(),
		image: Yup.string().required(),
		category: Yup.string().required(),
		brand: Yup.string().required(),
		price: Yup.number().required(),
		description: Yup.string().required(),
	});
	console.log(product);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data: FormValues) => {
		authAxios
			.put(`/products/${product?._id}`, data)
			.then((res) => {
				toast.success('Product has beend updated');
				navigate('/dashboard/product-list');
			})
			.catch((err) => toast.error(setError(err)));
	};

	return (
		<DashboardLayout>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-4'>
					<label className='mb-2 block font-medium text-gray-700'>Name</label>
					<input
						type='text'
						placeholder='doe'
						className={` ${errors.name?.message ? 'border-red-500' : ''}`}
						{...(register('name'), { value: product?.name })}
					/>
					{errors.name?.message && (
						<p className='mt-2 text-xs italic text-red-500'>
							{errors.name?.message}
						</p>
					)}
				</div>
				<div className='mb-4'>
					<label className='mb-2 block font-medium text-gray-700'>Image</label>
					<input
						type='text'
						placeholder='Image Url'
						{...register('image', {
							value: product?.image,
						})}
						className={`form-input ${
							errors.image?.message ? 'border-red-500' : ''
						}`}
					/>
				</div>
				<div className='mb-4'>
					<label className='mb-2 block font-medium text-gray-700'>Brand</label>
					<input
						type='text'
						placeholder='Msi'
						className={` ${errors.brand?.message ? 'border-red-500' : ''}`}
						{...register('brand')}
					/>
					{errors.brand?.message && (
						<p className='mt-2 text-xs italic text-red-500'>
							{errors.brand?.message}
						</p>
					)}
				</div>
				<div className='mb-4'>
					<label className='mb-2 block font-medium text-gray-700'>
						Category
					</label>
					<input
						type='text'
						placeholder='Graphics'
						className={` ${errors.category?.message ? 'border-red-500' : ''}`}
						{...register('category')}
					/>
					{errors.category?.message && (
						<p className='mt-2 text-xs italic text-red-500'>
							{errors.category?.message}
						</p>
					)}
				</div>
				<div className='mb-4'>
					<label className='mb-2 block font-medium text-gray-700'>Price</label>
					<input
						type='number'
						placeholder='200.00'
						className={` ${errors.price?.message ? 'border-red-500' : ''}`}
						{...register('price')}
					/>
					{errors.price?.message && (
						<p className='mt-2 text-xs italic text-red-500'>
							{errors.price?.message}
						</p>
					)}
				</div>
				<div className='mb-4'>
					<label className='mb-2 block font-medium text-gray-700'>
						Description
					</label>
					<textarea
						rows={3}
						placeholder='description'
						{...register('description')}
						className={`block w-full rounded-md border border-gray-300 py-2 px-3 ${
							errors.description?.message && 'border-red-500'
						}`}
					></textarea>
					<p
						className={`text-sm text-red-500 ${
							errors.description?.message ? '' : 'hidden'
						}`}
					>
						{errors.description?.message}
					</p>
				</div>
				<button
					className='focus:shadow-outline rounded-md bg-red-500 py-2 px-4 font-medium text-white hover:bg-red-700 focus:outline-none'
					type='submit'
				>
					ADD
				</button>
			</form>
		</DashboardLayout>
	);
};

export default ProductUpdate;
