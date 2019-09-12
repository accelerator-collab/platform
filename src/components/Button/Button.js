import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ThemeContext} from '../../context/ThemeContext';

class Button extends Component {
	render() {
		const { type, text, size, disabled, theme } = this.props;
		return (
			<ThemeContext.Consumer>
				{theme => (
					<button 
						className={`btn btn--${type} btn--${size}`} 
						disabled={disabled}
					>
						{text}
					</button>
				)}
			</ThemeContext.Consumer>
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
