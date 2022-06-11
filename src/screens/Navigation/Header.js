// import { render } from '@testing-library/react'
import React from 'react';
// import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
	console.log('Header');
	return (
		<div>
			<nav id='menu'>
				<input
					type='checkbox'
					id='responsive-menu'
					onclick='updatemenu()'></input>
				<label></label>
				<ul>
					<li>
						{/* <Link to='/'> */}
						<div className='navLogo'></div>
						{/* </Link> */}
					</li>
					<li className='signInNav'>
						<a href='SignInProfile/signIn.html'>Sign In</a>
					</li>
					<li className='logInNav'>
						<a href='logInProfile/logIn.html'>Log In</a>
					</li>

					<li>
						<a className='dropdown-arrow'>Telefoane si gadget-uri</a>
						<ul className='sub-menus'>
							<li>
								<a href='../ProfileScreen/TelAGad/TelAGad.html'>Telefoane</a>
							</li>
							<li>
								<a href='http://'>Casti/boxe/huse</a>
							</li>
							<li>
								<a href='http://'>Vehicule si dronuri</a>
							</li>
						</ul>
					</li>
					<li>
						<a className='dropdown-arrow' href='http://'>
							Televizoare
						</a>
						<ul className='sub-menus'>
							<li>
								<a href='http://'>LG</a>
							</li>
							<li>
								<a href='http://'>Samsung</a>
							</li>
							<li>
								<a href='http://'>Philips</a>
							</li>
						</ul>
					</li>
					<li>
						<a className='dropdown-arrow'>Electrocasnice mici</a>
						<ul className='sub-menus'>
							<li>
								<a href='http://'>Tehnica de bucatarie</a>
							</li>
							<li>
								<a href='http://'>Tehnica pentru casa</a>
							</li>
							<li>
								<a href='http://'>Tehnica pentru ograda</a>
							</li>
							<li>
								<a href='http://'>Vesela</a>
							</li>
						</ul>
					</li>
					<li>
						<a href='../ProfileScreen/ContactUsProfile/contactUs.html'>
							Contact Us
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default Header;
