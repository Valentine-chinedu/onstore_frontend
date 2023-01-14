import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import {
	useAddToCartMutation,
	useGetCartQuery,
	useGetCategoriesQuery,
	useGetProductsQuery,
} from '../../../services/clientApi';

const TopSeller = () => {
	const { data: products, isLoading } = useGetProductsQuery();
	const { data: category } = useGetCategoriesQuery();
	const [addToCart] = useAddToCartMutation();
	const { data: cart } = useGetCartQuery();

	const items = products?.filter(
		(x) => x.categories?.[0]?.id === category?.[5]?.id
	);
	console.log(items);
	console.log(products);

	if (isLoading) {
		return (
			<div className='flex w-full flex-col items-center justify-center'>
				<FaSpinner size={20} className='mb-4 animate-spin' />
			</div>
		);
	}

	return (
		<div className='w-full py-8 md:flex md:justify-center'>
			<div className='flex flex-col items-center justify-center space-y-4 md:w-8/12'>
				<div className=' font-merriweather text-gray-900'>
					<h1>Top Selling Items</h1>
				</div>
				<div className='grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-4 md:gap-4 '>
					{items?.map((item) => (
						<div key={item?.id} className='space-y-1'>
							<div className='h-56 w-44 space-y-4 bg-[#EAE4E4]'>
								<div className='pt-2 pl-2'>
									<button
										onClick={() => {
											addToCart({
												cart_id: cart!.id,
												product_id: item?.id,
												quantity: 1,
											});
										}}
									>
										<svg
											className='h-4 hover:fill-[#FFA500]'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											// width='24'
											// height='24'
										>
											<title>add</title>
											<path fill='none' d='M0 0h24v24H0z' />
											<path d='M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' />
										</svg>
									</button>
								</div>
								<div className='h-ful flex w-full items-center justify-center'>
									<Link to={`/home/product/${item.id}`}>
										<img
											className='h-40 object-contain'
											src={item?.media.source}
											alt='Watch'
											loading='lazy'
										/>
									</Link>
								</div>
							</div>
							<div className='space-y-1'>
								<div className='flex'>
									<svg
										className='h-4 w-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										width='24'
										height='24'
									>
										<path fill='none' d='M0 0h24v24H0z' />
										<path
											d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
											fill='#f1c40e'
										/>
									</svg>
									<svg
										className='h-4 w-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										width='24'
										height='24'
									>
										<path fill='none' d='M0 0h24v24H0z' />
										<path
											d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
											fill='rgba(241,196,14,1)'
										/>
									</svg>
									<svg
										className='h-4 w-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										width='24'
										height='24'
									>
										<path fill='none' d='M0 0h24v24H0z' />
										<path
											d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
											fill='rgba(241,196,14,1)'
										/>
									</svg>
									<svg
										className='h-4 w-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										width='24'
										height='24'
									>
										<path fill='none' d='M0 0h24v24H0z' />
										<path
											d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
											fill='rgba(241,196,14,1)'
										/>
									</svg>
									<svg
										className='h-4 w-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										width='24'
										height='24'
									>
										<path fill='none' d='M0 0h24v24H0z' />
										<path
											d='M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z'
											fill='rgba(241,196,14,1)'
										/>
									</svg>
								</div>
								<h1 className='text-xs '>{item?.name}</h1>
								<h2 className='text-xs font-medium'>
									{item?.price.formatted_with_symbol}
								</h2>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TopSeller;
