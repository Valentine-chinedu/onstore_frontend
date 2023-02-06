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

export const removeFromCart = createAsyncThunk(
	'carts/remove',
	async (data: FormValue) => {
		try {
			const res = await publicAxios.post('/carts/remove', data);
			toast.success(res.data);
		} catch (error: any) {
			const message = setError(error);
			toast.error(message);
		}
	}
);

export const removeFromCartSlice = createSlice({
	name: 'carts-remove',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(removeFromCart.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(removeFromCart.fulfilled, (state) => {
			state.loading = false;
		});
		builder.addCase(
			removeFromCart.rejected,
			(state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload;
			}
		);
	},
});
