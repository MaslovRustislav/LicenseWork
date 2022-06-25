import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../Landing/index';
import DevicePage from '../DevicePage/index';
import DeviceContainer from '../DeviceContainer/index';
import Header from './Header';
import Footer from './Footer';
import SignIn from '../SignInProfile/signIn';
import SignUp from '../SignUp/signUp';
import TvContainer from '../DeviceContainer/TV/index'
// import ScrollToTop from '../../common/scrollToTop';
const Routing = () => {
	return (
		<div>
			<Header />
				<div className='flex  relative flex-col min-h-screen'>
			<Routes>
				{/* <ScrollToTop> */}
				<Route path='/' element={<Landing />} />
				<Route path='/Phones' element={<DeviceContainer />} />
				<Route path='/:id' element={<DevicePage />} />
				<Route path='/signIn' element={<SignIn/>} />
				<Route path='/signUp' element={<SignUp/>} />
				<Route path='/TV' element={<TvContainer/>} />

				{/* </ScrollToTop> */}
			</Routes>
				</div>
			<Footer />
		</div>
	);
};
export default Routing;
