import { Cart } from './cart';

export interface Order {
	products: Cart;
	transaction_id: {};
	amount: number;
	address: string;
	status: string;
	update: any;
	user: any;
}
