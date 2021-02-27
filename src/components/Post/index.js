import React from 'react';

const Post = ({ title, desc, image }) => {
	return (
		<div className="ui item ">
			<div className="ui container segment">
				<img
					className="ui centered  image"
					src={image}
					onError={(e) =>
						(e.target.src =
							'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
					}
					alt={title}
				/>
				<div className=" ui segment">
					<div className="right floated content">
						<div className="meta">2 days ago</div>
					</div>
					<div className="content">
						<h2 className="header">{title}</h2>
						<div className="ui  divider"></div>
						<div className="description">{desc}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
