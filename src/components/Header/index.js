import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<div className="ui container">
				<Link to="/" className="item">
					<strong>&lt;RBlogs &#47;&gt;</strong>
				</Link>
				<div className="right menu">
					<Link to="/new" className="item">
						New Post
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
