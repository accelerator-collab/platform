import React, { Component } from 'react';
import '../../styles/_inputBox.scss';

class InputBox extends Component {



    render() {
        const { label, inputValue, placeHolder, inputStyle } = this.props;

        //inputStyle=searchInputContainer, inputWithIcon inputIconBg, wrap
        return (
            <div>
                {/* <div className={inputStyle}>
                    <label>{this.props.label}</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Search" />
                    <div className="iconBox">
                        <i className="fas fa-search" />
                    </div>
                </div>

                <div className={inputStyle}>
                    <label>{this.props.label}</label>
                    <input type="text" placeholder={this.props.placeHolder} />
                    <i className="fas fa-user-alt fa-lg fa-fw" aria-hidden="true" />
                </div> */}

                {/* <div className="float-container">
                    <label htmlFor="floatingInput" className="labelFloatingInput">{this.props.label}</label>
                    <input className="floatingInput" type="text"></input>
                </div> */}


                <div class={inputStyle}>
                    <div class="search">
                        <input type="text" class="searchTerm" placeholder="Email Address" />
                        <button type="submit" class="searchButton">
                            Subscribe
                         </button>
                    </div>
                </div>


            </div >
        )

    }
}

export default InputBox;