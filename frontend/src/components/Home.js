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
	const [category, setCategory] = useState('');
	const [rating, setRating] = useState(0);

	const categories = [
		'Stationery',
		'IT',
		'Furniture',
		'Branding',
		'Accessories',
	];

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

		dispatch(getProducts(keyword, currentPage, category, rating));
	}, [dispatch, alert, error, keyword, currentPage, category, rating]);

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
									{keyword ? (
										<Fragment>
											<div className="col-6 col-md-3 mt-5 mb-5">
												<div className="px-5">
													<div className="mt-5">
														<h4 className="mb-3">Categories</h4>

														<ul className="pl-0">
															{categories.map((category) => (
																<li
																	style={{
																		cursor: 'pointer',
																		listStyleType: 'none',
																	}}
																	key={category}
																	onClick={() => setCategory(category)}>
																	{category}
																</li>
															))}
														</ul>
													</div>

													<hr className="my-3" />

													<div className="mt-5">
														<h4 className="mb-3">Ratings</h4>

														<ul className="pl-0">
															{[5, 4, 3, 2, 1].map((star) => (
																<li
																	style={{
																		cursor: 'pointer',
																		listStyleType: 'none',
																	}}
																	key={star}
																	onClick={() => setRating(star)}>
																	<div className="rating-outer">
																		<div
																			className="rating-inner"
																			style={{
																				width: `${star * 20}%`,
																			}}></div>
																	</div>
																</li>
															))}
														</ul>
													</div>
												</div>
											</div>

											<div className="col-6 col-md-9">
												<div className="row">
													{products.map((product) => (
														<Product
															key={product._id}
															product={product}
															col={3}
														/>
													))}
												</div>
											</div>
										</Fragment>
									) : (
										products.map((product) => (
											<Product key={product._id} product={product} col={3} />
										))
									)}
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
