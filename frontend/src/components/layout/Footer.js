import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer-light mt-5 ">
			<div className="light-layout">
				<div className="container">
					<section className="small-section border-section border-top-0">
						<div className="row">
							<div className="col-lg-6 pl-0">
								<div className="subscribe">
									<div>
										<h5>GET OUR OFFERS FIRST HAND!</h5>
										<p>
											Never Miss Anything From Valiosa Company Limited By
											Signing Up To Our Newsletter.
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6 pl-0">
								<form className="form-inline subscribe-form">
									<div className="form-group">
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
						<div className="row footer-theme mt-2">
							<div className="col-6 col-lg-4 order-1 hidden-phone">
								<div className="">
									<p>
										We Offer An excellence of wide range services from Office,
										School Stationery, IT, Furniture to Branding
									</p>
								</div>
							</div>
							<div className="col-6 col-lg-2 order-2 ">
								<div className="sub-title">
									<div className="footer-contant">
										<ul>
											<li>
												<Link to="/about">About us</Link>
											</li>
											<li>
												<Link to="/about">Mission</Link>
											</li>
											<li>
												<Link to="/about">Vision</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* <div className="col-6 col-lg-3 order-3 hidden-phone">
								<div className="sub-title">
									<div className="footer-contant">
										<ul>
											<li>
												<Link to="#">shipping & return</Link>
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
							</div> */}

							<div className="col-6 col-lg-3 order-4 pl-0">
								<div className="sub-title">
									<div className="footer-contant">
										<ul className="pl-0">
											<li>
												<Link to="#">Nairobi</Link>
											</li>
											<li>
												<Link to="#">Call Us: 0707-283-342</Link>
											</li>
											<li>
												<Link to="#">Support@valiosa.com</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="sub-footer">
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
							<div className="footer-social  footer-end mt-3">
								<ul>
									<li>
										<Link to="#">
											<i className="fa fa-facebook" aria-hidden="true"></i>
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fa fa-google-plus" aria-hidden="true"></i>
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fa fa-twitter" aria-hidden="true"></i>
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fa fa-instagram" aria-hidden="true"></i>
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
