import React from 'react';

const Advert = () => {
	return (
		<section className="p-4 text-center mb-2  mt-4 hide" data-aos="fade-right">
			<div className="container advert-container">
				<div className="advert">
					<div className="overlay"></div>
					<video
						playsInline="playsinline"
						autoPlay="autoplay"
						muted="muted"
						loop="loop">
						<source src="/videos/intro.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</section>
	);
};

export default Advert;
