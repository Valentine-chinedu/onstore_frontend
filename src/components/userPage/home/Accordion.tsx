import React from 'react';
import DropDown from './DropDown';

const Accordion = () => {
	const accordions = [
		{
			_id: 1,
			title: 'What is your return policy?',
			content: `Sed laoreet dolor diam. Fusce ex lorem, consequat at tincidunt quis,
            posuere sit amet neque. Morbi efficitur purus vel consequat
            placerat. Mauris aliquet arcu tellus, eget finibus ligula vehicula
            eget.`,
		},

		{
			_id: 2,
			title: 'How much is shipping?',
			content: `Sed laoreet dolor diam. Fusce ex lorem, consequat at tincidunt quis,
            posuere sit amet neque. Morbi efficitur purus vel consequat
            placerat. Mauris aliquet arcu tellus, eget finibus ligula vehicula
            eget.`,
		},

		{
			_id: 3,
			title: 'check the status of my order?',
			content: `Sed laoreet dolor diam. Fusce ex lorem, consequat at tincidunt quis,
            posuere sit amet neqanu. Morbi efficitur purus vel consequat
            placerat. Mauris aliquet arcu tellus, eget finibus ligula vehicula
            eget.`,
		},

		{
			_id: 4,
			title: 'When will my order ship?',
			content: `Sed laoreet dolor diam. Fusce ex lorem, consequat at tincidunt quis,
            posuere sit amet neque. Morbi efficitur purus vel consequat
            placerat. Mauris aliquet arcu tellus, eget finibus ligula vehicula
            eget.`,
		},
	];
	return (
		<div>
			{accordions.map((accordion) => (
				<div
					className='mb-4 rounded-md border-2 border-gray-400 pl-6 pr-4'
					key={accordion._id}
				>
					<DropDown title={accordion.title} content={accordion.content} />
				</div>
			))}
		</div>
	);
};

export default Accordion;
