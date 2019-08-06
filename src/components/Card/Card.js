import React, { Component } from 'react';

class Card extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="card">
                {children}
            </div>
        );
    }
}

export default Card;