// import { render } from '@testing-library/react'
import React from 'react';
import { Link } from 'react-router-dom';
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
				<div className='flex justify-between '>
					<div>
					<li>
						<Link to='/'>
							<div className='navLogo'></div>
						</Link>
					</li>
					
					<li>
						<a className='dropdown-arrow'>Telefoane si gadget-uri</a>
						<ul className='sub-menus'>
							<li>
								<Link to='/Phones'>Phones</Link>
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
					</div>
					<div>
					<li className='signInNav'>
					<Link to='/signUp'>
						<a href='SignInProfile/signIn.html'>Sign In</a>
						</Link>
					</li>
					<li className='logInNav'>
					<Link to='/signIn'>

						<a href='logInProfile/logIn.html'>Log In</a>
						</Link>

					</li>
					</div>
					</div>
				</ul>
			</nav>
		</div>
	);
};
export default Header;
