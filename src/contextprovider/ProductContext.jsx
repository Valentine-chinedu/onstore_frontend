import React, { useState, useEffect } from "react";
import { commerce } from "../lib/commerce";

export const ProductContext = React.createContext();

const ProductProvider = (props) => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});
	const [loading, setLoading] = useState(true);

	const fetchProducts = async () => {
		try {
			const { data } = await commerce.products.list();
			setLoading(false);
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchCart = async () => {
		try {
			setCart(await commerce.cart.retrieve());
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleAddToCart = async (productId, quantity) => {
		try {
			const { cart } = await commerce.cart.add(productId, quantity);
			setCart(cart);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdateCartQty = async (productId, quantity) => {
		try {
			const { cart } = await commerce.cart.update(productId, { quantity });
			setCart(cart);
		} catch (error) {
			console.log(error);
		}
	};

	const handleRemoveFromCart = async (productId) => {
		try {
			const { cart } = await commerce.cart.remove(productId);

			setCart(cart);
		} catch (error) {
			console.log(error);
		}
	};

	const handleEmptyCart = async () => {
		try {
			const { cart } = await commerce.cart.empty();

			setCart(cart);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
	}, []);
	console.log(products);
	console.log(cart);
	return (
		<ProductContext.Provider
			value={{
				products,
				loading,
				cart,
				handleAddToCart,
				handleUpdateCartQty,
				handleRemoveFromCart,
				handleEmptyCart,
			}}
		>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;
