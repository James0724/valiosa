import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MetaData from '../layout/MetaData';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, clearErrors } from '../../actions/orderActions';
import { CART_RESET } from '../../constants/cartConstants';

const Shipping = ({ history }) => {
	const dispatch = useDispatch();
	const alert = useAlert();

	const { shippingInfo, cartItems } = useSelector((state) => state.cart);
	const { user } = useSelector((state) => state.auth);
	const { error } = useSelector((state) => state.newOrder);

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [dispatch, alert, error]);

	// Calculate Order Prices
	const itemsPrice = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	//const shippingPrice = itemsPrice > 2000 ? 0 : 200;
	const totalPrice = itemsPrice.toFixed(2);

	const [address, setAddress] = useState(shippingInfo.address);
	const [city, setCity] = useState(shippingInfo.city);
	const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
	const [name, setName] = useState(user.name);

	const order = {
		orderItems: cartItems,
		shippingInfo,
		totalPrice,
	};

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(createOrder(order));

		history.push('/success');
	};

	return (
		<Fragment>
			<MetaData title={'Shipping Info'} />
			<div className="container">
				<div className="row mt-3 mb-3">
					<div className="col-12 col-lg-7">
						<div id="accordion">
							<div class="card">
								<div class="card-header" id="headingOne">
									<h5 class="mb-0">
										<label>
											<input
												type="radio"
												name="radio"
												class="btn btn-link"
												data-toggle="collapse"
												data-target="#collapseOne"
												aria-controls="collapseOne"
											/>
											<span>
												Pick up from our stores (Order will be ready for pick
												up)
											</span>
										</label>
									</h5>
								</div>

								<div
									id="collapseOne"
									class="collapse"
									aria-labelledby="headingOne"
									data-parent="#accordion">
									<div class="card-body">
										<form className="theme-form" onSubmit={submitHandler}>
											<h5 className="pl-5">Who will collect the Order</h5>
											<div className="form-group field-label pl-5">
												<label htmlFor="email">Name</label>
												<input
													type="text"
													className="form-control"
													id="email"
													placeholder="Name"
												/>
											</div>
											<div className="form-group field-label pl-5">
												<label htmlFor="review">Phone Number</label>
												<input
													type="text"
													className="form-control"
													id="review"
													placeholder="Enter Phone Number"
												/>
											</div>
											<button
												className="ml-5 btn btn-solid"
												onClick={submitHandler}>
												Place Order
											</button>
										</form>
									</div>
								</div>
							</div>
							<div class="card">
								<div class="card-header " id="headingTwo">
									<h5 class="mb-0">
										<label>
											<input
												type="radio"
												name="radio"
												class="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseTwo"
												aria-controls="collapseTwo"
											/>
											<span>Deliver to my address (home or office)</span>
										</label>
									</h5>
								</div>
								<div
									id="collapseTwo"
									class="collapse"
									aria-labelledby="headingTwo"
									data-parent="#accordion">
									<div class="card-body">
										<form className="theme-form" onSubmit={submitHandler}>
											<div className="form-group field-label pl-5">
												<label htmlFor="review">Name</label>
												<input
													type="text"
													className="form-control"
													id="review"
													placeholder="Enter your Name"
													value={name}
													onChange={(e) => setName(e.target.value)}
												/>
											</div>
											<div className="form-group field-label pl-5">
												<label htmlFor="email">Phone Number</label>
												<input
													type="text"
													className="form-control"
													id="PhoneNo"
													placeholder="Phone Number"
													value={phoneNo}
													onChange={(e) => setPhoneNo(e.target.value)}
												/>
											</div>

											<div className="form-group field-label pl-5">
												<label htmlFor="review">Delivery Address</label>
												<input
													type="text"
													className="form-control"
													id="review"
													placeholder="Enter your Address"
													value={address}
													onChange={(e) => setAddress(e.target.value)}
												/>
											</div>
											<div className="form-group field-label pl-5">
												<label htmlFor="review">City</label>
												<input
													type="text"
													className="form-control"
													id="review"
													placeholder="Enter your City"
													value={city}
													onChange={(e) => setCity(e.target.value)}
												/>
											</div>
											<button
												className=" ml-5 btn btn-solid "
												onClick={submitHandler}>
												Place Order
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-5">
						<div id="order_summary">
							<h4> Your Order Summary</h4>
							<hr />
							<table className="table cart-table table-responsive-xs">
								<thead>
									<tr className="table-head">
										<th scope="col">image</th>
										<th scope="col">product name</th>
										<th scope="col">quantity</th>
									</tr>
								</thead>
								{cartItems.map((item) => (
									<tbody key={item.product}>
										<tr>
											<td>
												<Link to={`/product/${item.product}`}>
													<img
														src={item.image}
														alt={item.name}
														style={{ width: '80px', height: '40px' }}
													/>
												</Link>
											</td>
											<td>
												<Link
													style={{ textDecoration: 'none', color: '#222222' }}
													to={`/product/${item.product}`}>
													{item.name}
												</Link>
											</td>

											<td>
												<h6 className="td-color pl-3">{item.quantity}</h6>
											</td>
										</tr>
									</tbody>
								))}
							</table>
							<hr />
							<p>
								Total items in cart:
								<span className="order-summary-values">
									{cartItems.reduce(
										(acc, item) => acc + Number(item.quantity),
										0
									)}
									(Items)
								</span>
							</p>
							<p>
								Total cost: ksh{' '}
								<p>
									<span className="order-summary-values">kes{totalPrice}</span>
								</p>
							</p>
							<hr />
							<Link
								to="/cart"
								id="checkout_btn"
								className="btn btn-primary btn-block">
								Edit
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Shipping;
