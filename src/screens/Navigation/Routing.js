import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../Landing/index';
import DevicePage from '../DevicePage/index';
import DeviceContainer from '../DeviceContainer/index';
import Header from './Header';
import Footer from './Footer';
// import ScrollToTop from '../../common/scrollToTop';
const Routing = () => {
	return (
		<div>
			<Header />
			<Routes>
				{/* <ScrollToTop> */}

				<Route path='/' element={<Landing />} />
				<Route path='/Phones' element={<DeviceContainer />} />
				<Route path='/:id' element={<DevicePage />} />
				{/* </ScrollToTop> */}
			</Routes>
			<Footer />
		</div>
	);
};
export default Routing;
