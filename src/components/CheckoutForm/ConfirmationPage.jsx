import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../../contextprovider/ProductContext";

const ConfirmationPage = () => {
	const { handleEmptyCart } = useContext(ProductContext);

	const history = useHistory();
	const handleClick = () => {
		history.push("/home");
		handleEmptyCart();
	};
	return (
		<div className="flex flex-col justify-center items-center pb-4">
			<h2 className="text-2xl mb-2">Thank you for your order</h2>
			<h4 className="mb-4">You will receive an email confirmation shortly.</h4>
			<div className="w-full flex justify-center">
				<button
					className="border-b focus:outline-none hover:border-black"
					onClick={handleClick}
				>
					Back to home
				</button>
			</div>
		</div>
	);
};

export default ConfirmationPage;
