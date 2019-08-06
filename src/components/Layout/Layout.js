import React, { Component } from 'react';

class Layout extends Component {
    render() {
        const {children, className} = this.props;
        return (
            <section className={`layout ${className ? className : ''}`}>
                {children}
            </section>
        );
    }
}

export default Layout;