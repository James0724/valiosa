import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Loader from '../layout/Loader';
import MetaData from '../layout/MetaData';

const Profile = () => {
	const { user, loading } = useSelector((state) => state.auth);

	return (
		<Fragment>
			<div className="container">
				{loading ? (
					<Loader />
				) : (
					<Fragment>
						<div className="container shadow bg">
							<MetaData title={'Your Profile'} />

							<div className="title1 mt-3 pt-2">
								<h4>Your</h4>
								<h2 className="title-inner1">Profile Page</h2>
							</div>
							<div className="row justify-content-around mt-5 user-info mb-4">
								<div className="col-12 col-md-3">
									<Link
										to="/me/update"
										id="edit_profile"
										className="btn btn-primary btn-block mt-5">
										Edit Profile
									</Link>
									{user.role !== 'admin' && (
										<Link
											to="/orders/me"
											className="btn btn-danger btn-block mt-5">
											My Orders
										</Link>
									)}
									<Link
										to="/password/update"
										className="btn btn-primary btn-block mt-5">
										Change Password
									</Link>
								</div>

								<div className="col-12 col-md-5">
									<h4>Full Name</h4>
									<p>{user.name}</p>

									<h4>Email Address</h4>
									<p>{user.email}</p>

									<h4>Joined On</h4>
									<p>{String(user.createdAt).substring(0, 10)}</p>
								</div>
							</div>
						</div>
					</Fragment>
				)}
			</div>
		</Fragment>
	);
};

export default Profile;
