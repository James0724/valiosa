import React, { Fragment, useState } from 'react';

import MetaData from '../layout/MetaData';
import CheckoutSteps from './CheckoutSteps';

import { useDispatch, useSelector } from 'react-redux';
import { saveShippingInfo } from '../../actions/cartActions';

const CheckOut = ({ history }) => {
	const { shippingInfo } = useSelector((state) => state.cart);

	const [address, setAddress] = useState(shippingInfo.address);
	const [city, setCity] = useState(shippingInfo.city);
	const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(saveShippingInfo({ address, city, phoneNo }));
		history.push('/confirm');
	};

	return (
		<div>
			<MetaData title={'Payment'} />

			<div className="container">
				<div className="checkout-page">
					<div className="checkout-form">
						<form>
							<div className="checkout row">
								<div className="col-lg-6 col-sm-12 col-xs-12">
									<div className="checkout-title">
										<h3>Billing Details</h3>
									</div>
									<div className="row check-out">
										<div className="form-group col-md-6 col-sm-6 col-xs-12">
											<div className="field-label">Phone</div>
											<input
												type="text"
												name="phone"
												value={this.state.phone}
												onChange={this.setStateFromInput}
											/>
										</div>
										<div className="form-group col-md-6 col-sm-6 col-xs-12">
											<div className="field-label">Email Address</div>
											<input
												type="text"
												name="email"
												value={this.state.email}
												onChange={this.setStateFromInput}
											/>
										</div>

										<div className="form-group col-md-12 col-sm-12 col-xs-12">
											<div className="field-label">Address</div>
											<input
												type="text"
												name="address"
												value={address}
												onChange={(e) => setAddress(e.target.value)}
												required
												placeholder="Street address"
											/>
										</div>
										<div className="form-group col-md-12 col-sm-12 col-xs-12">
											<div className="field-label">Town/City</div>
											<input
												type="text"
												name="city"
												value={this.state.city}
												onChange={this.setStateFromInput}
											/>
										</div>
										<div className="form-group col-md-12 col-sm-6 col-xs-12">
											<div className="field-label">County</div>
											<input
												type="text"
												name="state"
												value={this.state.state}
												onChange={this.setStateFromInput}
											/>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-sm-12 col-xs-12">
									<div className="checkout-details">
										<div className="order-box">
											<div className="title-box">
												<div>
													Product <span> Total</span>
												</div>
											</div>
											<ul className="qty">
												{cartItems.map((item, index) => {
													return (
														<li key={index}>
															{item.name} × {item.qty}{' '}
															<span>
																{symbol} {item.sum}
															</span>
														</li>
													);
												})}
											</ul>
											<ul className="sub-total">
												<li>
													Subtotal{' '}
													<span className="count">
														{symbol}
														{total}
													</span>
												</li>
												<li>
													Shipping{' '}
													<div className="shipping">
														<div className="shopping-option">
															<input
																type="checkbox"
																name="free-shipping"
																id="free-shipping"
															/>
															<label htmlFor="free-shipping">
																Shipping service
															</label>
														</div>
														<div className="shopping-option">
															<input
																type="checkbox"
																name="local-pickup"
																id="local-pickup"
															/>
															<label htmlFor="local-pickup">Local Pickup</label>
														</div>
													</div>
												</li>
											</ul>

											<ul className="total">
												<li>
													Total <span className="count"> ksh total</span>
												</li>
											</ul>
										</div>

										<div className="payment-box">
											<div className="upper-box">
												<div className="payment-options">
													<ul>
														<li>
															<div className="radio-option stripe">
																<input
																	type="radio"
																	name="payment-group"
																	id="payment-2"
																	defaultChecked={true}
																	onClick={() => this.checkhandle('stripe')}
																/>
																<label htmlFor="payment-2">Stripe</label>
															</div>
														</li>
														<li>
															<div className="radio-option paypal">
																<input
																	type="radio"
																	name="payment-group"
																	id="payment-1"
																	onClick={() => this.checkhandle('paypal')}
																/>
																<label htmlFor="payment-1">
																	PayPal
																	<span className="image">
																		<img
																			src={`${process.env.PUBLIC_URL}/assets/images/paypal.png`}
																			alt=""
																		/>
																	</span>
																</label>
															</div>
														</li>
														<li>
															<div className="radio-option paypal">
																<input
																	type="radio"
																	name="payment-group"
																	id="payment-1"
																	onClick={() => this.checkhandle('paypal')}
																/>
																<label htmlFor="payment-1">
																	Mpesa
																	<span className="image">
																		<img
																			src={`${process.env.PUBLIC_URL}/assets/images/paypal.png`}
																			alt=""
																		/>
																	</span>
																</label>
															</div>
														</li>
													</ul>
												</div>
											</div>
											{/* {(total !== 0)?
                                                    <div className="text-right">
                                                        {(this.state.payment === 'stripe')? <button type="button" className="btn-solid btn" onClick={() => this.StripeClick()} >Place Order</button>:
                                                         <PaypalExpressBtn env={'sandbox'} client={client} currency={'USD'} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />}
                                                    </div>
                                                    : ''} */}
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckOut;
