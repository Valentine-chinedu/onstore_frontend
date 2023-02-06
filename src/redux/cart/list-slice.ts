import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { Carts } from '../../types';
import { setError } from '../../utils/error';
import publicAxios from '../../utils/public-axios';

export interface CartSliceState {
	cartItems: Carts[];
	loading: boolean;
	error: null | object;
}

const initialState: CartSliceState = {
	cartItems: [],
	loading: false,
	error: null,
};

export const getCarts = createAsyncThunk('carts/list', async () => {
	try {
		const { data } = await publicAxios.get('/carts');
		return data;
	} catch (error: any) {
		const message = setError(error);
		toast.error(message);
	}
});

export const cartListSlice = createSlice({
	name: 'carts-list',
	initialState,
	reducers: {},
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

export default cartListSlice;
