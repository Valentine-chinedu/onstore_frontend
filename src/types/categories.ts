export interface Categories {
	id: string;
	media: {
		source: string;
	};
	name: string;
	slug: string;
	price: {
		formatted_with_symbol: string;
	};
	quantity: number;
	description: string;
}
