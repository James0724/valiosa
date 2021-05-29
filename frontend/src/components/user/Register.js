import React, { Fragment, useState, useEffect } from 'react';

import MetaData from '../layout/MetaData';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { register, clearErrors } from '../../actions/userActions';

const Register = ({ history }) => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = user;

	const [avatar, setAvatar] = useState('');
	// const [avatarPreview, setAvatarPreview] = useState(
	// 	'/images/default_avatar.jpg'
	// );

	const alert = useAlert();
	const dispatch = useDispatch();

	const { isAuthenticated, error, loading } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isAuthenticated) {
			history.push('/');
		}

		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
	}, [dispatch, alert, isAuthenticated, error, history]);

	const submitHandler = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.set('name', name);
		formData.set('email', email);
		formData.set('password', password);
		formData.set('avatar', avatar);

		dispatch(register(formData));
	};

	const onChange = (e) => {
		if (e.target.name === 'avatar') {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					//setAvatarPreview(reader.result);
					setAvatar(reader.result);
				}
			};

			reader.readAsDataURL(e.target.files[0]);
		} else {
			setUser({ ...user, [e.target.name]: e.target.value });
		}
	};

	return (
		<Fragment>
			<MetaData title={'Register User'} />
			<section className="register-page section-b-space mt-5 mb-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h3>create account</h3>
							<div className="theme-card">
								<form className="theme-form" onSubmit={submitHandler}>
									<div className="form-row">
										<div className="col-md-6">
											<label htmlFor="email"> Name</label>
											<input
												type="text"
												className="form-control"
												id="fname"
												placeholder=" Name"
												value={name}
												onChange={onChange}
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md-6">
											<label htmlFor="email">email</label>
											<input
												type="text"
												className="form-control"
												id="email"
												placeholder="Email"
												value={email}
												onChange={onChange}
											/>
										</div>
										<div className="col-md-6">
											<label htmlFor="review">Password</label>
											<input
												type="password"
												className="form-control"
												id="review"
												placeholder="Enter your password"
												value={password}
												onChange={onChange}
											/>
										</div>
										<button
											className="btn btn-solid"
											disabled={loading ? true : false}>
											create Account
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Register;
