import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiUsers } from 'react-icons/hi';
import { AiFillDashboard } from 'react-icons/ai';
import { userLogout } from '../../redux/users/login-slice';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const Sidebar = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { userInfo } = useAppSelector((state) => state.login);

	const onLogout = () => {
		dispatch(userLogout());
		navigate('/login');
	};

	return (
		<nav
			className='border-b px-0  py-3 lg:border-b-0 '
			id='navbarVertical'
			style={{ backgroundColor: '#1b1b1b' }}
		>
			<div className='container'>
				<button>toggle-icon</button>
				<Link className='' to='/'>
					onstore
				</Link>

				<div className=''>
					<ul className=''>
						<li className=' '>
							<Link className='' to='/dashboard'>
								<AiFillDashboard className='' size={'1.5rem'} /> Accueil
							</Link>
						</li>
						<li className=''>
							<Link className=' p-5' to='/dashboard/product-list'>
								<HiUsers className='' size={'1.5rem'} /> Products
							</Link>
						</li>

						<li className=''>
							<Link className='p-5' to='/dashboard/user-list'>
								<HiUsers className='' size={'1.5rem'} /> Users
							</Link>
						</li>
						<li className=''>
							<Link className='p-5' to='/dashboard/orders-list'>
								<HiUsers className='' size={'1.5rem'} /> Orders
							</Link>
						</li>
					</ul>

					<hr className='my-5 opacity-20' />

					<div className='' />
					<ul className=''>
						<li className=''>
							<NavLink to={`/profile/${userInfo?._id}`}>Profile</NavLink>
						</li>
						<li className=''>
							<button onClick={onLogout}>Logout</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Sidebar;
