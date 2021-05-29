import React, { Fragment, Component } from 'react';
import { Route, Link } from 'react-router-dom';

import NavBar from './Navbar';

import Search from './Search';
import TopBar from './TopBar';
import './layout.css';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false,
		};
	}
	toggleMenu = () => {
		this.setState({
			toggle: !this.state.toggle,
		});
	};
	render() {
		return (
			<Fragment>
				<TopBar />
				<div className="header bg-light">
					<div className="container ">
						<nav className="row">
							<div className="col-sm text-center">
								<h1>
									<Link to="/">
										<img
											style={{ width: '250px', height: '100px' }}
											src="/images/Valiosa_logo.png"
											alt="logo"
										/>
									</Link>
								</h1>
							</div>

							<div className="search-bar col-sm-6">
								<Route render={({ history }) => <Search history={history} />} />
							</div>
						</nav>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="main-menu">
									<NavBar />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Header;
