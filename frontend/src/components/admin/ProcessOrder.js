import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MetaData from '../layout/MetaData';
import Loader from '../layout/Loader';
import Sidebar from './Sidebar';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import {
	getOrderDetails,
	updateOrder,
	clearErrors,
} from '../../actions/orderActions';
import { UPDATE_ORDER_RESET } from '../../constants/orderConstants';

const ProcessOrder = ({ match }) => {
	const [status, setStatus] = useState('');

	const alert = useAlert();
	const dispatch = useDispatch();

	const { loading, order = {} } = useSelector((state) => state.orderDetails);
	const {
		shippingInfo,
		orderItems,
		paymentInfo,
		user,
		totalPrice,
		orderStatus,
	} = order;
	const { error, isUpdated } = useSelector((state) => state.order);

	const orderId = match.params.id;

	useEffect(() => {
		dispatch(getOrderDetails(orderId));

		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}

		if (isUpdated) {
			alert.success('Order updated successfully');
			dispatch({ type: UPDATE_ORDER_RESET });
		}
	}, [dispatch, alert, error, isUpdated, orderId]);

	const updateOrderHandler = (id) => {
		const formData = new FormData();
		formData.set('status', status);

		dispatch(updateOrder(id, formData));
	};

	const shippingDetails =
		shippingInfo &&
		`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`;
	const isPaid =
		paymentInfo && paymentInfo.status === 'succeeded' ? true : false;

	return (
		<Fragment>
			<div className="container">
				<MetaData title={`Process Order # ${order && order._id}`} />
				<div className="row">
					<div className="col-12 col-md-3">
						<Sidebar />
					</div>

					<div className="col-12 col-md-9">
						<Fragment>
							{loading ? (
								<Loader />
							) : (
								<div className="row d-flex justify-content-around">
									<div className="col-12 col-lg-7 order-details">
										<h2 className="my-5">Order # {order._id}</h2>

										<h4 className="mb-4">Shipping Info</h4>
										<p>
											<b>Name:</b> {user && user.name}
										</p>
										<p>
											<b>Phone:</b> {shippingInfo && shippingInfo.phoneNo}
										</p>
										<p className="mb-4">
											<b>Address:</b>
											{shippingDetails}
										</p>
										<p>
											<b>Amount:</b> ksh {totalPrice}/=
										</p>

										<hr />

										<h4 className="my-4">Payment</h4>
										<p className={isPaid ? 'greenColor' : 'redColor'}>
											<b>{isPaid ? 'PAID' : 'Cash on Delivery'}</b>
										</p>

										<h4 className="my-4">Order Status:</h4>
										<p
											className={
												order.orderStatus &&
												String(order.orderStatus).includes('Delivered')
													? 'greenColor'
													: 'redColor'
											}>
											<b>{orderStatus}</b>
										</p>

										<h4 className="my-4">Order Items:</h4>

										<hr />
										<div className="cart-item my-1">
											{orderItems &&
												orderItems.map((item) => (
													<div key={item.product} className="row my-5">
														<div class="col-lg-8 mx-auto">
															<ul class="list-group shadow bg">
																<li class="list-group-item">
																	<div class="media align-items-lg-center flex-column flex-lg-row p-3">
																		<div class="media-body order-2 order-lg-1">
																			<h5 class="mt-0 font-weight-bold mb-2">
																				<Link to={`/products/${item.product}`}>
																					{item.name}
																				</Link>
																			</h5>

																			<h6 class="font-weight-bold my-2">
																				<div className="col-4 col-lg-2 mt-4 mt-lg-0">
																					<p>{item.quantity} Piece(s)</p>
																				</div>
																			</h6>

																			<div class="d-flex align-items-center justify-content-between mt-1">
																				<h6 class="font-weight-bold my-2">
																					<div className="col-4 col-lg-2 mt-4 mt-lg-0">
																						<p>kes {item.price}/=</p>
																					</div>
																				</h6>
																			</div>
																		</div>
																		<img
																			src={item.image}
																			alt={item.name}
																			width="200"
																			class="ml-lg-5 order-1 order-lg-2"
																		/>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												))}
										</div>
										<hr />
									</div>

									<div className="col-12 col-lg-3 mt-5">
										<h4 className="my-4">Status</h4>

										<div className="form-group">
											<select
												className="form-control"
												name="status"
												value={status}
												onChange={(e) => setStatus(e.target.value)}>
												<option value="Processing">Processing</option>
												<option value="Shipped">Shipped</option>
												<option value="Delivered">Delivered</option>
											</select>
										</div>

										<button
											className="btn btn-primary btn-block"
											onClick={() => updateOrderHandler(order._id)}>
											Update Status
										</button>
									</div>
								</div>
							)}
						</Fragment>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ProcessOrder;
