import { Categories } from './category';

export interface Products {
	id: string;
	photo: string;
	name: string;
	price: number;
	quantity: number;
	sold: number;
	category: Categories;
	shipping: boolean;
}
