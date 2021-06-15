import React, { Fragment, useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import AOS from 'aos';

import MetaData from './layout/MetaData';
import Product from './product/Product';
import Loader from './layout/Loader';

import Carousel from 'react-bootstrap/Carousel';
import HighlightInfo from '../components/Highlight/HighlightInfo';
import TopBrands from './Highlight/TopBrands';
import Advert from '../components/Highlight/Advert';
import Clients from '../components/Highlight/Clients';

import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { getProducts } from '../actions/productActions';

const Home = ({ match }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const alert = useAlert();
	const dispatch = useDispatch();

	const {
		loading,
		products,
		error,
		productsCount,
		resPerPage,
		filteredProductsCount,
	} = useSelector((state) => state.products);

	const keyword = match.params.keyword;

	useEffect(() => {
		if (error) {
			return alert.error(error);
		}
		AOS.init({ duration: 3000 });

		dispatch(getProducts(keyword, currentPage));
	}, [dispatch, alert, error, keyword, currentPage]);

	function setCurrentPageNo(pageNumber) {
		setCurrentPage(pageNumber);
	}

	let count = productsCount;
	if (keyword) {
		count = filteredProductsCount;
	}

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<div className="container container-fluid bg">
						<MetaData title={'Buy Best Products Online'} />
						<Carousel className="carousel">
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="/images/banner.jpg"
									alt="carousel"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="/images/Konica.jpg"
									alt="carousel"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="/images/Maped.jpg"
									alt="carousel"
								/>
							</Carousel.Item>
						</Carousel>
						<div className="container container-fluid bg">
							<hr />
							<TopBrands />
							<hr />
							<div className="title1" data-aos="fade-right">
								<h4>Special product</h4>
								<h2 className="title-inner1">Featured Products</h2>
							</div>
							<section
								id="products"
								className="container mt-2"
								data-aos="fade-right">
								<div className="row">
									{products.map((product) => (
										<Product key={product._id} product={product} col={3} />
									))}
								</div>
							</section>
							{resPerPage <= count && (
								<div className="d-flex justify-content-center mt-5">
									<Pagination
										activePage={currentPage}
										itemsCountPerPage={resPerPage}
										totalItemsCount={productsCount}
										onChange={setCurrentPageNo}
										nextPageText={'Next'}
										prevPageText={'Prev'}
										firstPageText={'First'}
										lastPageText={'Last'}
										itemClass="page-item"
										linkClass="page-link"
									/>
								</div>
							)}
						</div>
					</div>
					<HighlightInfo />
					<Advert />
					<Clients />
				</Fragment>
			)}
		</Fragment>
	);
};

export default Home;
