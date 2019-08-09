import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	render() {
		const { type, text, size } = this.props;

		return (
			<button className={`btn btn--${type} btn--${size}`} disabled={this.props.disabled}>
				{text}
			</button>
		);
	}
}

Button.propTypes = {
	type: PropTypes.string,
	text: PropTypes.string,
	size: PropTypes.string,
	disabled: PropTypes.bool
};

Button.defaultProps = {
	type: 'default',
	size: 'sm',
	disabled: false
};

export default Button;
