import React from 'react';

const Field = ({ type, label, value, onChange }) => {
	if (type === 'text') {
		return (
			<div className="ui field">
				<label>
					{label}
					<input
						type="text"
						value={value}
						onChange={(e) => onChange(e.target.value)}
					/>
				</label>
			</div>
		);
	} else if (type === 'textarea') {
		return (
			<div className="ui field">
				<label>
					{label}
					<textarea
						value={value}
						onChange={(e) => onChange(e.target.value)}
					></textarea>
				</label>
			</div>
		);
	}
	return null;
};

export default Field;
