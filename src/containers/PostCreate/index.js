import React, { Component } from 'react';
import Form from '../../components/Form';
import Field from '../../components/Field';

class PostCreate extends Component {
	state = {
		title: '',
		image: '',
		description: '',
	};
	onTitleChange = (title) => {
		console.log('hello');
		this.setState({ title });
	};

	onImageChange = (image) => {
		console.log('img');
		this.setState({ image });
	};

	onDescriptionChange = (description) => {
		console.log('desc');
		this.setState({ description });
	};

	render() {
		return (
			<Form>
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

export default PostCreate;
