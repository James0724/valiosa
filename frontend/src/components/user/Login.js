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

					<div className="container h-100 margin-login">
						<div className="d-flex justify-content-center h-100">
							<div className="user_card">
								<div className="d-flex justify-content-center">
									<div className="brand_logo_container">
										<img
											src="/images/Valiosa_logo.png"
											alt="logo"
											className="brand_logo"
										/>
									</div>
								</div>
								<div className="d-flex justify-content-center form_container">
									<form onSubmit={submitHandler}>
										<div className="input-group mb-3">
											<div className="input-group-append">
												<span className="input-group-text">
													<i className="bi bi-person"></i>
												</span>
											</div>
											<input
												type="text"
												name=""
												className="form-control input_user"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												placeholder="Email"
											/>
										</div>
										<div className="input-group mb-2">
											<div className="input-group-append">
												<span className="input-group-text">
													<i className="fa fa-key"></i>
												</span>
											</div>
											<input
												type="password"
												name=""
												className="form-control input_pass"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
												placeholder="password"
											/>
										</div>

										<div className="d-flex justify-content-center mt-3 login_container">
											<button
												id="login_button"
												type="submit"
												className="btn btn-block login_btn">
												Login
											</button>
										</div>
									</form>
								</div>

								<div className="mt-4">
									<div
										className="d-flex justify-content-center links"
										style={{ color: 'white' }}>
										Don't have an account?
										<Link
											style={{ color: '#ca76d8' }}
											to="/register"
											className="ml-2">
											Sign Up
										</Link>
									</div>
									<div className="d-flex justify-content-center links">
										<Link style={{ color: '#ca76d8' }} to="/password/forgot">
											Forgot your password?
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <div className="row wrapper">
						<div className="col-10 col-lg-5">
							<form className="shadow-lg" onSubmit={submitHandler}>
								<h1 className="mb-3">Login</h1>
								<div className="form-group">
									<label htmlFor="email_field">Email</label>
									<input
										type="email"
										id="email_field"
										className="form-control"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="password_field">Password</label>
									<input
										type="password"
										id="password_field"
										className="form-control"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>

								<Link to="/password/forgot" className="float-right mb-4">
									Forgot Password?
								</Link>

								<button
									id="login_button"
									type="submit"
									className="btn btn-block py-3">
									LOGIN
								</button>

								<Link to="/register" className="float-right mt-3">
									New User?
								</Link>
							</form>
						</div>
					</div> */}
				</Fragment>
			)}
		</Fragment>
	);
};

export default Login;
