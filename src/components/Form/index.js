import React from 'react';
import Field from '../Field';

const Form = ({ onSubmit, children }) => {
	const onFormSubmit = (event) => {
		event.preventDefault();
		onSubmit();
	};

	return (
		<div className="ui container segment">
			<form className="ui form" onSubmit={onFormSubmit}>
				{children}
				<button className="ui button blue">Submit</button>
			</form>
		</div>
	);
};

export default Form;
