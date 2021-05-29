import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer-light">
			<div className="light-layout">
				<div className="container">
					<section className="small-section border-section border-top-0">
						<div className="row">
							<div className="col-lg-6">
								<div className="subscribe">
									<div>
										<h4>GET OUR OFFERS FIRST HAND!</h4>
										<p>
											Never Miss Anything From Valiosa Company Limited By
											Signing Up To Our Newsletter.
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<form className="form-inline subscribe-form">
									<div className="form-group mx-sm-3">
										<input
											type="text"
											className="form-control"
											id="exampleFormControlInput1"
											placeholder="Enter your email"
										/>
									</div>
									<button type="submit" className="btn btn-solid">
										subscribe
									</button>
								</form>
							</div>
						</div>
					</section>
				</div>

				<section className="section-b-space ">
					<div className="container">
						<div className="row footer-theme">
							<div className="col-lg-4 col-md-6">
								<div className="footer-contant-bg mt-2 ">
									<div className="footer-logo">
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
									</div>
									<p>
										An excellence of wide range services we offer:Office &
										School Stationery, IT, Furniture & Branding
									</p>
									<div className="footer-social">
										<ul>
											<li>
												<Link to={'https://www.facebook.com/'}>
													<i className="fa fa-facebook" aria-hidden="true"></i>
												</Link>
											</li>
											<li>
												<Link to={'https://plus.google.com/'}>
													<i
														className="fa fa-google-plus"
														aria-hidden="true"></i>
												</Link>
											</li>
											<li>
												<Link to={'https://twitter.com'}>
													<i className="fa fa-twitter" aria-hidden="true"></i>
												</Link>
											</li>
											<li>
												<Link to={'https://instagram.com'}>
													<i className="fa fa-instagram" aria-hidden="true"></i>
												</Link>
											</li>
											<li>
												<Link to={'https://rss.com/'}>
													<i className="fa fa-rss" aria-hidden="true"></i>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-sm ">
								<div className="sub-title">
									<div className="footer-title">
										<h4>About us</h4>
									</div>
									<div className="footer-contant">
										<ul>
											<li>
												<Link to="!#">Our story</Link>
											</li>
											<li>
												<Link to="!#">Mission</Link>
											</li>
											<li>
												<Link to="!#">Vision</Link>
											</li>
											<li>
												<Link to="!#">Objective</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-sm">
								<div className="sub-title">
									<div className="footer-title">
										<h4>Customer Service</h4>
									</div>
									<div className="footer-contant">
										<ul>
											<li>
												<Link to="#">shipping & return</Link>
											</li>
											<li>
												<Link to="#">secure shopping</Link>
											</li>
											<li>
												<Link to="#">FAQ</Link>
											</li>
											<li>
												<Link to="#">Payment Policy</Link>
											</li>
											<li>
												<Link to="#">Terms and conditions</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-sm">
								<div className="sub-title">
									<div className="footer-title">
										<h4>store information</h4>
									</div>
									<div className="footer-contant">
										<ul className="contact-list">
											<li>
												<i className="fa fa-map-marker"></i>NAIROBI
											</li>
											<li>
												<i className="fa fa-phone"></i>Call Us: 0707-283-342
											</li>
											<li>
												<i className="fa fa-envelope-o"></i>Email Us:
												Support@valiosa.com
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="sub-footer ">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-md-6 col-sm-12">
							<div className="footer-end">
								<p>
									<i className="fa fa-copyright" aria-hidden="true"></i> 2021
									Valiosa Company Limited
								</p>
							</div>
						</div>
						<div className="col-xl-6 col-md-6 col-sm-12">
							<div className="payment-card-bottom">
								<ul>
									<li>
										<img src="/assets/images/icons/mastercard.png" alt="" />
									</li>
									<li>
										<Link to="#">
											<img
												src="/assets/images/icons/mpesa.png"
												alt=""
												style={{ width: 'auto', height: '30px' }}
											/>
										</Link>
									</li>
									<li>
										<Link to="#">
											<img src="/assets/images/icons/paypal.png" alt="" />
										</Link>
									</li>
									<li>
										<Link to="#">
											<img src="/assets/images/icons/visa.png" alt="" />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
