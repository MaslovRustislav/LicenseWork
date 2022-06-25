/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';
import validator from 'validator'

export default function Example() {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  const [error, setError] = useState({ type: '', value: null });
  const [errorOpen, setErrorOpen] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });

  };

  const loginHandler =  () => {
    try {
      if (!checkEmptyObj(form)) {
        if (validator.isEmail(form.email)) {
          if(validator.isStrongPassword(form.password)){

            setForm({ ...form, email: '', password: '' });
            navigate('/');
          }
          setError({ type: 'Error', value: 'You didn t introduced correct password' })
        } else {
          setError({ type: 'Error', value: 'Please enter valid email' })
    
        }
      } else {
        setError({ type: 'Error', value: 'Please enter data' });
      }
    } catch (err) {
      console.log('Error occured...........', err);
      setForm({
        ...form,
        email: '',
        password: '',
        firstname: '',
        lastname: ''
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
    <Transition.Root show={open} as={Fragment}>
      <div className="relative z-10"  onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className=" flex-grow-1 my-auto min-h-full flex items-center justify-center  px-4 sm:px-6 lg:px-8">
          {/* <div className="w-full h-20 bg-black absolute">

          </div> */}
          <div className="max-w-md w-full space-y-8">
            <div
              className={` border  transition ease-in-out smmax:w-3/4 xsmax:w-3/4  duration-100 ${
                error.value === null || open ? 'hidden ' : ''
              }  ${
                error.type === 'Passed'
                  ? 'border-green-400 text-green-700 bg-green-100 '
                  : 'border-red-400 text-red-700 bg-red-100 '
              } translate-x-16 top-10 right-20 absolute  flex justify-between px-6   py-3 rounded `}
              role="alert"
            >
              <div className="flex flex-col  pr-10">
                <strong className="font-bold  ">
                  {error.type === 'error' ? error.type : error.type}
                </strong>
                <span className="block sm:inline sm:w-full ">{error.value}</span>
              </div>
              <span className="justify-end self-end  flex  py-3">
                <svg
                  onClick={
                    (() => setOpen(true),
                    () => setError({ type: '', value: null }))
                  }
                  className={`self-end fill-current h-6 w-6 ${
                    error.type === 'Passed' ? 'text-green-500' : 'text-red-500 '
                  } `}
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>

            <div>
            <div className='font-Voltaire text-center text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r my-5 from-cyan-300 to-sky-700'>
					Volt
				</div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
               Complete form please 
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600"></p>
            </div>
            <form className="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="space-y-3 rounded-md shadow-sm ">
                <div>
                  <label
                    htmlFor="email-address"
                    className=" flex justify-start pl-2 font-bold font-Rampart"
                  >
                   Email
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={changeHandler}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder='Email'
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="flex justify-start pl-2 font-bold font-Rampart"
                  >
                    Phone number
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={changeHandler}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder='+373........'
                  />
                </div>
              </div>

              <div className="flex items-center w-full  justify-between">
                <div className="text-sm">
                  {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                </a> */}
                </div>
            
              </div>

              <div>
            
              </div>
            </form>
          </div>
        </div>
      
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:green-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition.Root>
  )
}