import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RangeSlider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: (props.value) ? props.value : 20
        };
    }

    onChangeSliderValue = (event) => {
        console.log("Slider", event.target.value)
        const value = event.target.value
        this.setState({
            value: value
        })
    }
    render() {
        const { min, max, rangeSliderStyle } = this.props;

        return (
            <div class="slidecontainer">
                <input className={rangeSliderStyle} type="range" min={min} max={max} value={this.state.value} onChange={this.onChangeSliderValue.bind(this)} />
                <p>{this.state.value}</p>
            </div>
        );
    }
}

RangeSlider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    rangeSliderStyle: PropTypes.string

};

RangeSlider.defaultProps = {
    min: 0,
    max: 100,
    rangeSliderStyle: 'default'
};

export default RangeSlider;