import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveAddress } from '../../redux/cart/list-slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { AddressTypes } from '../../types';

const ShippingAddress = () => {
	const { shippingAddress } = useAppSelector((state) => state.cartItems);
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
		<div>
			<form onSubmit={onSubmit}>
				<div>
					<label>Address</label>
					<input
						type='text'
						onChange={onChange}
						name='address'
						placeholder='enter your address'
						required
					/>
				</div>
				<div>
					<label>City</label>
					<input
						type='text'
						onChange={onChange}
						name='city'
						placeholder='enter your city'
						required
					/>
				</div>
				<div>
					<label>Postal Code</label>
					<input
						type='text'
						onChange={onChange}
						name='postalCode'
						placeholder='enter your postal code'
						required
					/>
				</div>
				<div>
					<label>Country</label>
					<input
						type='text'
						onChange={onChange}
						name='country'
						placeholder='enter your country'
						required
					/>
				</div>
				<button type='submit' className='mt-4 w-full'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ShippingAddress;
