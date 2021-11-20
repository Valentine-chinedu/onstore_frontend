import React from "react";

const AddressForm = () => {
	return (
		<div className="lg:mx-48">
			<form>
				<div className="flex flex-col">
					<label className="font-semibold">First Name</label>
					<input
						className="focus:outline-none focus:ring-1 focus: border-2 px-1 my-2 h-10 lg:h-12 lg:text-lg"
						type="text"
						name="name"
					/>
				</div>
				<div className="flex flex-col">
					<label className="font-semibold">Last Name</label>
					<input
						className="focus:outline-none focus:ring-1 focus: border-2 px-1 my-2 h-10 lg:h-12 lg:text-lg"
						type="text"
						name="name"
					/>
				</div>
				<div className="flex flex-col">
					<label className="font-semibold">Address</label>
					<input
						className="focus:outline-none focus:ring-1 focus: border-2 px-1 my-2 h-10 lg:h-12 lg:text-lg"
						type="text"
						name="address"
					/>
				</div>
				<div className="flex flex-col">
					<label className="font-semibold">Email</label>
					<input
						className="focus:outline-none focus:ring-1 focus: border-2 px-1 my-2 h-10 lg:h-12 lg:text-lg"
						type="text"
						name="email"
					/>
				</div>
				<div className="flex flex-col">
					<label className="font-semibold">City</label>
					<input
						className="focus:outline-none focus:ring-1 focus: border-2 px-1 my-2 h-10 lg:h-12 lg:text-lg"
						type="text"
						name="city"
					/>
				</div>
				<div className="flex flex-col">
					<label className="font-semibold">Zip Code</label>
					<input
						className="focus:outline-none focus:ring-1 focus: border-2 px-1 my-2 h-10 lg:h-12 lg:text-lg"
						type="text"
						name="email"
					/>
				</div>
			</form>
		</div>
	);
};

export default AddressForm;
