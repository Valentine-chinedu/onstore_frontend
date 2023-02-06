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

export const decreaseCartQty = createAsyncThunk(
	'carts/decrease',
	async (data: FormValue) => {
		try {
			const res = await publicAxios.put('/carts/decrease', data);
			toast.success(res.data);
		} catch (error: any) {
			const message = setError(error);
			toast.error(message);
		}
	}
);

export const decreaseCartQtySlice = createSlice({
	name: 'carts-decrease',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(decreaseCartQty.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(decreaseCartQty.fulfilled, (state) => {
			state.loading = false;
		});
		builder.addCase(
			decreaseCartQty.rejected,
			(state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload;
			}
		);
	},
});
