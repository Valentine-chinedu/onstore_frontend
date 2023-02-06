import { Product } from './products';

export interface OrderTypes {
	_id: string;
	user: string;
	shippingAddress: {
		address: string;
		city: string;
		postalCode: string;
		country: string;
	};
	cartItems: Product[];
	totalPrice: number;
	isPaid: boolean;
	createdAt: Date;
}
