import React from 'react';
import { useForm } from 'react-hook-form';

type Email = string;
type User = {
	email: Email;
};

function MailingForm() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { register, handleSubmit, reset } = useForm<User>();

	const onSubmit = (data: User): void => {
		console.log(data);
		reset();
	};

	return (
		<div className='mx-4'>
			<div className='pb-1 md:container md:mx-auto lg:flex lg:items-center lg:justify-center'>
				<div className='mx-4 flex flex-col items-center justify-center border-2 py-16 lg:w-4/5 lg:py-32'>
					<div className='flex font-normal italic tracking-wider lg:mb-4 lg:text-2xl'>
						<p className='mr-1 lg:mr-2'>Get your</p>
						<p className='text-red-500'>10% off!</p>
					</div>
					<div className='flex flex-col items-center text-2xl font-bold tracking-wide lg:mb-8 lg:flex-row lg:text-4xl'>
						<h2 className='lg:mr-3'>Join Our Mailing</h2>
						<h2>List</h2>
					</div>
					<form
						className='lg:flex lg:items-center'
						onSubmit={handleSubmit(onSubmit)}
					>
						{/* {error.email && (
							<p className='ml-4 pb-2 text-red-600'>{error.email.message}</p>
						)} */}
						<div className=' mt-1 mb-2 flex h-12 w-72 items-center rounded-3xl border bg-gray-50 pl-6 lg:mr-4 lg:w-80'>
							<h2 className='mr-3 text-2xl text-gray-500'>@</h2>
							<input
								className='w-48 bg-gray-50 placeholder-gray-400 focus:outline-none lg:w-56'
								type='text'
								name='email'
								placeholder='Email Address'
								// ref={register({
								// 	required: 'Email is required.',
								// 	pattern: {
								// 		value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
								// 		message: 'Email is not valid.',
								// 	},
								// })}
							/>
						</div>

						<div className='mb-4 pt-2'>
							<button
								className=' flex h-12 w-72 justify-center rounded-3xl bg-orange-700 pt-3.5 text-sm font-bold tracking-widest text-gray-50 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 lg:w-40'
								type='submit'
							>
								SUBSCRIBE
							</button>
						</div>
					</form>

					<div className='flex items-center'>
						<p className='mr-1 text-xs text-gray-500'>
							We never share your info. View our
						</p>
						<p className='text-xs text-gray-900'>Privacy Policy</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MailingForm;
