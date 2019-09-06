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
        const { radioButtonStyle, radioButtonStyleLabel } = this.props;

        let radioButtonOptns;


        if (this.state.radioButtonOptns !== null) {
            radioButtonOptns = this.state.radioButtonOptns.map(radioButtonOptns => (
                <div>
                    <input
                        className={radioButtonStyle}
                        type="radio"
                        name={radioButtonOptns.name}
                        value={radioButtonOptns.value}
                        checked={this.state.selectedOption === radioButtonOptns.value}
                    // onChange={this.handleOptionChange.bind(this)}
                    />
                    <label className={radioButtonStyleLabel} onClick={() => this.handleOnClickLabel(radioButtonOptns.value)}>{radioButtonOptns.label}</label>
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