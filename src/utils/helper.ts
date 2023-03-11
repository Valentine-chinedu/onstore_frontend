const CURRENCRY_FORMATTER = new Intl.NumberFormat(undefined, {
	currency: 'USD',
	style: 'currency',
});

export const formatCurrencry = (number: any) => {
	return CURRENCRY_FORMATTER.format(number);
};

export const getDate = (date: Date) => {
	return new Date(date).toLocaleDateString('en');
};

export const baseUrl = 'https://nice-ruby-ostrich.cyclic.app';
// export const baseUrl = 'http://localhost:4000';
