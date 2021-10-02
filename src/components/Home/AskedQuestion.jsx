import React from "react";

function AskedQuestion() {
	return (
		<div className="ml-4 lg:mr-12 lg:w-96">
			<div className="pb-12">
				<div className="flex lg:text-xl lg:pr-4 italic mb-4">
					<p className="text-red-500 mr-1">Payment</p>
					<p className="">& Shipping</p>
				</div>
				<div className="lg:mb-8">
					<h2 className="font-bold lg:text-3xl text-xl mb-1 lg:w-72">
						Frequently Asked
					</h2>
					<h2 className="font-bold lg:text-3xl text-xl mb-5">Questions</h2>
				</div>
				<div className="inline-flex text-xs lg:text-sm font-medium tracking-widest border-b-2 border-solid border-black pb-0.5">
					ALL QUESTIONS
				</div>
			</div>
		</div>
	);
}

export default AskedQuestion;
