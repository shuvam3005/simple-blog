import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actions';
import Post from '../../components/Post';

class PostsList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const renderPostList = this.props.posts.map((post) => {
			return (
				<Post
					key={post.id}
					title={post.title}
					desc={post.description}
					image={post.image}
				/>
			);
		});
		return <div className="ui relaxed list">{renderPostList}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		posts: Object.values(state.posts),
	};
};

const mapDispatchToProps = {
	fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
