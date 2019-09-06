import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected,
        };
    }

    onClickCheckbox() {
        this.setState({
            selected: (this.state.selected) ? false : true
        }, function () {
            console.log(this.props.value, " is ", this.state.selected)
        })
    }

    render() {
        const { value, disabled, containerCheckBoxStyle, labelCheckBoxStyle, spanStyle } = this.props;
        return (
            <div className={containerCheckBoxStyle}>
                <label className={labelCheckBoxStyle}>
                    <input onClick={this.onClickCheckbox.bind(this)}
                        type="checkbox"
                        checked={this.state.selected}
                        disabled={disabled}>
                    </input>
                    <span class={spanStyle}></span>
                    {value}</label>
            </div>
        );
    }
}


Checkbox.propTypes = {
    value: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    containerCheckBoxStyle: PropTypes.string,
    labelCheckBoxStyle: PropTypes.string,
    spanStyle: PropTypes.string

};

Checkbox.defaultProps = {
    value: 'Checkbox1',
    selected: true,
    disabled: false,
    // containerCheckBoxStyle: 'default',
    // labelCheckBoxStyle: 'default',
    // spanStyle: 'default'
};

export default Checkbox;