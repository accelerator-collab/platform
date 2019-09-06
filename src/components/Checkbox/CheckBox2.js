import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CheckBox2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected,
        };
    }

    onClickCheckBox2() {
        this.setState({
            selected: (this.state.selected) ? false : true
        }, function () {
            console.log(this.props.value, " is ", this.state.selected)
        })
    }

    render() {
        const { disabled, checkBoxStyle, value, name, id } = this.props;
        return (
            <div className={checkBoxStyle}>
                <input type="checkbox" value={value} id={id} name={name}
                    onClick={this.onClickCheckBox2.bind(this)}
                    checked={this.state.selected} disabled={disabled} />
                <label for={this.props.id}></label>
            </div>

        );
    }
}


CheckBox2.propTypes = {
    value: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    checkBoxStyle: PropTypes.string,
    id: PropTypes.string,


};

CheckBox2.defaultProps = {
    value: 'CheckBox Slider',
    selected: true,
    disabled: false,
    checkBoxStyle: 'checkboxOne',
    id: '1',
};

export default CheckBox2;