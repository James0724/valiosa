import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './product.css';

import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { addItemToCart } from '../../actions/cartActions';

const Product = ({ product, col }) => {
	const dispatch = useDispatch();
	const alert = useAlert();

	const [quantity, setQuantity] = useState(1);

	const matchParams = product._id;
	const addToCart = () => {
		dispatch(addItemToCart(matchParams, quantity));
		alert.success('Item Added to Cart');
	};

	const addQuantity = () => {
		const count = document.querySelector('.count');
		if (count.valueAsNumber >= product.stock) return;

		const qty = count.valueAsNumber + 1;
		setQuantity(qty);
	};

	return (
		<div className={`col-sm-8 col-md-3 col-lg-${col} my-2`}>
			<div className="row">
				<div className="product-grid5">
					<div className="product-image5">
						<Link to={`/product/${product._id}`}>
							<img
								src={product.images[0].url}
								className="img-responsive"
								alt={product.name}
							/>
						</Link>
						<ul className="social">
							<li>
								<Link className="details" to={`/product/${product._id}`}>
									<i className="fa fa-search"></i>
								</Link>
							</li>

							<li>
								<Link to="#" data-tip="Add to Cart" onClick={addToCart}>
									<i className="fa fa-shopping-cart"></i>
									<div style={{ display: 'none' }}>
										<input
											onClick={addQuantity}
											type="number"
											className="form-control count d-inline"
											value={quantity}
											readOnly
										/>
									</div>
								</Link>
							</li>
						</ul>
					</div>
					<div className="product-content">
						<h3 className="title">
							<Link className="details" to={`/product/${product._id}`}>
								{product.name}
							</Link>
						</h3>
						<div className="price">ksh {product.price}/=</div>
						<div className="rating-outer">
							<div
								className="rating-inner"
								style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
