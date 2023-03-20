import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveAddress } from '../../redux/cart/cart-Slice';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { AddressTypes } from '../../types';

const ShippingAddress = () => {
	const { shippingAddress } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	const navigate = useNavigate();
	const [formData, setFormData] = useState<AddressTypes>({
		address: '',
		city: '',
		postalCode: '',
		country: '',
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(
			saveAddress({
				address: formData.address,
				city: formData.city,
				postalCode: formData.postalCode,
				country: formData.country,
			})
		);
		navigate('/checkout');
	};

	useEffect(() => {
		if (shippingAddress) return navigate('/checkout');
	}, [shippingAddress, navigate]);

	return (
		<div className='flex h-full items-center justify-center '>
			<form
				onSubmit={onSubmit}
				className='space-y-16 rounded-xl border px-20 py-32 shadow-xl'
			>
				<div className='flex flex-col space-y-2'>
					<label className='text-lg font-semibold'>Address</label>
					<input
						className='h-12 w-96 border pl-4 text-lg'
						type='text'
						onChange={onChange}
						name='address'
						placeholder='enter your address'
						required
					/>
				</div>
				<div className='flex flex-col space-y-2'>
					<label className='text-lg font-semibold'>City</label>
					<input
						className='h-12 w-96 border pl-4 text-lg'
						type='text'
						onChange={onChange}
						name='city'
						placeholder='enter your city'
						required
					/>
				</div>
				<div className='flex flex-col space-y-2'>
					<label className='text-lg font-semibold'>Postal Code</label>
					<input
						className='h-12 w-96 border pl-4 text-lg'
						type='text'
						onChange={onChange}
						name='postalCode'
						placeholder='enter your postal code'
						required
					/>
				</div>
				<div className='flex flex-col space-y-2'>
					<label className='text-lg font-semibold'>Country</label>
					<input
						className='h-12 w-96 border pl-4 text-lg'
						type='text'
						onChange={onChange}
						name='country'
						placeholder='enter your country'
						required
					/>
				</div>
				<div className='flex justify-center'>
					<button
						type='submit'
						className='rounded-md border px-12 py-2 shadow-md hover:bg-gray-50'
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default ShippingAddress;
