import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { logout } from '../../actions/userActions';

import Search from './Search';
import Navbar from './nav';

const Header = () => {
	const alert = useAlert();
	const dispatch = useDispatch();

	const { user, loading } = useSelector((state) => state.auth);
	const { cartItems } = useSelector((state) => state.cart);

	const logoutHandler = () => {
		dispatch(logout());
		alert.success('Logged out successfully.');
	};

	return (
		<Fragment>
			<nav className="top-bar navbar navbar-expand-lg">
				<div className="d-flex hide">
					<ul className="text-tob-bar-container float-left hidden-sm hidden-xs">
						<li className="text-tob-bar">
							<span>Have a question? </span> Call +254707283342
						</li>
					</ul>
					<ul className="text-tob-bar-container float-left hidden-sm hidden-xs">
						<li className="text-tob-bar">
							<span>Have a question? </span> Call +254707283342
						</li>
					</ul>
				</div>
				<div className="header-extra-menu d-flex justify-content-center">
					<ul className="d-flex text-tob-bar-container float-left hidden-sm hidden-xs">
						<li>
							<Link to="/#">About</Link>
						</li>

						<li>
							<Link to="/#">Contact</Link>
						</li>
					</ul>
					<div className="col-12 col-md-3">
						{user ? (
							<Fragment>
								<div className="row">
									<div className="col">
										<Link to="/cart" style={{ textDecoration: 'none' }}>
											<div className="highlight-info col">
												<div className="highlights-banners-icon">
													<span className="ml-1" id="cart_count">
														{cartItems.length}
													</span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="25"
														height="25"
														fill="#ca76d8"
														className="bi bi-cart3"
														viewBox="0 0 16 16">
														<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
													</svg>
												</div>
											</div>
										</Link>
									</div>
									<div className="dropdown d-inline col">
										<Link
											to="#!"
											className="btn dropdown-toggle text-white mr-4"
											type="button"
											id="dropDownMenuButton"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											<figure className="avatar avatar-nav">
												<img
													src={user.avatar && user.avatar.url}
													alt={user && user.name}
													className="rounded-circle"
												/>
											</figure>
											<span>{user && user.name}</span>
										</Link>

										<div
											className="dropdown-menu"
											aria-labelledby="dropDownMenuButton">
											{user && user.role === 'admin' && (
												<Link className="dropdown-item" to="/dashboard">
													Dashboard
												</Link>
											)}
											<Link className="dropdown-item" to="/orders/me">
												Orders
											</Link>
											<Link className="dropdown-item" to="/me">
												Profile
											</Link>
											<Link
												className="dropdown-item text-danger"
												to="/"
												onClick={logoutHandler}>
												Logout
											</Link>
										</div>
									</div>
								</div>
							</Fragment>
						) : (
							!loading && (
								<div className="row">
									<div className="col col-margin">
										<Link to="/cart" style={{ textDecoration: 'none' }}>
											<div className="highlight-info col">
												<div className="highlights-banners-icon">
													<span className="ml-1" id="cart_count">
														{cartItems.length}
													</span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="45"
														height="45"
														fill="#ca76d8"
														className="bi bi-cart3"
														viewBox="0 0 16 16">
														<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
													</svg>
												</div>
											</div>
										</Link>
									</div>
									<div className="col col-margin">
										<Link
											style={{ color: 'black' }}
											to="/login"
											className="btn"
											id="login_btn">
											Login
										</Link>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</nav>
			<div className="header bg-light">
				<div className="container ">
					<nav className="navbar row ">
						<div className="col-12 col-md-3 col-sm d-flex justify-content-center">
							<h1 className="navbar-brand">
								<Link to="/">
									<img
										style={{ width: '250px', height: '100px' }}
										src="/images/Valiosa_logo.png"
										alt="logo"
									/>
								</Link>
							</h1>
						</div>

						<div className="col-12 col-md-6 mt-2 mt-md-0 col">
							<Route render={({ history }) => <Search history={history} />} />
						</div>
					</nav>
				</div>
			</div>
			<Navbar />
		</Fragment>
	);
};

export default Header;
