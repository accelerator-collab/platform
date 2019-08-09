import React, { Component } from 'react';

class BasicModal extends Component {
    tapOutside(e) {
        e.preventDefault();

        if((e.target === e.currentTarget) && !this.props.hideClose) {
            this.props.handleModal();
        }
    }

    render() {
        const { title, children } = this.props;
        return (
            <div 
                className={`modal-overlay`} onClick={(e) => this.tapOutside(e)}>
                <div className={`modal-container`}>
                    <div className="modal-head">
                        <h3 className="modal-title">{title}</h3>
                        <div className="modal-head__buttons">
                            {/* <i className="fas fa-times-circle" title="Close modal" onClick={(e) => this.tapOutside(e)}></i> */}
                        </div>
                    </div>
                    <div className={`modal-wrapper`}>
                        { children }
                    </div>
                </div>
            </div>
        );
    }
}

export default BasicModal;