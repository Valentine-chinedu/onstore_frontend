import { Carts } from './carts';

export type User = {
	_id: string;
	name: string;
	email: string;
	isAdmin: boolean;
	createdAt: Date;
	carts: Carts[];
};
