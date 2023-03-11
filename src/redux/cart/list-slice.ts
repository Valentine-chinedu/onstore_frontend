import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { AddressTypes, Carts } from '../../types';
import publicAxios from '../../utils/public-axios';

export interface CartSliceState {
	cartItems: Carts[];
	loading: boolean;
	error: null | object;
	shippingAddress: AddressTypes | null;
}

const initialState: CartSliceState = {
	cartItems: [],
	loading: false,
	error: null,
	shippingAddress: null,
};

export const getCarts = createAsyncThunk(
	'carts/list',
	async (userId: string | undefined) => {
		try {
			const res = await publicAxios.get('/carts/');
			console.log(res.data);
			return res.data;
		} catch (error: any) {
			toast.error(error.message);
		}
	}
);

export const cartListSlice = createSlice({
	name: 'carts-list',
	initialState,
	reducers: {
		saveAddress: (
			state: CartSliceState,
			action: PayloadAction<AddressTypes>
		) => {
			state.shippingAddress = action.payload;
		},
		reset: (state: any) => {
			state.cartItems = [];
			state.shippingAddress = null;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(getCarts.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getCarts.fulfilled, (state, action) => {
			state.loading = false;
			state.cartItems = action.payload;
		});
		builder.addCase(getCarts.rejected, (state) => {
			state.loading = false;
		});
	},
});

export const { saveAddress, reset } = cartListSlice.actions;

export default cartListSlice;
