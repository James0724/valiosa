import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import MetaData from '../layout/MetaData';

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../actions/cartActions';

const Cart = ({ history }) => {
	const dispatch = useDispatch();

	const { cartItems } = useSelector((state) => state.cart);

	const removeCartItemHandler = (id) => {
		dispatch(removeItemFromCart(id));
	};

	const increaseQty = (id, quantity, stock) => {
		const newQty = quantity + 1;

		if (newQty > stock) return;

		dispatch(addItemToCart(id, newQty));
	};

	const decreaseQty = (id, quantity) => {
		const newQty = quantity - 1;

		if (newQty <= 0) return;

		dispatch(addItemToCart(id, newQty));
	};

	const checkoutHandler = () => {
		history.push('/login?redirect=shipping');
	};

	return (
		<Fragment>
			<div className="container">
				<MetaData title={'Your Cart'} />
				{cartItems.length > 0 ? (
					<section className="cart-section section-b-space">
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<table className="table cart-table table-responsive-xs">
										<thead>
											<tr className="table-head">
												<th scope="col">image</th>
												<th scope="col">product name</th>
												<th scope="col">price</th>
												<th scope="col">quantity</th>
												<th scope="col">action</th>
												<th scope="col">total</th>
											</tr>
										</thead>
										{cartItems.map((item) => (
											<tbody key={item.product}>
												<tr>
													<td>
														<Link to={`/product/${item.product}`}>
															<img src={item.image} alt={item.name} />
														</Link>
													</td>
													<td>
														<Link to={`/product/${item.product}`}>
															{item.name}
														</Link>
														<div className="mobile-cart-content row">
															<div className="col-xs-3">
																<div className="qty-box">
																	<div className="input-group">
																		<input
																			type="text"
																			name="quantity"
																			className="form-control input-number"
																			value={item.quantity}
																			readOnly
																		/>
																	</div>
																</div>
															</div>
															<div className="col-xs-3">
																<h2 className="td-color">
																	kes
																	{item.price}
																</h2>
															</div>
															<div className="col-xs-3">
																<h2 className="td-color">
																	<button
																		className="icon"
																		onClick={() =>
																			removeCartItemHandler(item.product)
																		}>
																		<i className="icon-close"></i>
																	</button>
																</h2>
															</div>
														</div>
													</td>
													<td>
														<h2>
															kes
															{item.price}
														</h2>
													</td>
													<td>
														<div className="qty-box">
															<div className="input-group">
																<span className="input-group-prepend">
																	<button
																		type="button"
																		className="btn quantity-left-minus"
																		onClick={() =>
																			decreaseQty(item.product, item.quantity)
																		}
																		data-type="minus"
																		data-field="">
																		<i className="fa fa-angle-left"></i>
																	</button>
																</span>
																<input
																	type="text"
																	name="quantity"
																	value={item.quantity}
																	readOnly={true}
																	className="form-control input-number"
																/>

																<span className="input-group-prepend">
																	<button
																		className="btn quantity-right-plus"
																		onClick={() =>
																			increaseQty(
																				item.product,
																				item.quantity,
																				item.stock
																			)
																		}
																		data-type="plus"
																		disabled={
																			item.qty >= item.stock ? true : false
																		}>
																		<i className="fa fa-angle-right"></i>
																	</button>
																</span>
															</div>
														</div>
														{item.qty >= item.stock ? 'out of Stock' : ''}
													</td>
													<td>
														<button
															href="#"
															className="icon"
															onClick={removeCartItemHandler}>
															<i className="fa fa-times"></i>
														</button>
													</td>
													<td>
														<h2 className="td-color">
															kes
															{item.price}
														</h2>
													</td>
												</tr>
											</tbody>
										))}
									</table>
									<table className="table cart-table table-responsive-md">
										<tfoot>
											<tr>
												<td>total price :</td>
												<td>
													<h2>price</h2>
												</td>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>
							<div className="row cart-buttons">
								<div className="col-6">
									<Link to="/home" className="btn btn-solid">
										continue shopping
									</Link>
								</div>
								<div className="col-6">
									<button className="btn btn-solid" onClick={checkoutHandler}>
										check out
									</button>
								</div>
							</div>
						</div>
					</section>
				) : (
					<section className="cart-section section-b-space">
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<div>
										<div className="col-sm-12 empty-cart-cls text-center">
											<h3>
												<strong>Your Cart is Empty</strong>
											</h3>
											<h4>Explore more shortlist some items.</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				)}
			</div>
		</Fragment>
	);
};

export default Cart;
