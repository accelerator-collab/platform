import React, { Component } from 'react';
import CTA from '../CTA/CTA';

class HeroBanner extends Component {
    render() {
        const {children, customClass, ctaLinks} = this.props;

        return (
            <section className={`hero-banner full-width ${customClass}`}>
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