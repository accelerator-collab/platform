import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected,
        };
    }

    onClickCheckBox2() {
        if (this.props.disabled === false) {
            this.setState({
                selected: (this.state.selected) ? false : true
            }, function () {
                console.log(this.props.value, " is ", this.state.selected)
            })
        }
    }

    render() {
        const { disabled, checkBoxStyle, value, id, labelCheckBoxStyle, spanStyle } = this.props;
        return (
            <div className={checkBoxStyle}
                onClick={this.onClickCheckBox2.bind(this)}>
                <input type="checkbox"
                    checked={this.state.selected} disabled={disabled} />
                <label className={labelCheckBoxStyle} for={id}>
                    <span class={spanStyle}></span>{(labelCheckBoxStyle === 'none') ? null : value}</label>
            </div>

        );
    }
}


CheckBox.propTypes = {
    value: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    checkBoxStyle: PropTypes.string,
    id: PropTypes.string,
    labelCheckBoxStyle: PropTypes.string,
    spanStyle: PropTypes.string

};

CheckBox.defaultProps = {
    value: 'CheckBox Slider',
    selected: true,
    disabled: false,
    checkBoxStyle: 'checkboxOne',
    id: '1',
    labelCheckBoxStyle: 'default',
    spanStyle: 'default'
};

export default CheckBox;
