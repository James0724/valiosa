import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<section id="footer">
			<div className="newsletter">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="content">
								<h6>
									Subscribe to our mailing list to receive updates on new
									arrivals and special offers.
								</h6>
								<div className="input-group input-group-center w-50">
									<input
										type="email"
										className="form-control email-input"
										placeholder="Enter your email"
									/>
									<span className="input-group-btn">
										<button
											type="submit"
											className="btn btn-outline-secondary btn-suscribe">
											suscribe
										</button>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row text-center text-xs-center text-sm-left text-md-left">
					<div className="col-xs-12 col-sm-4 col-md-4">
						<h5>Information</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<Link to="!#">
									<i className="fa fa-angle-double-right"></i>Frequently asked
									questions
								</Link>
							</li>
							<li>
								<Link to="!#">
									<i className="fa fa-angle-double-right"></i>Payment and
									delivery
								</Link>
							</li>
							<li>
								<Link to="!#">
									<i className="fa fa-angle-double-right"></i>Privacy policy
								</Link>
							</li>
							<li>
								<Link to="!#">
									<i className="fa fa-angle-double-right"></i>Terms and
									conditions
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-4 col-md-4">
						<h5>Shop with us</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<Link to="!#">
									<i className="fa fa-angle-double-right"></i>Shipping and
									refunds
								</Link>
							</li>

							<li>
								<Link to="!#">
									<i className="fa fa-angle-double-right"></i>Get Started
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-4 col-md-4">
						<h5>About us</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<Link to="!#">
									<i className="fa fa-angle-double-right"></i>Home
								</Link>
							</li>
							<li>
								<Link to="!#">
									<i className="fa fa-angle-double-right"></i>About us
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
						<ul className="list-unstyled list-inline social text-center">
							<li className="list-inline-item">
								<Link to="!#">
									<i className="fa fa-facebook"></i>
								</Link>
							</li>
							<li className="list-inline-item">
								<Link to="!#">
									<i className="fa fa-twitter"></i>
								</Link>
							</li>
							<li className="list-inline-item">
								<Link to="!#">
									<i className="fa fa-instagram"></i>
								</Link>
							</li>
							<li className="list-inline-item">
								<Link to="!#">
									<i className="fa fa-google-plus"></i>
								</Link>
							</li>
							<li className="list-inline-item">
								<Link to="!#" target="_blank">
									<i className="fa fa-envelope"></i>
								</Link>
							</li>
						</ul>
					</div>
					<hr />
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center">
						<p className="h6">© All right Reversed. Valiosa Company Limited</p>
					</div>
					<hr />
				</div>
				{/* <div className="page-footer">
					<div className="newsletter">
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<div className="content">
										<h6>
											Subscribe to our mailing list to receive updates on new
											arrivals and special offers.
										</h6>
										<div className="input-group input-group-center w-50">
											<input
												type="email"
												className="form-control email-input"
												placeholder="Enter your email"
											/>
											<span className="input-group-btn">
												<button
													type="submit"
													className="btn btn-outline-secondary btn-suscribe">
													suscribe
												</button>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row foot-row">
							<div className="col-md-3 foot-descr">
								<h3>Infomation</h3>
								<ul>
									<li>Payment and delivery</li>
									<li>Terms and conditions</li>
									<li>Mpesa Payments Privacy policy</li>
								</ul>
							</div>
							<div className="col-md-3 foot-descr">
								<h3>About </h3>
								<ul>
									<li>About us</li>
									<li>Products and Services</li>
									<li>Values</li>
								</ul>
							</div>
							<div className="col-md-3 foot-descr">
								<h3>Contact</h3>
								<ul>
									<i class="h2 bi bi-whatsapp pr-3"></i>
									<i class="h2 bi bi-facebook pr-3"></i>
								</ul>
							</div>
						</div>
						<div className="foot-note">
							<p>© 2021 Valiosa Company Limited</p>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default Footer;
