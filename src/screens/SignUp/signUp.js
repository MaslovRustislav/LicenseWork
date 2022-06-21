// import { LockClosedIcon } from '@heroicons/react/solid'
import {React,useEffect} from "react";



export default function SignUp() {
  const checkEmail = () => {
    let tag = document.createElement("p");
    let text = document.createTextNode(
      "*Inalid email .Example'myName@index.com'"
    );
    tag.appendChild(text);
    let element = document.getElementById("newE");
    let Eval = document.getElementById("email")?.value;
    let regExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      console.log('In fuc')
    if (!regExp.test(Eval)) {
      document.getElementById("email")?.classList.add("fooInvalid");
      if (element?.appendChild(tag)){
        console.log('passed')

        element.appendChild(tag).classList.add("fooPInvalid");
      }
    } else {
      console.log(' not passed')
      document.getElementById("email").classList.add("fooValid");
      element.parentNode.removeChild(element);
    }
  };

  const checkPass = () => {
    let tag = document.createElement("p");
    let text = document.createTextNode(
      "*Minimum eight characters, at least one letter and one number:"
    );
    tag.appendChild(text);
    let element = document.getElementById("newP");
    let Pval = document.getElementById("pass").value;
    let regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regExp.test(Pval)) {
      document.getElementById("pass").classList.add("fooInvalid");
      if (element.appendChild(tag)){
      element.appendChild(tag).classList.add("fooPInvalid");
      
      document.getElementById("pass").value = "";
      }
    } else {
      console.log('unpassed')
      document.getElementById("pass").classList.add("fooValid");
      element.parentNode.removeChild(element);
    }
  };
  const checkAgainPass = () => {
    let tag = document.createElement("p");
    let text = document.createTextNode("*Passwords doesn't matches");
    tag.appendChild(text);
    let element = document.getElementById("newRP");
    let Pval = document.getElementById("pass").value;
    let PAval = document.getElementById("repPass").value;
    if (Pval != PAval) {
      // alert("Pval = " + Pval + "PAval" + PAval)
      document.getElementById("repPass").classList.add("fooInvalid");
      if (element.appendChild(tag))
        element.appendChild(tag).classList.add("fooPInvalid");
    } else {
      document.getElementById("repPass").classList.add("fooValid");
      element.parentNode.removeChild(element);
    }
  };
  const  checkTel = () => {
    let tag = document.createElement("p");
    let text = document.createTextNode(
      "*Your tel should be like this '+373611-390-76|373-611-39-076"
    );
    tag.appendChild(text);
    let element = document.getElementById("newT");
    let Tval = document.getElementById("tel").value;
    let regExp = /^(\+[1-9][0-9]*)?[0]?[1-9][0-9\-]*$/;
    if (!regExp.test(Tval)) {
      document.getElementById("tel").classList.add("fooInvalid");
      if (element.appendChild(tag))
        element.appendChild(tag).classList.add("fooPInvalid");
      document.getElementById("tel").value = "";
    } else {
      document.getElementById("tel").classList.add("fooValid");
      element.parentNode.removeChild(element);
    }
  };
  useEffect(()=>{
    checkEmail()
  },[ document.getElementById("email")])
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-fit py-64 flex-grow flex items-center justify-center  px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
          <div className='font-Voltaire text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r my-5 from-cyan-300 to-sky-700'>
					Volt
				</div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
             
            </p>
          </div>
          <form className="mt-8 space-y-3" >
              <div className="space-y-3  shadow-sm ">
          <div >
                  <label htmlFor="firstname" className="sr-only">
                    Username
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="firstname"
                    required
                    // onChange={changeHandler}
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={'Username'}
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="sr-only">
                    Lastname
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="lastname"
                    required
                    // onChange={changeHandler}
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={'Lastname '}
                  />
                </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                type="email"
                id="email"
                placeholder="E-mail"
                  name="email"
                  autoComplete="email"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                  <label htmlFor="password" className="sr-only">
                        Repeat Password
                  </label>
                  <input
                    id="secondPass"
                    name="secondPass"
                    type="password"
                    autoComplete="current-password"
                    required
                    // onChange={changeHandler}
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={
                            'Repeat Password '
                    }
                  />
                </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}