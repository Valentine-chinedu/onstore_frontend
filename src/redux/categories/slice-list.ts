import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { setError } from '../../utils/error';
import publicAxios from '../../utils/public-axios';

export interface CategoriesSliceState {
	categories: string[];
	loading: boolean;
	error: null | object;
}

const categories: [] | [] = [];

const initialState: CategoriesSliceState = {
	categories: categories,
	loading: false,
	error: null,
};

export const getCategories = createAsyncThunk('categoris/list', async () => {
	try {
		const { data } = await publicAxios.get('/products/categories');
		return data;
	} catch (error: any) {
		const message = setError(error);
		toast.error(message);
	}
});

export const categoriesListSlice = createSlice({
	name: 'category-list',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCategories.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getCategories.fulfilled, (state, action) => {
			state.loading = false;
			state.categories = action.payload;
		});
		builder.addCase(getCategories.rejected, (state) => {
			state.loading = false;
		});
	},
});

export default categoriesListSlice;
