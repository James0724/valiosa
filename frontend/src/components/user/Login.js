import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../layout/Loader';
import MetaData from '../layout/MetaData';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearErrors } from '../../actions/userActions';

const Login = ({ history, location }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const alert = useAlert();
	const dispatch = useDispatch();

	const { isAuthenticated, error, loading } = useSelector(
		(state) => state.auth
	);

	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(() => {
		if (isAuthenticated) {
			history.push(redirect);
		}

		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [dispatch, alert, isAuthenticated, error, redirect, history]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<MetaData title={'Login'} />
					<section className="login-page  mt-5 mb-5 section-b-space">
						<div className="container  login-bg">
							<div className="row">
								<div className="col-lg-6">
									<h3>Login</h3>
									<div className="theme-card">
										<form className="theme-form" onSubmit={submitHandler}>
											<div className="form-group">
												<label htmlFor="email">Email</label>
												<input
													type="text"
													className="form-control"
													id="email"
													placeholder="Email"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
											<div className="form-group">
												<label htmlFor="review">Password</label>
												<input
													type="password"
													className="form-control"
													id="review"
													placeholder="Enter your password"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
												/>
											</div>
											<button className="btn btn-solid" onClick={submitHandler}>
												Login
											</button>
										</form>
									</div>
								</div>
								<div className="col-lg-6 right-login">
									<h3>New Customer</h3>
									<div className="theme-card authentication-right">
										<h6 className="title-font">Create Account</h6>
										<p>
											Sign up for a free account at our store. Registration is
											quick and easy. It allows you to be able to order from our
											shop.
										</p>
										<Link to="/register" className="btn btn-solid">
											Create an Account
										</Link>
									</div>
								</div>
							</div>
						</div>
					</section>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Login;
