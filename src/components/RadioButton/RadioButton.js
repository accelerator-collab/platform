import React, { Component } from 'react';

class RadioButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: props.defaultOption,
            radioButtonOptns: props.radioButtonOptns
        };
    }

    handleOptionChange = changeEvent => {
        console.log("event", changeEvent.target)
        if (changeEvent !== this.state.selectedOption) {
            this.setState({
                selectedOption: changeEvent.target
            }, function () {
                console.log("You have submitted:", this.state.selectedOption);
            });
        }
    };

    handleOnClickLabel = (value) => {
        if (value !== this.state.selectedOption) {
            this.setState({
                selectedOption: value
            })
        }
    }

    render() {

        let radioButtonOptns;


        if (this.state.radioButtonOptns !== null) {
            radioButtonOptns = this.state.radioButtonOptns.map(radioButtonOptns => (
                <div className="radio">
                    <input
                        className="radio-custom"
                        type="radio"
                        name={radioButtonOptns.name}
                        value={radioButtonOptns.value}
                        checked={this.state.selectedOption === radioButtonOptns.value}
                    // onChange={this.handleOptionChange.bind(this)}
                    />
                    <label className="radio-custom-label" onClick={() => this.handleOnClickLabel(radioButtonOptns.value)}>{radioButtonOptns.label}</label>
                </div>
            ));
        }

        return (
            <div>
                {radioButtonOptns}
            </div>
        );
    }
}

export default RadioButton;