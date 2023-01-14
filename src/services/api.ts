import axios from 'axios';

export const apiClient = axios.create({
	baseURL: 'https://api.chec.io/v1/',
	headers: {
		'X-Authorization': process.env.REACT_APP_CHEC_PUBLIC_KEY,
		'Content-Type': 'application/json',
	},
});
