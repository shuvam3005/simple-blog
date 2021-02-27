import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions';
import Form from '../../components/Form';
import Field from '../../components/Field';

class PostCreate extends Component {
	state = {
		title: '',
		image: '',
		description: '',
	};
	onTitleChange = (title) => {
		this.setState({ title });
	};

	onImageChange = (image) => {
		this.setState({ image });
	};

	onDescriptionChange = (description) => {
		this.setState({ description });
	};

	onFormSubmit = () => {
		this.props.createPost({
			title: this.state.title,
			image: this.state.image,
			description: this.state.description,
		});
	};

	render() {
		return (
			<Form onSubmit={this.onFormSubmit}>
				<Field
					type="text"
					label="Title"
					value={this.state.title}
					onChange={this.onTitleChange}
				/>
				<Field
					type="text"
					label="Image"
					value={this.state.image}
					onChange={this.onImageChange}
				/>
				<Field
					type="textarea"
					label="Description"
					value={this.state.description}
					onChange={this.onDescriptionChange}
				/>
			</Form>
		);
	}
}

const mapDispatchToProps = {
	createPost,
};

export default connect(null, mapDispatchToProps)(PostCreate);
