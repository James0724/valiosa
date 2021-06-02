import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MetaData from '../layout/MetaData';
import { useSelector } from 'react-redux';

const OrderSuccess = () => {
	const { user } = useSelector((state) => state.auth);
	return (
		<Fragment>
			<MetaData title={'Order Success'} />

			<div className="row justify-content-center">
				<div className="col-6 mt-5 text-center">
					<img
						className="my-5 img-fluid d-block mx-auto"
						src="/images/order_success.png"
						alt="Order Success"
						width="200"
						height="200"
					/>

					<h2>Order confirmation</h2>
					<p>{user.name}, Thank You for your order</p>
					<br />
					<p>
						we've received your order and we will contact you as soon as your
						package is ready to be shipped or picked
					</p>
					<br />
					<p>you can find your order information via the button below</p>

					<Link to="/orders/me" className="btn btn-solid">
						View Order
					</Link>
				</div>
			</div>
		</Fragment>
	);
};

export default OrderSuccess;
