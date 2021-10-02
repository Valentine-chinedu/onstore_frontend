import React, { useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import { ImCreditCard } from "react-icons/im";
import { ProductContext } from "../../contextprovider/ProductContext";

// import PaymentDetails from "./PaymentDetails";

const Payment = () => {
	const { cart } = useContext(ProductContext);

	return (
		<div className="lg:mx-48">
			{!cart.line_items ? (
				<div className="flex flex-col justify-center items-center h-screen">
					<FaSpinner icon="spinner" size={20} className="animate-spin mb-2" />
					<h2>Loading...</h2>
				</div>
			) : (
				<div className="h-full">
					<div className="mb-4 text-sm lg:text-lg">
						<h3>Order summary</h3>
					</div>
					{cart.line_items.map((item) => (
						<div className="" key={item.id}>
							<div className="flex justify-between text-xs lg:text-sm">
								<h4>{item.name}</h4>
								<h4>{item.price.formatted_with_symbol}</h4>
							</div>
							<div className="text-xs mb-4 text-gray-500">
								<h4>Quantity: {item.quantity}</h4>
							</div>
						</div>
					))}
					<div className="flex justify-between text-xs lg:text-sm mb-2 pb-2 border-b">
						<h4>Total</h4>
						<h4>{cart.subtotal.formatted_with_symbol}</h4>
					</div>
					<div>
						<div className="text-sm mb-4">
							<h3>Payment method</h3>
						</div>

						<div className="flex items-center text-xs">
							<ImCreditCard className="text-gray-500 mr-2" />
							<input
								className="focus:outline-none"
								type="text"
								placeholder="Card number"
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Payment;
