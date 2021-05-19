import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
	return (
		<section data-aos="fade-left" className="category">
			<h4 className="pl-15">Shop by Category</h4>
			<div className="row">
				<div className="col mb-lg-0">
					<figure className="photo purple">
						<img
							src="/images/advert1.jpg"
							className="w-100"
							alt="stationeries"
						/>
						<figcaption>
							<h2>
								<span>Stationery</span>
							</h2>
						</figcaption>
						<Link to="!#"></Link>
					</figure>
				</div>
				<div className="col mb-lg-0">
					<figure className="photo blue">
						<img src="/images/advert3.jpg" className="w-100" alt="IT" />
						<figcaption>
							<h2>
								<span>IT</span>
							</h2>
						</figcaption>
						<Link to="!#"></Link>
					</figure>
				</div>
				<div className="col mb-lg-0">
					<figure className="photo purple">
						<img
							src="/images/Branding.jpg"
							className="w-100"
							alt="Furnitures"
						/>
						<figcaption>
							<h2>
								<span>Furnitures</span>
							</h2>
						</figcaption>
						<Link to="!#"></Link>
					</figure>
				</div>
				<div className="col mb-lg-0">
					<figure className="photo blue">
						<img src="/images/advert3.jpg" className="w-100" alt="IT" />
						<figcaption>
							<h2>
								<span>Branding</span>
							</h2>
						</figcaption>
						<Link to="!#"></Link>
					</figure>
				</div>
			</div>
		</section>
	);
};

export default Category;
