import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	render() {
		const { type, text, size, disabled } = this.props;

		return <button className={`btn btn-${type} btn-${size} ${disabled ? 'btn-disabled' : ''}`}>{text}</button>;
	}
}

Button.propTypes = {
	type: PropTypes.string,
	text: PropTypes.string,
	size: PropTypes.string,
	disabled: PropTypes.bool
};

export default Button;
