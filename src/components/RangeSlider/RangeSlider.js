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
        const { min, max } = this.props;

        return (
            <div class="slidecontainer">

                <p>Default range slider:</p>
                <span>
                    <input type="range" min={min} max={max} value={this.state.value} onChange={this.onChangeSliderValue.bind(this)} />
                    <p>{this.state.value}</p>
                </span>

            </div>


        );
    }
}


RangeSlider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,

};

RangeSlider.defaultProps = {
    min: 0,
    max: 100,
};

export default RangeSlider;