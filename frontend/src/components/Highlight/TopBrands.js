import React from 'react';
import { Link } from 'react-router-dom';

const TopBrands = () => {
	return (
		<section className="featured_manufacturers " data-aos="fade-right">
			<ul className="block-manufacturers__list row align-items-center">
				<li className="block-manufacturers__item col">
					
						<img alt="Epson" src="/images/espn.jpg" />
					
				</li>

				<li className="block-manufacturers__item col">
					
						<img alt="Kyocera" src="/images/kyocera.jpg" />
					
				</li>

				<li className="block-manufacturers__item col">
					
						<img alt="LEGO" src="/images/lego.jpg" />
					
				</li>

				<li className="block-manufacturers__item col">
					
						<img alt="Play-Doh" src="/images/playdoh.jpg" />
					
				</li>

				<li className="block-manufacturers__item col">
					
						<img alt="Pelikan" src="/images/pelican.jpg" />
					
				</li>

				<li className="block-manufacturers__item col">
					
						<img alt="Bic" src="/images/bic.jpg" />
					
				</li>
			</ul>
		</section>
	);
};

export default TopBrands;
