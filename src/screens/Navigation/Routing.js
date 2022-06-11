import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../Landing/index';
import Header from './Header';
import Footer from './Footer';
const Routing = () => {
	return (
		// <div className='w-full min-h-screen bg-b;ac'>
			// {console.log('Routing js')}
			<Header />

			<Routes>
				<Route path='/'>
					<Landing />
				</Route>
			</Routes>
			<Footer />
		// </div>
	);
};
export default Routing;
