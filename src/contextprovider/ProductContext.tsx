// import React, { useState, useEffect, createContext, FC } from 'react';
// import { commerce } from '../lib/commerce';
// import { Carts, Categories, ProductsContextState } from '../types';

// export const ProductContext = createContext<Partial<ProductsContextState>>({});

// const ProductProvider: FC = (props) => {
// 	const [products, setProducts] = useState([]);
// 	const [cart, setCart] = useState<Carts>();
// 	const [category, setCategory] = useState<Categories[]>();
// 	const [loadingProducts, setLoadingProducts] = useState(true);
// 	const [loadingCategory, setLoadingCategory] = useState(true);
// 	const [loadingCart, setLoadingCart] = useState(true);

// 	const fetchProducts = async () => {
// 		try {
// 			const { data } = await commerce.products.list();
// 			setProducts(data);
// 			setLoadingProducts(false);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	const fetchCategory = async () => {
// 		try {
// 			const { data } = await commerce.categories.list();
// 			setLoadingCategory(false);
// 			setCategory(data);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	const fetchCart = async () => {
// 		try {
// 			setCart(await commerce.cart.retrieve());
// 			setLoadingCart(false);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	const handleAddToCart = async (productId: string, quantity: number) => {
// 		try {
// 			const { cart } = await commerce.cart.add(productId, quantity);
// 			setCart(cart);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	const handleUpdateCartQty = async (productId: string, quantity: number) => {
// 		try {
// 			const { cart } = await commerce.cart.update(productId, { quantity });
// 			setCart(cart);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	const handleRemoveFromCart = async (productId: string) => {
// 		try {
// 			const { cart } = await commerce.cart.remove(productId);

// 			setCart(cart);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	const handleEmptyCart = async () => {
// 		try {
// 			const { cart } = await commerce.cart.empty();

// 			setCart(cart);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	useEffect(() => {
// 		fetchProducts();
// 		fetchCart();
// 		fetchCategory();
// 	}, []);

// 	console.log(category);
// 	console.log(products);

// 	return (
// 		<ProductContext.Provider
// 			value={{
// 				products,
// 				loadingProducts,
// 				loadingCategory,
// 				loadingCart,
// 				category,
// 				cart,
// 				handleAddToCart,
// 				handleUpdateCartQty,
// 				handleRemoveFromCart,
// 				handleEmptyCart,
// 			}}
// 		>
// 			{props.children}
// 		</ProductContext.Provider>
// 	);
// };

// export default ProductProvider
function product() {}
export default product;
