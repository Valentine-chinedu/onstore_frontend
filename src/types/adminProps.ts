import { Categories } from './category';
import { Products } from './products';

export interface AdminProp {
	userId: Number;
	productId: number;
	token: String;
	orderId: Number;
	status: Number;
	category: Categories;
	product: Products;
}
