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
        this.setState({
            selectedOption: changeEvent.target.value
        }, function () {
            console.log("You have submitted:", this.state.selectedOption);
        });
    };


    render() {

        let radioButtonOptns;


        if (this.state.radioButtonOptns !== null) {
            radioButtonOptns = this.state.radioButtonOptns.map(radioButtonOptns => (
                <div className="radio">
                    <input
                        type="radio"
                        name={radioButtonOptns.name}
                        value={radioButtonOptns.value}
                        checked={this.state.selectedOption === radioButtonOptns.value}
                        onChange={this.handleOptionChange.bind(this)}
                    />
                    <label>{radioButtonOptns.label}</label>
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