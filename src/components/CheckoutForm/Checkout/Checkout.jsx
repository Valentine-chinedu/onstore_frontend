import React from "react";
import { MultiStepForm, Step } from "react-multi-form";
import AddressForm from "../AddressForm";
import Payment from "../Payment";
import ConfirmationPage from "../ConfirmationPage";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Checkout = () => {
	const [active, setActive] = React.useState(1);

	return (
		<div className="h-full py-8 lg:container lg:mx-auto">
			{active !== 3 && (
				<div className="flex items-center ml-4 mb-4">
					<BsArrowLeft />
					<NavLink
						to="/home/products"
						className="text-xs font-semibold tracking-wide ml-2 border-b border-gray-500"
					>
						Back to home
					</NavLink>
				</div>
			)}
			<div className="mx-12">
				<MultiStepForm activeStep={active}>
					<Step className="text-sm" label="Shipping Details">
						<AddressForm />
					</Step>
					<Step label="Payment">
						<Payment />
					</Step>
					<Step label="Confirmation">
						<ConfirmationPage />
					</Step>
				</MultiStepForm>
			</div>

			<div className="flex justify-between lg:mx-60 mx-12 mt-4">
				<button
					className={
						active !== 1 && active !== 3
							? "bg-orange-400 hover:bg-yellow-500 pt-1 px-2 border border-yellow-800 rounded-sm"
							: "invisible"
					}
					onClick={() => setActive(active - 1)}
				>
					Previous
				</button>

				<button
					className={
						active !== 3
							? "bg-orange-400 hover:bg-yellow-500 pt-1 px-2 border border-yellow-800 rounded-sm lg:w-20 lg:h-10"
							: "invisible"
					}
					onClick={() => setActive(active + 1)}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Checkout;
