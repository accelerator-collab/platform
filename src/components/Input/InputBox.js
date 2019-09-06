import React, { Component } from 'react';
import '../../styles/_inputBox.scss';

class InputBox extends Component {



    render() {
        const { label, inputValue, placeHolder } = this.props;
        return (
            <div>
                <div className="searchInputContainer">
                    <label>{this.props.label}</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Search" />
                    <div className="iconBox">
                        <i className="fas fa-search" />
                    </div>
                </div>

                <div className="inputWithIcon inputIconBg">
                    <label>{this.props.label}</label>
                    <input type="text" placeholder={this.props.placeHolder} />
                    <i className="fas fa-user-alt fa-lg fa-fw" aria-hidden="true" />
                </div>

                {/* <div className="float-container">
                    <label htmlFor="floatingInput" className="labelFloatingInput">{this.props.label}</label>
                    <input className="floatingInput" type="text"></input>
                </div> */}


            </div >
        )

    }
}

export default InputBox;