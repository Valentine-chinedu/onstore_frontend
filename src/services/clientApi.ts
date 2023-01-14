import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Carts, Categories, Products } from '../types';

const headers = {
	'X-Authorization': process.env.REACT_APP_CHEC_PUBLIC_KEY,
};

export const clientApi = createApi({
	reducerPath: 'client',
	tagTypes: ['carts'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.chec.io/v1/',
		// prepareHeaders: (headers) => {
		// 	headers.set(
		// 		'X-Authorization',
		// 		`Bearer ${process.env.REACT_APP_CHEC_PUBLIC_KEY}`
		// 	);

		// 	return headers;
		// },
	}),
	endpoints: (builder) => ({
		getProducts: builder.query<Products[], void>({
			query: () => ({
				url: 'products',
				headers: headers,
			}),
			transformResponse: (response: { data: Products[] }, meta, arg) =>
				response.data,
		}),

		getCategories: builder.query<Categories[], void>({
			query: () => ({ url: 'categories', headers: headers }),
			transformResponse: (response: { data: Categories[] }, meta, arg) =>
				response.data,
		}),

		getCart: builder.query<Carts, void>({
			query: () => ({ url: 'carts', headers: headers }),

			providesTags: [{ type: 'carts', id: 'LIST' }],
		}),

		addToCart: builder.mutation<
			Carts,
			{ cart_id: string; product_id: string; quantity: number }
		>({
			query: ({ cart_id, ...data }) => ({
				url: `carts/${cart_id}`,
				method: 'POST',
				body: data,
				headers: headers,
			}),

			invalidatesTags: (result) =>
				result ? [{ type: 'carts', id: 'LIST' }] : [],
		}),

		updateCartQty: builder.mutation<
			Carts,
			{ cart_id: string; line_item_id: string; quantity: number }
		>({
			query: ({ cart_id, line_item_id, quantity }) => ({
				url: `carts/${cart_id}/${line_item_id}`,
				method: 'POST',
				body: quantity,
				headers: headers,
			}),
			invalidatesTags: (result) =>
				result ? [{ type: 'carts', id: 'LIST' }] : [],
		}),

		removeFromCart: builder.mutation<
			Carts,
			{ cart_id: string; line_item_id: string }
		>({
			query: ({ cart_id, line_item_id }) => ({
				url: `carts/${cart_id}/items/${line_item_id}`,
				method: 'POST',
				headers: headers,
			}),
			invalidatesTags: (result) =>
				result ? [{ type: 'carts', id: 'LIST' }] : [],
		}),

		emptyCart: builder.mutation<Carts, { cart_id: string }>({
			query: (cart_id) => ({
				url: `carts/${cart_id}/items`,
				method: 'DELETE',
				headers: headers,
			}),
			invalidatesTags: (result) =>
				result ? [{ type: 'carts', id: 'LIST' }] : [],
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetCategoriesQuery,
	useGetCartQuery,
	useAddToCartMutation,
	useUpdateCartQtyMutation,
	useRemoveFromCartMutation,
	useEmptyCartMutation,
} = clientApi;
