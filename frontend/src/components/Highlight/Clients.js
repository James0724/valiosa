import React, { Component } from 'react';

import Slider from 'react-slick';

class Clients extends Component {
	render() {
		var settings = {
			dots: false,
			pauseOnHover: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			speed: 5000,
			autoplaySpeed: 5000,
			cssEase: 'linear',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};
		return (
			<div className="container" mt-3 mb-3>
				<div className="title1">
					<h4>Special Thanks to</h4>
					<h2 className="title-inner1">Our Clients</h2>
				</div>
				<Slider {...settings}>
					<div style={{ width: '155px' }}>
						<div className="slick_items">
							<div className="slick_Item_track">
								<img
									src="/assets/images/clients/baltimore.jpg"
									className="img-fluid"
									alt="Furnitures"
								/>
							</div>
						</div>
					</div>

					<div style={{ width: '155px' }}>
						<div className="slick_items">
							<div className="slick_Item_track">
								<img
									src="/assets/images/clients/ckl.jpg"
									className="w-100"
									alt="Furnitures"
								/>
							</div>
						</div>
					</div>
					<div style={{ width: '155px' }}>
						<div className="slick_items">
							<div className="slick_Item_track">
								<img
									src="/assets/images/clients/dots.jpg"
									className="w-100"
									alt="Furnitures"
								/>
							</div>
						</div>
					</div>
					<div style={{ width: '155px' }}>
						<div className="slick_items">
							<div className="slick_Item_track">
								<img
									src="/assets/images/clients/eastmoregirls.jpg"
									className="w-100"
									alt="Furnitures"
								/>
							</div>
						</div>
					</div>
					<div style={{ width: '155px' }}>
						<div className="slick_items">
							<div className="slick_Item_track">
								<img
									src="/assets/images/clients/elveneno.jpg"
									className="w-100"
									alt="Furnitures"
								/>
							</div>
						</div>
					</div>
					<div style={{ width: '155px' }}>
						<div className="slick_items">
							<div className="slick_Item_track">
								<img
									src="/assets/images/clients/lymies.jpg"
									className="w-100"
									alt="Furnitures"
								/>
							</div>
						</div>
					</div>
					<div style={{ width: '155px' }}>
						<div className="slick_items">
							<div className="slick_Item_track">
								<img
									src="/assets/images/clients/vultravetis.jpg"
									className="w-100"
									alt="Furnitures"
								/>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		);
	}
}
export default Clients;
