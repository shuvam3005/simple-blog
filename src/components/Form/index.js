import React from 'react';
import Field from '../Field';

const Form = ({ children }) => {
	return (
		<div className="ui container segment">
			<form className="ui form">
				{children}
				<button className="ui button blue">Submit</button>
			</form>
		</div>
	);
};

export default Form;
