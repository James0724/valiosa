import React from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/about">Stationeries</NavLink>
					<NavLink to="/services">IT</NavLink>
					<NavLink to="/contact-us">Furniture</NavLink>
					<NavLink to="/sign-up">Branding</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
