import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Carts, Categories, Products } from '../types';

export const clientApi = createApi({
	reducerPath: 'client',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.chec.io/v1/',
		prepareHeaders: (headers) => {
			headers.set(
				'Authorization',
				`Bearer ${process.env.REACT_APP_CHEC_PUBLIC_KEY}`
			);
			headers.set('content-type', 'application/json');
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getProducts: builder.query<Products[], void>({
			query: () => 'products',
		}),

		gethCategories: builder.query<Categories[], void>({
			query: () => 'categories',
		}),

		getCart: builder.query<Carts[], void>({
			query: () => 'carts',
		}),

		AddToCart: builder.mutation<Carts, { data: Partial<Carts> }>({
			query: (data) => ({
				url: 'carts',
				method: 'POST',
				body: data,
			}),
		}),
		UpdateCartQty: builder.mutation<
			Carts,
			{ cart_id: string; line_item_id: string; quantity: number }
		>({
			query: ({ cart_id, line_item_id, quantity }) => ({
				url: `carts/${cart_id}/${line_item_id}`,
				method: 'PUT',
				body: quantity,
			}),
		}),
		RemoveFromCart: builder.mutation<
			Carts,
			{ cart_id: string; line_item_id: string }
		>({
			query: ({ cart_id, line_item_id }) => ({
				url: `carts/${cart_id}/items/${line_item_id}`,
				method: 'DELETE',
			}),
		}),
		emptyCart: builder.mutation<Carts, { cart_id: string }>({
			query: ({ cart_id }) => ({
				url: `carts/${cart_id}/items`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGethCategoriesQuery,
	useGetCartQuery,
	useAddToCartMutation,
	useUpdateCartQtyMutation,
	useRemoveFromCartMutation,
	useEmptyCartMutation,
} = clientApi;
