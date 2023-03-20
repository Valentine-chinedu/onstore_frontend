import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddressTypes, Product } from '../../types';

export interface CartSliceState {
	cartItems: Product[];
	shippingAddress: AddressTypes | null;
}

const initialState: CartSliceState = {
	cartItems: [],
	shippingAddress: null,
};

export const cartSlice = createSlice({
	name: 'cart-items',
	initialState: initialState,

	reducers: {
		addToCart: (state: CartSliceState, action: PayloadAction<Product>) => {
			const product = action.payload;
			const exist = state.cartItems.find(
				(item: any) => item._id === product._id
			);

			if (exist) {
				state.cartItems = state.cartItems.map((item: any) =>
					item._id === product._id ? { ...product, qty: item.qty + 1 } : item
				);
			} else {
				state.cartItems = [...state.cartItems, { ...product, qty: 1 }];
			}
		},

		removeFromCart: (state, action: PayloadAction<string>) => {
			const productId = action.payload;
			const product = state.cartItems.find((item) => item._id === productId);

			if (product) {
				state.cartItems = state.cartItems.filter(
					(item) => item._id !== product._id
				);
			}
		},

		increaseItemQty: (state, action: PayloadAction<string>) => {
			const productId = action.payload;
			const product = state.cartItems.find((item) => item._id === productId);

			if (product) {
				const updatedCartItems = state.cartItems.map((item) =>
					item._id === product._id
						? { ...item, qty: item.qty ? item.qty + 1 : 1 }
						: item
				);
				state.cartItems = updatedCartItems;
			}
		},

		decreaseItemQty: (state, action: PayloadAction<string>) => {
			const productId = action.payload;
			const product = state.cartItems.find((item) => item._id === productId);

			if (product && product.qty > 1) {
				state.cartItems = state.cartItems.map((item: any) =>
					item._id === product._id ? { ...product, qty: item.qty - 1 } : item
				);
			}
		},
		saveAddress: (state, action: PayloadAction<AddressTypes>) => {
			state.shippingAddress = action.payload;
		},
		reset: (state) => {
			state.cartItems = [];
			state.shippingAddress = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	addToCart,
	increaseItemQty,
	decreaseItemQty,
	removeFromCart,
	saveAddress,
	reset,
} = cartSlice.actions;

export default cartSlice;
