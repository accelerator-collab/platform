import React, { Component } from 'react';

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkboxItems: props.checkboxItems
        };
    }

    onClickCheckbox(event) {
        const value = event.target.name;
        console.log("CONSOLE", value)
    }

    render() {

        let checkboxItems;

        if (this.state.checkboxItems !== null) {
            checkboxItems = this.state.checkboxItems.map(checkboxItems => (
                <div>
                    <input
                        onClick={this.onClickCheckbox.bind(this)}
                        type="checkbox"
                        id={checkboxItems.id}
                        name={checkboxItems.name} />
                    <label>{checkboxItems.label}</label>
                </div>
            ));
        }

        return (
            <div>
                {checkboxItems}
            </div>
        );
    }
}

export default Checkbox;