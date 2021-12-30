import { Cart } from './CartTypes';
import { Products } from './Products';

export interface ProductsContextState {
	handleAddToCart: (productId: string, quantity: number) => void;
	handleUpdateCartQty: (productId: string, quantity: number) => void;
	handleRemoveFromCart: (productId: string) => void;
	handleEmptyCart: () => void;
	products: Products[];
	cart: Cart;
	loading: boolean;
}
