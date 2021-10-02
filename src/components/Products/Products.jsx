/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import ProductDisplay from "./ProductDisplay";
import { FaSpinner } from "react-icons/fa";
import { ProductContext } from "../../contextprovider/ProductContext";

const Products = () => {
	const { products, loading } = useContext(ProductContext);
	return (
		<div>
			{loading ? (
				<div className="flex flex-col justify-center items-center h-screen">
					<FaSpinner icon="spinner" size={20} className="animate-spin mb-4" />
					<p>Loading....</p>
				</div>
			) : (
				<div className="container lg:mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-4 h-full py-8">
					{products.map((product) => (
						<div className="" key={product.id}>
							<ProductDisplay product={product} />
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Products;
