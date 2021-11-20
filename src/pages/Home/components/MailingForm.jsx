import React from "react";
import { useForm } from "react-hook-form";

function MailingForm() {
	const { register, handleSubmit, errors, reset } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	return (
		<div className="">
			<form
				className="lg:flex lg:items-center"
				onSubmit={handleSubmit(onSubmit)}
			>
				{errors.email && (
					<p className="ml-4 pb-2 text-red-600">{errors.email.message}</p>
				)}
				<div className=" flex items-center mt-1 bg-gray-50 w-72 lg:w-80 rounded-3xl border pl-6 h-12 mb-2 lg:mr-4">
					<h2 className="mr-3 text-gray-500 text-2xl">@</h2>
					<input
						className="bg-gray-50 placeholder-gray-400 focus:outline-none w-48 lg:w-56"
						type="text"
						name="email"
						placeholder="Email Address"
						ref={register({
							required: "Email is required.",
							pattern: {
								value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
								message: "Email is not valid.",
							},
						})}
					/>
				</div>

				<div className="mb-4 pt-2">
					<button
						className=" flex justify-center rounded-3xl h-12 focus:outline-none bg-orange-700 pt-3.5 hover:bg-orange-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 w-72 lg:w-40 text-gray-50 text-sm font-bold tracking-widest"
						type="submit"
					>
						SUBSCRIBE
					</button>
				</div>
			</form>
		</div>
	);
}

export default MailingForm;
