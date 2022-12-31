import { AdminProp, Categories, Order, Params, Products } from '../types';
import { apiClient } from './api';
import queryString from 'query-string';

export const getProducts = async (
	sortBy: any
): Promise<Products[] | undefined> => {
	try {
		const res = await apiClient.get(
			`/products?sortBy=${sortBy}&order=desc&limit=6`
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const getCategories = async (): Promise<Categories[] | undefined> => {
	try {
		const res = await apiClient.get(`/categories`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const getSearchList = async (
	params: Params
): Promise<Products | undefined> => {
	const query = queryString.stringify(params);
	try {
		const res = await apiClient.get(`/products/search?${query}`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const getSingleProducts = async (productId: string) => {
	try {
		const res = await apiClient.get(`/products?sortBy=${productId}`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const getBraintreeClientToken = async ({
	userId,
	token,
}: AdminProp): Promise<AdminProp | undefined> => {
	try {
		const res = await apiClient.get(`/braintree/getToken/${userId}`, {
			headers: {
				Accept: 'application/json',
				'content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const processPayment = async (
	{ userId, token }: AdminProp,
	paymentData: any
) => {
	try {
		const res = await apiClient.post(`/braintree/payment/${userId}`, {
			headers: {
				Accept: 'application/json',
				'content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			data: JSON.stringify(paymentData),
		});
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const createOrder = async (
	{ userId, token }: AdminProp,
	createOrderData: Order
) => {
	try {
		const res = await apiClient.post(`/order/create/${userId}`, {
			headers: {
				Accept: 'application/json',
				'content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			data: JSON.stringify(createOrderData),
		});
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
