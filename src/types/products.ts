import { ReviewTypes } from './reviews';

export interface Product {
	_id: string;
	name: string;
	price: number;
	image: string;
	category: string;
	description: string;
	qty: number;
	createdAt: Date;
	reviews: ReviewTypes[];
}
