import React from 'react';

const Advert = () => {
	return (
		<section className="p-4 text-center mb-4  mt-4" data-aos="fade-right">
			<div className="container advert-container">
				<div className="advert">
					<div class="overlay"></div>
					<video
						playsinline="playsinline"
						autoplay="autoplay"
						muted="muted"
						loop="loop">
						<source src="/videos/intro.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
			{/* <div className="row justify-content-center">
				<div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
					<img
						src="/images/advert8.jpg"
						className="w-100 image-fluid shadow rounded mb-2"
						alt=""
						style={{ height: '40rem' }}
					/>
				</div>

				<div className="col-lg-4 mb-lg-0">
					<img
						src="/images/advert2.jpg"
						className="w-100 shadow rounded mb-4"
						alt=""
						style={{ height: '19rem' }}
					/>

					<img
						src="/images/advert3.jpg"
						className="w-100 shadow rounded"
						alt=""
						style={{ height: '19rem' }}
					/>
				</div>
				<div className="col-lg-4 col-md-12 mb-lg-0">
					<img
						src="/images/advert4.jpg"
						className="w-100 shadow rounded mb-2"
						alt=""
						style={{ height: '40rem' }}
					/>
				</div>
			</div> */}
		</section>
	);
};

export default Advert;
