import axios from 'axios';

const authAxios = axios.create({
	baseURL: `${process.env.REACT_APP_BASEURL}/api`,
});

export const authorizationProvider = (store: any) => {
	authAxios.interceptors.request.use((config: any) => {
		const token = store.getState().login.userInfo.token;
		config.headers.Authorization = `Bearer ${token}`;
		return config;
	});
};

export default authAxios;
