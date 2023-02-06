import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { Product } from '../../types';
import { setError } from '../../utils/error';
import publicAxios from '../../utils/public-axios';

export interface ProductSliceState {
	products: Product[];
	loading: boolean;
	error: null | object;
}

const initialState: ProductSliceState = {
	products: [],
	loading: false,
	error: null,
};

export const getProductByCategory = createAsyncThunk(
	'products/details',
	async (category: string) => {
		try {
			const res = await publicAxios.get(`/products/${category}`);
			if (res.data) {
				return res.data;
			}
		} catch (error: any) {
			const message = setError(error);
			toast.error(message);
		}
	}
);

export const productsByCategorySlice = createSlice({
	name: 'products-category',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProductByCategory.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getProductByCategory.fulfilled, (state, action) => {
			state.loading = false;
			state.products = action.payload;
		});
		builder.addCase(
			getProductByCategory.rejected,
			(state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload;
			}
		);
	},
});

// Action creators are generated for each case reducer function

export default productsByCategorySlice;
