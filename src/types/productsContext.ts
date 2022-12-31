import { Cart } from './cart';
import { Categories } from './category';
import { Products } from './products';

export interface ProductsContextState {
	handleAddToCart: (productId: string, quantity: number) => void;
	handleUpdateCartQty: (productId: string, quantity: number) => void;
	handleRemoveFromCart: (productId: string) => void;
	handleEmptyCart: () => void;
	products: Products[];
	cart: Cart;
	category: Categories[];
	loadingProducts: boolean;
	loadingCategory: boolean;
	loadingCart: boolean;
}
