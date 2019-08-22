import React, { Component } from 'react';

class RadioButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "option1",
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
                <div>
                    <label>
                        <input
                            type="radio"
                            name={radioButtonOptns.name}
                            value={radioButtonOptns.value}

                            checked={this.state.selectedOption === radioButtonOptns.value}
                            onChange={this.handleOptionChange.bind(this)}
                            className="form-check-input"
                        />
                        {radioButtonOptns.label}
                    </label>
                </div>
            ));
        }

        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12">

                        {radioButtonOptns}

                    </div>
                </div>
            </div>
        );
    }
}

export default RadioButton;