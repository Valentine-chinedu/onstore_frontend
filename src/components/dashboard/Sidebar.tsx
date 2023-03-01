import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { userLogout } from '../../redux/users/login-slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { HiOutlineUserCircle } from 'react-icons/hi';

const Sidebar = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { userInfo } = useAppSelector((state) => state.login);

	const location = useLocation();

	const { pathname } = location;

	const onLogout = () => {
		dispatch(userLogout());
		navigate('/login');
	};

	return (
		<nav className=' w-60 border-r border-gray-400'>
			<div className='flex h-full flex-col pl-4'>
				<div className='flex h-full w-full flex-col justify-around'>
					<div className='flex w-full flex-col items-center space-y-8  '>
						<Link
							className={` w-full pl-1 text-lg font-semibold hover:bg-gray-300 ${
								pathname === '/dashboard' && 'bg-gray-300'
							}`}
							to='/dashboard'
						>
							Dashboard
						</Link>

						<Link
							className={` w-full pl-1 text-lg font-semibold hover:bg-gray-300 ${
								pathname === '/dashboard/product-list' && 'bg-gray-300'
							}`}
							to='/dashboard/product-list'
						>
							Products
						</Link>

						<Link
							className={` w-full pl-1 text-lg font-semibold hover:bg-gray-300 ${
								pathname === '/dashboard/user-list' && 'bg-gray-300'
							}`}
							to='/dashboard/user-list'
						>
							Users
						</Link>

						<Link
							className={` w-full pl-1 text-lg font-semibold hover:bg-gray-300 ${
								pathname === '/dashboard/orders-list' && 'bg-gray-300'
							}`}
							to='/dashboard/orders-list'
						>
							Orders
						</Link>
					</div>

					<div className='space-y-4'>
						<div className='flex items-center space-x-2'>
							<HiOutlineUserCircle size={24} />

							<Link
								className='text-lg font-semibold
									'
								to={`/profile/${userInfo?._id}`}
							>
								{userInfo?.name}
							</Link>
						</div>

						<button className='font-semibold' onClick={onLogout}>
							Logout
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Sidebar;
