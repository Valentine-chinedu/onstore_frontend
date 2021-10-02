import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoSearch, GoThreeBars, GoX } from "react-icons/go";
import { Link, useHistory } from "react-router-dom";
import { ProductContext } from "../../contextprovider/ProductContext";

const Navbar = () => {
	const { cart } = useContext(ProductContext);
	const [isOpen, setOpen] = useState(false);

	let history = useHistory();

	function handleClickToProducts() {
		history.push("/home/products");
		setOpen(false);
	}

	function handleClickToHome() {
		history.push("/home");
		setOpen(false);
	}

	return (
		<nav className=" pb-2 px-2 lg:px-8 md:px-4 sticky top-0 z-50 bg-gray-50 overflow-hidden">
			<div className=" flex items-center justify-between h-16 lg:h-20 z-50">
				<div className="flex">
					<div className="relative flex items-center lg:hidden">
						<button
							onClick={() => {
								setOpen(true);
							}}
							className={isOpen ? "invisible" : "focus:outline-none"}
						>
							<GoThreeBars size={25} />
						</button>
						<button
							onClick={() => {
								setOpen(false);
							}}
							className={
								!isOpen ? "absolute invisible" : "absolute focus:outline-none"
							}
						>
							<GoX size={25} />
						</button>
					</div>
					<div className="lg:mr-10 ">
						<Link to="/home">
							<img
								className="h-16 lg:h-24 ml-2"
								src="./onStore_logo.png"
								alt="logo"
							/>
						</Link>
					</div>

					{/* large screen navbar navigation links */}
					<div className="hidden lg:pt-3 lg:flex mr-8">
						<button
							onClick={handleClickToHome}
							className="mb-2 lg:mr-4 text-sm font-semibold p-2 focus:outline-none"
						>
							Home
						</button>
						<button
							onClick={handleClickToProducts}
							className="mb-2 lg:mr-4 text-sm font-semibold p-2 focus:outline-none"
						>
							Products
						</button>
						<button className="mb-2 lg:mr-4 text-sm font-semibold p-2 focus:outline-none">
							About
						</button>
						<button className="mb-2 lg:mr-4 text-sm font-semibold p-2 focus:outline-none">
							Newsletter
						</button>
					</div>
				</div>

				<form className="flex border-gray-400 border h-9 lg:h-11  rounded-full w-52 lg:w-72">
					<div className="flex justify-between items-center">
						<button typ="submit" className="focus:outline-none mx-2">
							<GoSearch size={20} className="text-gray-500" />
						</button>
						<input
							className="focus:outline-none text-sm appearance-none bg-gray-50 w-40"
							type="text"
							name="search"
							placeholder="Search Products"
						/>
					</div>
				</form>
				<div className="flex relative justify-around items-center h-10">
					<Link to="/cart">
						<AiOutlineShoppingCart size={28} />
					</Link>
					{cart.total_unique_items > 0 ? (
						<div className="absolute top-0 right-0 text-xs font-bold text-white tracking-tighter rounded-full bg-red-700 px-1.5">
							{cart.total_unique_items}
						</div>
					) : (
						""
					)}
				</div>
			</div>

			{/* sm and md screen navbar navigation links */}
			<div
				className={`flex flex-col justify-center ${
					isOpen
						? "transition-height duration-500 ease-in-out h-56"
						: "transition-height duration-500 ease-in-out h-0 overflow-hidden"
				}`}
			>
				<button
					onClick={handleClickToHome}
					className="mb-2 flex text-sm font-semibold p-2 hover:bg-gray-100"
				>
					Home
				</button>
				<button
					onClick={handleClickToProducts}
					className="mb-2 text-sm font-semibold p-2 hover:bg-gray-100 flex"
				>
					Products
				</button>
				<button className="mb-2 flex text-sm font-semibold p-2 hover:bg-gray-100">
					About
				</button>
				<button className="mb-2 flex text-sm font-semibold p-2 hover:bg-gray-100">
					Newsletter
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
