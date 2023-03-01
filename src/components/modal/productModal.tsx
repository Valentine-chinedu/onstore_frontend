import React, { ChangeEvent, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import authAxios from '../../utils/auth-axios';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import storage from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

type Props = {
	show: boolean;
	handleClose: () => void;
	setRefresh: any;
};

type FormValues = {
	name: string;
	image: string;
	category: string;
	price: number;
	description: string;
	qty: number;
};

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

//   for screen reader
Modal.setAppElement(document.getElementById('root') as HTMLElement);

const ProductModal = ({ show, handleClose, setRefresh }: Props) => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required(),
		category: Yup.string().required(),
		price: Yup.number().positive().required(),
		qty: Yup.number().nullable(true),
		description: Yup.string().required(),
	});

	const [image, setImage] = useState('');
	const [percent, setPercent] = useState(0);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(validationSchema),
	});

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const file = e.target.files[0];
			const storageRef = ref(storage, `/files/${file.name}`);
			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const percent = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					);

					setPercent(percent);
				},
				(err) => console.log(err),
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((url) => {
						console.log(url);
						setImage(url);
					});
				}
			);
		}
	};

	const onSubmit = (data: FormValues) => {
		authAxios
			.post('/products', { ...data, image })
			.then((res) => {
				toast.success('Product has beend created');
				reset();
				setRefresh((prev: any) => (prev = !prev));
				handleClose();
			})
			.catch((err) => toast.error(setError(err)));
	};

	return (
		<Modal
			isOpen={show}
			// onAfterOpen={}
			onRequestClose={handleClose}
			style={customStyles}
			contentLabel='Add Product'
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-4'>
					<label className='mb-2 block font-medium text-gray-700'>Name</label>
					<input
						type='text'
						placeholder='doe'
						className={` ${errors.name?.message ? 'border-red-500' : ''}`}
						{...register('name')}
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
						type='file'
						placeholder='Gtx 1660 super'
						name='image'
						onChange={onChange}
						className='form-input'
					/>

					{percent > 0 && <p>{percent}% done</p>}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block font-medium text-gray-700'>
						Category
					</label>
					<input
						type='text'
						placeholder='Graphics'
						className={`form-input ${
							errors.category?.message ? 'border-red-500' : ''
						}`}
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
						className={`form-input ${
							errors.price?.message ? 'border-red-500' : ''
						}`}
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
						Quantity
					</label>
					<input
						type='number'
						placeholder='5'
						className={`form-input ${
							errors.qty?.message ? 'border-red-500' : ''
						}`}
						{...register('qty')}
					/>
				</div>
				<div className='mb-4'>
					<label className='mb-2 block font-medium text-gray-700'>
						Description
					</label>
					<textarea
						rows={3}
						placeholder='description'
						{...register('description')}
						className={`form-textarea form-input-style block w-full rounded-md border border-gray-300 py-2 px-3 ${
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
		</Modal>
	);
};

export default ProductModal;
