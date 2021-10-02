import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { FiThumbsUp, FiBox, FiArrowRightCircle } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { BsArrowCounterclockwise } from "react-icons/bs";
import Accordion from "./Accordion";
import AskedQuestion from "./AskedQuestion";
import MailingForm from "./MailingForm";

const Home = () => {
	return (
		<div className="bg-gray-50 relative">
			<div className="relative z-0 h-52 lg:h-96">
				<Carousel
					showArrows={false}
					showStatus={false}
					showThumbs={false}
					stopOnHover={false}
					interval={10000}
					transitionTime={800}
					autoPlay={true}
					infiniteLoop={true}
					dynamicHeight={true}
				>
					<div className="lg:flex lg:items-center lg:justify-center">
						{/* carousel display for large screens. hidden in sm and medium screens */}
						<div className="hidden lg:block flex-col w-full items-center top-16 z-40">
							<h2 className="italic mb-4 font-semibold text-xl lg:text-4xl text-orange-500 lg:mb-8">
								Welcome to onStore
							</h2>

							<Link
								to="/home/products"
								className="border-4 text-white text-lg lg:text-2xl bg-orange-500 border-orange-700 py-1 px-4 rounded-3xl hover:bg-orange-700"
							>
								SHOP NOW
							</Link>
						</div>
						<img
							className="h-52 lg:h-96 object-cover lg:object-none"
							src="/images/Shirts/Shirts_Clothing_Blue.jpg"
							alt=""
						/>
					</div>
					<div className="lg:flex lg:items-center lg:justify-center">
						<div className="hidden lg:block flex-col w-full items-center top-16 z-40">
							<h2 className="italic mb-4 font-semibold text-xl lg:text-4xl text-orange-500 lg:mb-8">
								100% Quality Wears
							</h2>

							<Link
								to="/home/products"
								className="border-4 text-white text-lg lg:text-2xl bg-orange-500 border-orange-700 py-1 px-4 rounded-3xl hover:bg-orange-700"
							>
								SHOP NOW
							</Link>
						</div>
						<img
							className="h-52 lg:h-96 object-cover lg:object-none"
							src="/images/shoes/Classic_Sneakers_Grey.jpg"
							alt=""
						/>
					</div>
					<div className="lg:flex lg:items-center lg:justify-center">
						<div className="hidden lg:block flex-col w-full items-center top-16 z-40">
							<h2 className="italic mb-4 font-semibold text-xl lg:text-4xl text-orange-500 lg:mb-8">
								Beauty Redefined
							</h2>

							<Link
								to="/home/products"
								className="border-4 text-white text-lg lg:text-2xl bg-orange-500 border-orange-700 py-1 px-4 rounded-3xl hover:bg-orange-700"
							>
								SHOP NOW
							</Link>
						</div>
						<img
							className="h-52 lg:h-96 object-cover lg:object-none"
							src="/images/Watches/Men_Military_Quartz_Brown.jpg"
							alt=""
						/>
					</div>
					<div className="lg:flex lg:items-center lg:justify-center">
						<div className="hidden lg:block flex-col w-full items-center top-16 z-40">
							<h2 className="italic mb-4 font-semibold text-xl lg:text-4xl text-orange-500 lg:mb-8">
								Elegant and Stylish
							</h2>

							<Link
								to="/home/products"
								className="border-4 text-white text-lg lg:text-2xl bg-orange-500 border-orange-700 py-1 px-4 rounded-3xl hover:bg-orange-700"
							>
								SHOP NOW
							</Link>
						</div>
						<img
							className="h-52 lg:h-96 object-cover lg:object-none"
							src="/images/Pants/Suit_Material_Trousers.jpg"
							alt=""
						/>
					</div>
				</Carousel>
			</div>

			{/* carousel display for sm and medium screens. hidden in large screens */}
			<div className="absolute lg:hidden flex flex-col w-full items-center top-16 z-40">
				<h2 className="italic mb-4 font-semibold text-xl lg:text-4xl text-orange-500 lg:mb-8">
					Welcome to onStore
				</h2>

				<Link
					to="/home/products"
					className="border-4 text-white text-lg lg:text-2xl bg-orange-500 border-orange-700 py-1 px-4 rounded-3xl hover:bg-orange-700"
				>
					SHOP NOW
				</Link>
			</div>
			<div className=" md:container md:mx-auto py-12 pl-4 border-b lg:flex lg:items-center">
				<div className="flex mb-12 lg:mb-0">
					<div className="mr-4">
						<div>
							<FiThumbsUp size={25} className="text-orange-700" />
						</div>
					</div>
					<div>
						<h2 className="mb-4 text-sm font-semibold tracking-wide">
							100% QUALITY
						</h2>
						<p className="text-xs text-gray-500">
							Aenean magna est, pretium id libero quis, eleifend cursus diam.
						</p>
					</div>
				</div>
				<div className="flex mb-12 lg:mb-0">
					<div className="mr-4">
						<div>
							<FiBox size={25} className="text-orange-700" />
						</div>
					</div>
					<div>
						<h2 className="mb-4 text-sm tracking-wide font-semibold">
							FREE SHIPPING
						</h2>
						<p className="text-xs text-gray-500">
							Aenean magna est, pretium id libero quis, eleifend cursus diam.
						</p>
					</div>
				</div>
				<div className="flex mb-12 lg:mb-0">
					<div className="mr-4">
						<div>
							<IoBagOutline size={25} className="text-orange-700" />
						</div>
					</div>
					<div>
						<h2 className="mb-4 text-sm tracking-wide font-semibold">
							SECURE PAYMENT
						</h2>
						<p className="text-xs text-gray-500">
							Aenean magna est, pretium id libero quis, eleifend cursus diam.
						</p>
					</div>
				</div>
				<div className="flex ">
					<div className="mr-4">
						<div>
							<BsArrowCounterclockwise size={25} className="text-orange-700" />
						</div>
					</div>
					<div>
						<h2 className="mb-4 text-sm tracking-wide font-semibold">
							FREE RETURN
						</h2>
						<p className="text-xs text-gray-500">
							Aenean magna est, pretium id libero quis, eleifend cursus diam.
						</p>
					</div>
				</div>
			</div>
			<div className="md:container md:mx-auto flex justify-center items-center mt-8 mb-4">
				<div className="  p-3 mr-2 w-12 bg-gray-100 rounded-full">
					<FiArrowRightCircle size={24} />
				</div>
				<div className="">
					<h3 className="font-bold text-sm tracking-wider">TOP SELLING</h3>
				</div>
			</div>
			<div className="md:container md:mx-auto flex lg:justify-center lg:items-center h-96 overflow-x-scroll pl-4 lg:overflow-hidden mb-4 lg:mb-32">
				<div className=" h-full flex">
					<div className="h-full w-64 lg:w-72 mr-4 lg:mr-8">
						<div className="relative">
							<img
								className="h-80 lg:h-96"
								s
								src="/images/Pants/Black_Cargo_Pant.jpg"
								alt="pants"
							/>
							<Link to="/home/products">
								<h3 className="absolute tracking-wider text-xs lg:text-sm font-bold top-36 lg:top-44 left-16 lg:left-20 bg-white px-8 py-2 lg:py-4 rounded-3xl hover:bg-gray-200">
									PANTS
								</h3>
							</Link>
						</div>
					</div>
					<div className="h-full w-64 lg:w-72 mr-4 lg:mr-8">
						<div className="relative">
							<img
								className="h-80 lg:h-96"
								src="/images/Shirts/Shirts_Clothing_Blue.jpg"
								alt="shirts"
							/>
							<Link to="/home/products">
								<h3 className="absolute tracking-wider text-xs lg:text-sm font-bold top-36 lg:top-44 left-16 lg:left-20 bg-white px-8 py-2 lg:py-4 rounded-3xl hover:bg-gray-200">
									SHIRTS
								</h3>
							</Link>
						</div>
					</div>
					<div className="h-full w-64 lg:w-72 mr-4 lg:mr-8">
						<div className="relative">
							<img
								className="h-80 lg:h-96"
								src="/images/shoes/Men_Sneakers_WhiteBlack.jpg"
								alt="shoes"
							/>
							<Link to="/home/products">
								<h3 className="absolute tracking-wider text-xs lg:text-sm font-bold top-36 lg:top-44 left-16 lg:left-20 bg-white px-8 py-2 lg:py-4 rounded-3xl hover:bg-gray-200">
									SHOES
								</h3>
							</Link>
						</div>
					</div>
					<div className="h-full w-64 lg:w-72">
						<div className="relative">
							<img
								className="h-80 lg:h-96"
								src="/images/Watches/Business_Quartz_Watch.jpg"
								alt="wristwatch"
							/>
							<Link to="/home/products">
								<h3 className="absolute tracking-wider text-xs lg:text-sm font-bold top-36 lg:top-44 left-16 bg-white px-8 py-2 lg:py-4 rounded-3xl hover:bg-gray-200">
									WRISTWATCH
								</h3>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="md:container md:mx-auto pb-12 lg:flex lg:items-center lg:justify-center">
				<div className="flex flex-col justify-center items-center border mx-4 py-16 lg:w-3/5">
					<div className="flex font-normal tracking-wider italic lg:mb-4 lg:text-2xl">
						<p className="mr-1 lg:mr-2">Get your</p>
						<p className="text-red-500">10% off!</p>
					</div>
					<div className="lg:flex-row items-center flex flex-col font-bold text-2xl tracking-wide lg:text-4xl lg:mb-8">
						<h2 className="lg:mr-3">Join Our Mailing</h2>
						<h2>List</h2>
					</div>
					<MailingForm />

					<div className="flex items-center">
						<p className="mr-1 text-xs text-gray-500">
							We never share your info. View our
						</p>
						<p className="text-xs text-gray-900">Privacy Policy</p>
					</div>
				</div>
			</div>
			<div className="md:container md:mx-auto lg:flex lg:px-40 lg:py-16">
				<AskedQuestion />
				<Accordion />
			</div>
		</div>
	);
};

export default Home;
