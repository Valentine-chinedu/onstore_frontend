import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { OrderTypes } from '../../types';
import authAxios from '../../utils/auth-axios';
import { setError } from '../../utils/error';

export interface OrderSliceState {
	order: null | OrderTypes;
	loading: boolean;
	error: null | object;
}

const initialState: OrderSliceState = {
	order: null,
	loading: false,
	error: null,
};

export const getOrderById = createAsyncThunk(
	'order/details',
	async (id: string | undefined) => {
		try {
			const { data } = await authAxios.get(`/orders/${id}`);
			return data;
		} catch (error: any) {
			const message = setError(error);
			toast.error(message);
		}
	}
);

export const orderDetailSlice = createSlice({
	name: 'orders-detail',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getOrderById.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getOrderById.fulfilled, (state, action) => {
			state.loading = false;
			state.order = action.payload;
		});
		builder.addCase(getOrderById.rejected, (state) => {
			state.loading = false;
		});
	},
});

export default orderDetailSlice;
