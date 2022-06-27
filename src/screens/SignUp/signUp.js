import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';

const SignIn = () => {
	const [error, setError] = useState({ type: '', value: null });
	const [open, setOpen] = useState(false);
	const [form, setForm] = useState({
		email: '',
		password: '',
		firstname: '',
		lastname: '',
	});
	const [passForm, setPassForm] = useState({
		password: '',
		secondPass: '',
	});
	const navigate = useNavigate();

	const changeHandler = (event) => {
		setPassForm({ ...passForm, [event.target.name]: event.target.value });
		setForm({ ...form, [event.target.name]: event.target.value });
		setOpen(true);
	};
	const registerHandler = async () => {
		try {
			if (passForm.password === passForm.secondPass) {
				if (!checkEmptyObj(form)) {
					if (validator.isEmail(form.email)) {
						if (validator.isStrongPassword(form.password)) {
							setForm({ ...form, email: '', password: '' });
							navigate('/');
						}
						setError({
							type: 'Error',
							value: 'You didn t introduced strong password',
						});
					} else {
						setError({ type: 'Error', value: 'Please enter valid email' });
					}
				} else {
					setError({ type: 'Error', value: 'Please enter data' });
				}
			} else {
				setError({ type: 'Error', value: 'Password missmatch' });
			}
		} catch (err) {
			console.log('Error occured...........', err);
			setForm({
				...form,
				email: '',
				password: '',
			});
			setError({ type: 'Error', value: err.message });
		}
		setOpen(false);
	};
	const checkEmptyObj = () => {
		let isEmpty = true;
		for (let i in form) {
			if (form[i]) {
				return (isEmpty = false);
			}
		}
		return isEmpty;
	};
	return (
		<>
			<div className=' flex-grow-1 my-auto min-h-full flex items-center justify-center  px-4 sm:px-6 lg:px-8'>
				{/* <div className="w-full h-20 bg-black absolute">

          </div> */}
				<div className='max-w-md w-full space-y-8'>
					<div
						className={` border  transition ease-in-out smmax:w-3/4 xsmax:w-3/4  duration-100 ${
							error.value === null || open ? 'hidden ' : ''
						}  ${
							error.type === 'Passed'
								? 'border-green-400 text-green-700 bg-green-100 '
								: 'border-red-400 text-red-700 bg-red-100 '
						} translate-x-16 top-10 right-20 absolute  flex justify-between px-6   py-3 rounded `}
						role='alert'>
						<div className='flex flex-col items-start pr-10'>
							<strong className='font-bold  '>
								{error.type === 'error' ? error.type : error.type}
							</strong>
							<span className='block sm:inline sm:w-full '>{error.value}</span>
						</div>
						<span className='justify-end self-end  flex  py-3'>
							<svg
								onClick={
									(() => setOpen(true),
									() => setError({ type: '', value: null }))
								}
								className={`self-end fill-current h-6 w-6 ${
									error.type === 'Passed' ? 'text-green-500' : 'text-red-500 '
								} `}
								role='button'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'>
								<title>Close</title>
								<path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
							</svg>
						</span>
					</div>

					<div>
						<div className='font-Voltaire text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r my-5 from-cyan-300 to-sky-700'>
							Volt
						</div>
						<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
							Sign Up
						</h2>
						<p className='mt-2 text-center text-sm text-gray-600'></p>
					</div>
					<form className='mt-8 space-y-6'>
						<input type='hidden' name='remember' defaultValue='true' />
						<div className='space-y-3 rounded-md shadow-sm '>
							<div>
								<label
									htmlFor='email-address'
									className=' flex justify-start pl-2 font-bold font-Rampart'>
									Email
								</label>
								<input
									id='email-address'
									name='email'
									type='email'
									autoComplete='email'
									required
									onChange={changeHandler}
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Email'
								/>
							</div>
							<div>
								<label
									htmlFor='password'
									className='flex justify-start pl-2 font-bold font-Rampart'>
									Password
								</label>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
									required
									onChange={changeHandler}
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Password'
								/>
							</div>
							<div>
								<label
									htmlFor='password'
									className='flex justify-start pl-2 font-bold font-Rampart'>
									Repeat Password
								</label>
								<input
									id='secondPass'
									name='secondPass'
									type='password'
									autoComplete='current-password'
									required
									onChange={changeHandler}
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder={'Repeat Password '}
								/>
							</div>
						</div>

						<div className='flex items-center w-full  justify-between'>
							<div className='text-sm'>
								{/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                </a> */}
							</div>
							<Link to={'/signUp'} className='text-sm'>
								<p className='font-medium self-end text-indigo-600 mr-5 hover:text-indigo-500'>
									Sing In
								</p>
							</Link>
						</div>

						<div>
							<button
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									registerHandler();
								}}
								className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'>
								<span className='absolute left-0 inset-y-0 flex items-center pl-3'></span>
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default SignIn;
