import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

interface IProps {
	title: string;
	content: string;
}

const DropDown = ({ title, content }: IProps) => {
	return (
		<div className='transition-height mb-4 h-12 overflow-hidden pt-2.5 duration-500 ease-in-out hover:h-36 md:h-8 md:pt-0 lg:h-12'>
			<div className='mb-4 flex items-center pt-2 lg:mt-3'>
				<div className='mr-3'>
					<FiMessageCircle size={24} className='text-orange-700' />
				</div>
				<h2 className='flex pr-4 font-semibold text-gray-100 lg:pr-0'>
					{title}
				</h2>
			</div>
			<p className='ml-10 pb-5 text-sm text-gray-200'>{content}</p>
		</div>
	);
};

export default DropDown;
