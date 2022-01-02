type Items = {
	id: string;
	name: string;

	media: {
		source: string;
	};
	price: {
		formatted_with_symbol: string;
	};
	quantity: number;
};

export interface Cart {
	line_items: Items[];
	subtotal: { formatted_with_symbol: string };
	total_items: number;
	total_unique_items: number;
}
