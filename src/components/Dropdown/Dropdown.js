import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleList: this.props.toggleList,
        };
    }

    _toggleList = () => {
        this.setState({ toggleList: !this.state.toggleList });
    };

    render() {
        return (
            <div className="dropdown" onClick={this._toggleList}>
                <h3 className="dropdown__title">{this.props.title}</h3>
                <ul className="dropdown__container" hidden={this.state.toggleList}>
                    <li className="dropdown__item">Item 1</li>
                    <li className="dropdown__item">Item 2</li>
                    <li className="dropdown__item">Item 3</li>
                    <li className="dropdown__item">Item 4</li>
                    <li className="dropdown__item">Item 5</li>
                </ul>
            </div>
        );
    }
}

export default Dropdown;