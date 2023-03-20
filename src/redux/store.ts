import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import productListSlice from './products/list-slice';
import productDetailsSlice from './products/details-slice';
import productFilterSlice from './products/search-list';
import loginSlice from './users/login-slice';
import userDetailsSlice from './users/user-details';
import userListSlice from './users/user-list';
import orderListSlice from './order/slice-list';
import userOrderSlice from './order/user-orders';
import orderDetailSlice from './order/order-details';
import { authorizationProvider } from '../utils/auth-axios';
import productsByCategorySlice from './products/category-slice';
import categoriesListSlice from './categories/slice-list';
import cartSlice from './cart/cart-Slice';

const reducers = combineReducers({
	//products
	productList: productListSlice.reducer,
	productDetail: productDetailsSlice.reducer,
	productFilter: productFilterSlice.reducer,
	productsByCategory: productsByCategorySlice.reducer,
	categoriesList: categoriesListSlice.reducer,
	cart: cartSlice.reducer,
	//auth
	login: loginSlice.reducer,
	userDetails: userDetailsSlice.reducer,
	userList: userListSlice.reducer,
	//orders
	orders: orderListSlice.reducer,
	userOrder: userOrderSlice.reducer,
	orderDetail: orderDetailSlice.reducer,
});

const persistConfig = {
	key: 'root',
	storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

authorizationProvider(store);
