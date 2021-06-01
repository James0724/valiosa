import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { logout } from '../../actions/userActions';

import './layout.css';

const TopBar = () => {
	const alert = useAlert();
	const dispatch = useDispatch();

	const { user, loading } = useSelector((state) => state.auth);
	const { cartItems } = useSelector((state) => state.cart);

	const logoutHandler = () => {
		dispatch(logout());
		alert.success('Logged out successfully.');
	};

	const activeClass = () => {
		let sidebarBox = document.querySelector('#box');
		let sidebarBtn = document.querySelector('#btn');
		let sideBarBoxActive = sidebarBox.classList.toggle('active');
		let sideBarBtnActive = sidebarBtn.classList.toggle('active');

		if (sideBarBtnActive || sideBarBoxActive) {
			sidebarBtn.classList.add('active');
			sidebarBox.classList.add('active');
		} else {
			sidebarBtn.classList.remove('opened');
			sidebarBox.classList.remove('opened');
		}
	};
	return (
		<Fragment>
			{user ? (
				<Fragment>
					<div className="top-header">
						<div className="container top-header-conntainer ">
							<div className="row">
								<div className="col-lg-6">
									<div className="header-contact  hidden-phone">
										<ul>
											<li>Welcome to Valiosa Store</li>
											<li>
												<i className="fa fa-phone" aria-hidden="true"></i>
												Contact: +254 707 283342
											</li>
										</ul>
									</div>
								</div>
								<div className="col-lg-6 text-right">
									<ul className="header-dropdown ">
										{user && user.role === 'admin' ? (
											<li className="toggle-nav " onClick={() => activeClass()}>
												<div id="btn">
													<div id="top"></div>
													<div id="middle"></div>
													<div id="bottom"></div>
												</div>
												<div id="box">
													<div id="items">
														<ul className="list-unstyled components">
															<li className="item">
																<Link to="/dashboard">
																	<i className="fa fa-tachometer"></i> Dashboard
																</Link>
															</li>
															<li className="item">
																<li>
																	<Link to="/admin/products">
																		<i className="fa fa-clipboard"></i> All
																		Products
																	</Link>
																</li>
															</li>
															<li className="item">
																<li>
																	<li>
																		<Link to="/admin/product">
																			<i className="fa fa-plus"></i> Create
																			Product
																		</Link>
																	</li>
																</li>
															</li>

															<li className="item">
																<Link to="/admin/orders">
																	<i className="fa fa-shopping-basket"></i>{' '}
																	Orders
																</Link>
															</li>
															<li className="item">
																<Link to="/admin/users">
																	<i className="fa fa-users"></i> Users
																</Link>
															</li>
															<li className="item">
																<Link to="/admin/reviews">
																	<i className="fa fa-star"></i> Reviews
																</Link>
															</li>
														</ul>
													</div>
												</div>
											</li>
										) : (
											<li className="toggle-nav " onClick={() => activeClass()}>
												<div id="btn">
													<div id="top"></div>
													<div id="middle"></div>
													<div id="bottom"></div>
												</div>
												<div id="box">
													<div id="items">
														<div className="item">Stationery</div>
														<div className="item">Furniture</div>
														<div className="item">Furniture</div>
														<div className="item">Branding</div>
													</div>
												</div>
											</li>
										)}
										<li className=" hidden-phone mobile-wishlist ">
											<i className="fa fa-heart" aria-hidden="true"></i>
											Wishlist
										</li>
										<li className="onhover-dropdown mobile-account">
											<i className="fa fa-user" aria-hidden="true"></i>
											<span>{user && user.name}</span>
											<ul className="onhover-show-div">
												{user && user.role === 'admin' && (
													<li>
														<Link className="dropdown-item" to="/dashboard">
															Dashboard
														</Link>
													</li>
												)}
												<li>
													<Link className="dropdown-item" to="/orders/me">
														Orders
													</Link>
												</li>
												<li>
													<Link className="dropdown-item" to="/me">
														Profile
													</Link>
												</li>
												<li>
													<Link
														className="dropdown-item text-danger"
														to="/"
														onClick={logoutHandler}>
														Logout
													</Link>
												</li>
											</ul>
										</li>
										<li className="cart-link">
											<div className="cart-qty-cls">{cartItems.length}</div>
											<Link to="/cart" data-lng="en">
												<i className="fa fa-shopping-cart "></i>
												cart
											</Link>

											{/* <ul className="onhover-show-div">
												<li>
													<Link to="/login" data-lng="en">
														Login
													</Link>
												</li>
												<li>
													<Link to="/register" data-lng="en">
														Register
													</Link>
												</li>
											</ul> */}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</Fragment>
			) : (
				!loading && (
					<div className="top-header">
						<div className="container top-header-conntainer ">
							<div className="row">
								<div className="col-lg-6 hidden-phone">
									<div className="header-contact ">
										<ul>
											<li>Welcome to Valiosa Store</li>
											<li>
												<i className="fa fa-phone" aria-hidden="true"></i>
												Contact: +254 707 283342
											</li>
										</ul>
									</div>
								</div>
								<div className="col-lg-6 text-right ">
									<ul className="header-dropdown">
										<li className="toggle-nav " onClick={() => activeClass()}>
											<div id="btn">
												<div id="top"></div>
												<div id="middle"></div>
												<div id="bottom"></div>
											</div>
											<div id="box">
												<div id="items">
													<div className="item">Stationery</div>
													<div className="item">Furniture</div>
													<div className="item">Furniture</div>
													<div className="item">Branding</div>
												</div>
											</div>
										</li>
										<li className="mobile-wishlist hidden-phone">
											<i className="fa fa-heart" aria-hidden="true"></i>
											Wishlist
										</li>

										<li className="onhover-dropdown mobile-account">
											<i className="fa fa-user" aria-hidden="true"></i>
											My Account
											<ul className="onhover-show-div">
												<li>
													<Link to="/login" data-lng="en">
														Login
													</Link>
												</li>
												<li>
													<Link to="/register" data-lng="en">
														Register
													</Link>
												</li>
											</ul>
										</li>
										<li className="cart-link">
											<div className="cart-qty-cls">{cartItems.length}</div>
											<Link to="/cart" data-lng="en">
												<i className="fa fa-shopping-cart "></i>
												cart
											</Link>

											{/* <ul className="onhover-show-div">
												<li>
													<Link to="/login" data-lng="en">
														Login
													</Link>
												</li>
												<li>
													<Link to="/register" data-lng="en">
														Register
													</Link>
												</li>
											</ul> */}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				)
			)}
		</Fragment>
	);
};

export default TopBar;
