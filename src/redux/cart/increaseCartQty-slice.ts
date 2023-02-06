import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { setError } from '../../utils/error';
import publicAxios from '../../utils/public-axios';

export interface FormValue {
	productId: string;
	userId: string;
}

type SliceState = {
	loading: boolean;
	error: null | object;
};

const initialState: SliceState = {
	loading: false,
	error: null,
};

export const increaseCartQty = createAsyncThunk(
	'carts/increase',
	async (data: FormValue) => {
		try {
			const res = await publicAxios.put('/carts/increase', data);
			toast.success(res.data);
		} catch (error: any) {
			const message = setError(error);
			toast.error(message);
		}
	}
);

export const increaseCartQtySlice = createSlice({
	name: 'carts-increase',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(increaseCartQty.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(increaseCartQty.fulfilled, (state) => {
			state.loading = false;
		});
		builder.addCase(
			increaseCartQty.rejected,
			(state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload;
			}
		);
	},
});
