import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { setError } from '../../utils/error';
import publicAxios from '../../utils/public-axios';

export interface FormValue {
	productId: string;
	userId: string;
	quantity: number;
}

type addSliceState = {
	loading: boolean;
	error: null | object;
};

const initialState: addSliceState = {
	loading: false,
	error: null,
};

export const addToCart = createAsyncThunk(
	'carts/list',
	async (data: FormValue) => {
		try {
			const res = await publicAxios.post('/carts/add', data);
			toast.success(res.data);
		} catch (error: any) {
			const message = setError(error);
			toast.error(message);
		}
	}
);

export const addToCartSlice = createSlice({
	name: 'carts-list',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(addToCart.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(addToCart.fulfilled, (state) => {
			state.loading = false;
		});
		builder.addCase(addToCart.rejected, (state, action: PayloadAction<any>) => {
			state.loading = false;
			state.error = action.payload;
		});
	},
});
