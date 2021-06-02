import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MetaData from '../layout/MetaData';
import Loader from '../layout/Loader';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails, clearErrors } from '../../actions/orderActions';

const OrderDetails = ({ match }) => {
	const alert = useAlert();
	const dispatch = useDispatch();

	const {
		loading,
		error,
		order = {},
	} = useSelector((state) => state.orderDetails);
	const {
		shippingInfo,
		orderItems,
		paymentInfo,
		user,
		totalPrice,
		orderStatus,
	} = order;

	useEffect(() => {
		dispatch(getOrderDetails(match.params.id));

		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [dispatch, alert, error, match.params.id]);

	const shippingDetails =
		shippingInfo &&
		`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`;

	const isPaid =
		paymentInfo && paymentInfo.status === 'succeeded' ? true : false;

	return (
		<Fragment>
			<div className="container">
				<MetaData title={'Order Details'} />

				{loading ? (
					<Loader />
				) : (
					<Fragment>
						<div className="mt-5 mb-3">
							<div className="title1">
								<h4>Order #</h4>
								<h2 className="title-inner1">{order._id}</h2>
							</div>
							<div className="title1">
								<h4>Order Info</h4>
							</div>

							<div className="order-details">
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
									<b>Amount:</b> kes {totalPrice}/=
								</p>
								<div className="d-flex">
									<p>
										<b>Payment</b>
									</p>
									<p className={isPaid ? 'greenColor' : 'redColor'}>
										{isPaid ? 'Paid' : 'Cash On Delivery'}
									</p>
								</div>
								<div className="d-flex">
									<p>
										<b>Order Status</b>
									</p>
									<p
										className={
											order.orderStatus &&
											String(order.orderStatus).includes('Delivered')
												? 'greenColor'
												: 'redColor'
										}>
										<b>{orderStatus}</b>
									</p>
								</div>

								<hr />

								<div className="title1">
									<h4>Order Items</h4>
								</div>

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
						</div>
					</Fragment>
				)}
			</div>
		</Fragment>
	);
};

export default OrderDetails;
