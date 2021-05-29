import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<div>
				<div className="main-navbar">
					<div id="mainnav">
						<ul className="nav-menu">
							<li>
								<Link to="#" className="nav-link">
									Stationary
								</Link>
							</li>
							<li>
								<Link to="#" className="nav-link">
									IT
								</Link>
							</li>
							<li>
								<Link to="#" className="nav-link">
									Furnitures
								</Link>
							</li>
							<li>
								<Link to="#" className="nav-link">
									Branding
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default NavBar;
