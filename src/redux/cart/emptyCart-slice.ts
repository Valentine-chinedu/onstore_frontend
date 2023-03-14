import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { setError } from '../../utils/error';
import publicAxios from '../../utils/public-axios';

type emptySliceState = {
	loading: boolean;
	error: null | object;
};

const initialState: emptySliceState = {
	loading: false,
	error: null,
};

export const emptyCart = createAsyncThunk('carts/empty', async (id: string) => {
	try {
		const res = await publicAxios.post(`/carts/empty/${id}`);
		toast.success(res.data);
	} catch (error: any) {
		const message = setError(error);
		toast.error(message);
	}
});

export const emptyCartSlice = createSlice({
	name: 'carts-empty',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(emptyCart.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(emptyCart.fulfilled, (state) => {
			state.loading = false;
		});
		builder.addCase(emptyCart.rejected, (state, action: PayloadAction<any>) => {
			state.loading = false;
			state.error = action.payload;
		});
	},
});
