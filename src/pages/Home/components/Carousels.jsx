import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Carousels = () => {
	return (
		<div className='relative z-0 h-52 lg:h-96'>
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
				<div className='crl-div'>
					{/* carousel display for large screens. hidden in sm and medium screens */}
					<div className='crl-div2'>
						<h2 className='crl-h'>Welcome to onStore</h2>

						<Link to='/home/products' className='crl-link'>
							SHOP NOW
						</Link>
					</div>
					<img
						className='crl-img'
						src='/images/Shirts/Shirts_Clothing_Blue.jpg'
						alt=''
					/>
				</div>
				<div className='crl-div'>
					<div className='crl-div2'>
						<h2 className='crl-h'>100% Quality Wears</h2>

						<Link to='/home/products' className='crl-link'>
							SHOP NOW
						</Link>
					</div>
					<img
						className='crl-img'
						src='/images/shoes/Classic_Sneakers_Grey.jpg'
						alt=''
					/>
				</div>
				<div className='crl-div'>
					<div className='crl-div2'>
						<h2 className='crl-h'>Beauty Redefined</h2>

						<Link to='/home/products' className='crl-link'>
							SHOP NOW
						</Link>
					</div>
					<img
						className='crl-img'
						src='/images/Watches/Men_Military_Quartz_Brown.jpg'
						alt=''
					/>
				</div>
				<div className='crl-div'>
					<div className='crl-div2'>
						<h2 className='crl-h'>Elegant and Stylish</h2>

						<Link to='/home/products' className='crl-link'>
							SHOP NOW
						</Link>
					</div>
					<img
						className='crl-img'
						src='/images/Pants/Suit_Material_Trousers.jpg'
						alt=''
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default Carousels;
