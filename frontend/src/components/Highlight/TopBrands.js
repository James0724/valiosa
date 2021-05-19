import React from 'react';
import { Link } from 'react-router-dom';

const TopBrands = () => {
	return (
		<section className="featured_manufacturers " data-aos="fade-right">
			<ul className="block-manufacturers__list row align-items-center">
				<li className="block-manufacturers__item col">
					<Link title="Epson" to="/catalogue/manufacturer/epson/">
						<img alt="Epson" src="/images/espn.jpg" />
					</Link>
				</li>

				<li className="block-manufacturers__item col">
					<Link title="Kyocera" to="/catalogue/manufacturer/kyocera/">
						<img alt="Kyocera" src="/images/kyocera.jpg" />
					</Link>
				</li>

				<li className="block-manufacturers__item col">
					<Link title="LEGO" to="/catalogue/manufacturer/lego/">
						<img alt="LEGO" src="/images/lego.jpg" />
					</Link>
				</li>

				<li className="block-manufacturers__item col">
					<Link title="Play-Doh" to="/catalogue/manufacturer/play-doh/">
						<img alt="Play-Doh" src="/images/playdoh.jpg" />
					</Link>
				</li>

				<li className="block-manufacturers__item col">
					<Link title="Pelikan" to="/catalogue/manufacturer/pelikan/">
						<img alt="Pelikan" src="/images/pelican.jpg" />
					</Link>
				</li>

				<li className="block-manufacturers__item col">
					<Link title="Bic" to="/catalogue/manufacturer/bic/">
						<img alt="Bic" src="/images/bic.jpg" />
					</Link>
				</li>
			</ul>
		</section>
	);
};

export default TopBrands;
