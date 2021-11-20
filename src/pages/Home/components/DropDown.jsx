import React from "react";
import { FiMessageCircle } from "react-icons/fi";
const DropDown = ({ accordion }) => {
	// const [isOpen, setIsOpen] = useState(false);

	// const toggleTrueFalse = () => setIsOpen(!isOpen);

	return (
		<div className="transition-height duration-700 ease-in-out h-8 lg:h-12 mb-4 overflow-hidden hover:h-36">
			<div className="flex items-center mb-5 lg:mt-3">
				<div className="mr-3">
					<FiMessageCircle size={24} className="text-orange-700" />
				</div>
				<h2 className="text-black font-semibold flex pr-4 lg:pr-0">
					{accordion.title}
				</h2>
			</div>
			<p className="ml-10 text-gray-500 text-sm pb-5">{accordion.content}</p>
		</div>
	);
};

export default DropDown;
