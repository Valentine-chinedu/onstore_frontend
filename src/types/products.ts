export interface Products {
	id: string;
	media: {
		source: string;
	};
	name: string;
	price: {
		formatted_with_symbol: string;
	};
	quantity: number;
	categories: [
		{
			id: string;
			name: string;
			slug: string;
		},
		{
			id: string;
			name: string;
			slug: string;
		}
	];
}
