import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CTA from '../CTA/CTA';

class HeroBanner extends Component {
    render() {
        const {children} = this.props;
        const ctaLinks = [
            {
                ctaDesc: 'CTA Title 1',
                ctaIcon: 'arrow-right',
                ctaSize: 'lg',
                tag: Link,
            },
            {
                ctaDesc: 'CTA Title 2',
                ctaIcon: 'car-side',
                ctaSize: 'md',
                tag: Link,
            },
        ];

        return (
            <section className="hero-banner">
                {children}
                {ctaLinks && ctaLinks.length && ctaLinks.map((item, i) => 
                    <CTA 
                        key={i}
                        ctaSize={item.ctaSize} 
                        ctaDesc={item.ctaDesc} 
                        ctaIcon={item.ctaIcon} 
                        tag={item.tag} />
                )}
            </section>
        );
    }
}

export default HeroBanner;