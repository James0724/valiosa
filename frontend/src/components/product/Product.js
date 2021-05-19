import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, col }) => {
	return (
		<div className={`col-sm-8 col-md-3 col-lg-${col} my-2`}>
			<article class="col-item card p-1 rounded text-center">
				<div class="photo">
					<div class="options-cart-round">
						<button class="btn btn-default" title="Add to cart">
							<span class="fa fa-shopping-cart"></span>
						</button>
					</div>
					<Link to={`/product/${product._id}`}>
						<img
							src={product.images[0].url}
							class="img-responsive"
							alt={product.name}
						/>
					</Link>
				</div>
				<div class="info mt-2">
					<div class="row text-center">
						<h5 className="card-title">
							<Link class="details" to={`/product/${product._id}`}>
								{product.name}
							</Link>
						</h5>
					</div>
					<div className="text-center">
						<p className="card-text text-center">kes {product.price}/=</p>
					</div>
					<Link
						to={`/product/${product._id}`}
						id="view_btn"
						className="btn btn-block mt-3">
						View
					</Link>
				</div>
			</article>
			{/* <div className="card p-3 rounded ">
				<div className="card-img">
					<img
						className="card-img-top mx-auto"
						src={product.images[0].url}
						alt={product.name}
					/>
					<div className="middle">
						<div className="text">Add to cart</div>
					</div>
				</div>
				<div className="card-body d-flex flex-column">
					<h5 className="card-title">
						<Link to={`/product/${product._id}`}>{product.name}</Link>
					</h5>
					<div className="ratings mt-auto">
						<div className="rating-outer">
							<div
								className="rating-inner"
								style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
						</div>
						<span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
					</div>
					<p className="card-text">kes {product.price}/=</p>
					<Link
						to={`/product/${product._id}`}
						id="view_btn"
						className="btn btn-block">
						View Details
					</Link>
				</div>
			</div> */}
		</div>
	);
};

export default Product;
