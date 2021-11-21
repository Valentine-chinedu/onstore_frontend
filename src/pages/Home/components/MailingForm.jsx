import React from 'react';
import { useForm } from 'react-hook-form';

function MailingForm() {
	const { register, handleSubmit, errors, reset } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	return (
		<div className='mx-4'>
			<div className='md:container md:mx-auto pb-1 lg:flex lg:items-center lg:justify-center'>
				<div className='flex flex-col justify-center items-center border-2 mx-4 py-16 lg:py-32 lg:w-4/5'>
					<div className='flex font-normal tracking-wider italic lg:mb-4 lg:text-2xl'>
						<p className='mr-1 lg:mr-2'>Get your</p>
						<p className='text-red-500'>10% off!</p>
					</div>
					<div className='lg:flex-row items-center flex flex-col font-bold text-2xl tracking-wide lg:text-4xl lg:mb-8'>
						<h2 className='lg:mr-3'>Join Our Mailing</h2>
						<h2>List</h2>
					</div>
					<form
						className='lg:flex lg:items-center'
						onSubmit={handleSubmit(onSubmit)}
					>
						{errors.email && (
							<p className='ml-4 pb-2 text-red-600'>{errors.email.message}</p>
						)}
						<div className=' flex items-center mt-1 bg-gray-50 w-72 lg:w-80 rounded-3xl border pl-6 h-12 mb-2 lg:mr-4'>
							<h2 className='mr-3 text-gray-500 text-2xl'>@</h2>
							<input
								className='bg-gray-50 placeholder-gray-400 focus:outline-none w-48 lg:w-56'
								type='text'
								name='email'
								placeholder='Email Address'
								ref={register({
									required: 'Email is required.',
									pattern: {
										value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
										message: 'Email is not valid.',
									},
								})}
							/>
						</div>

						<div className='mb-4 pt-2'>
							<button
								className=' flex justify-center rounded-3xl h-12 focus:outline-none bg-orange-700 pt-3.5 hover:bg-orange-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 w-72 lg:w-40 text-gray-50 text-sm font-bold tracking-widest'
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
