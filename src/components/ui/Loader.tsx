import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
	return (
		<div className='flex h-screen flex-col items-center justify-center'>
			<FaSpinner size={20} className='mb-4 animate-spin' />
			<p>Loading....</p>
		</div>
	);
};

export default Loader;
