import React, { Component } from 'react';
import Slider from 'react-slick';

import './Elements.css';

class ElementSlider extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<section className="section-b-space">
						<Slider className="slide-1 home-slider">
							<div>
								<div
									className="home home1 p-center text-center bg-size blur-up lazyloaded"
									style={{
										backgroundImage: 'url(/images/Maped.jpg)',
									}}>
									<div className="container">
										<div className="row">
											<div className="col">
												<div className="slider-contain">
													<div>
														<h4>welcome to fashion</h4>
														<h1>women fashion</h1>
														<a href="#" className="btn btn-solid">
															shop now
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div
									className="home home2 p-center text-center bg-size blur-up lazyloaded"
									style={{
										backgroundImage: 'url(/images/Konica.jpg)',
									}}>
									<div className="container">
										<div className="row">
											<div className="col">
												<div className="slider-contain">
													<div>
														<h4>welcome to fashion</h4>
														<h1>men fashion</h1>
														<a href="#" className="btn btn-solid">
															shop now
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Slider>
					</section>
				</div>
			</div>
		);
	}
}

export default ElementSlider;
