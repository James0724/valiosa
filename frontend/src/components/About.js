import React from 'react';

const About = () => {
	return (
		<section class="about-us py-5 " id="about-us">
			<div class="container mt-5 bg-white">
				<div class="row">
					<div class="col-md-6 mt-3">
						<h2>About Valiosa Company Limited</h2>
						<hr />
						<p>
							Valiosa Company Ltd is a general supplies business. The firms core
							activity is supply of general supplies, educational materials,
							including stationery supplies to professionals, schools, colleges,
							universities, international organizations, non-government and
							government organizations.
						</p>
						<p>
							Valiosa Company Ltd has a renewed focus on all our Customers and
							Customer Service which plays an important part in all our
							transactions. With Valiosa as your partner, be rest assured that
							your organization will always have everything you need to build
							and grow.
						</p>
					</div>
					<div class="col-md-6 mt-3">
						<img src="/images/about.jpg" alt="" />
					</div>
				</div>
				<div className=" row d-flex">
					<div className=" col-md-4 mt-3">
						<div className="highlight-info-body">
							<div className="d-block ">
								<h2 className="text-center">Vision</h2>
								<hr />
								<p>
									To be a leader in providing goods and services at the right
									time and quality so as to give continued support to our
									customers.
								</p>
							</div>
						</div>
					</div>

					<div className="  col-md-4 mt-3">
						<div className="highlight-info-body">
							<div className="d-block ">
								<h2 className="text-center">Mission</h2>
								<hr />
								<p>
									Our mission is to support you by providing high quality
									products and exceptional service.
								</p>
							</div>
						</div>
					</div>

					<div className=" col-md-4 mt-3">
						<div className="highlight-info-body">
							<div className="d-block">
								<h2 className="text-center">Objective</h2>
								<hr />
								<ul>
									<li>
										To be leading distribution company in Kenya, Uganda and
										Tanzania.
									</li>
									<li>
										To establish strong and create wider network of dealers.
									</li>
									<li>
										To supply quality brands that best fits our distribution
										Model.
									</li>
									<li>
										Provide best possible service for all the brands and
										products that we represent.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
