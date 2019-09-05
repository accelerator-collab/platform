import React, { Component } from 'react';
import CTA from '../CTA/CTA';

class HeroBanner extends Component {
    render() {
        const {title, children, customClass, ctaLinks} = this.props;

        return (
            <section className={`hero-banner full-width ${customClass}`}>
                <h1 className='hero-banner-title'>{title}</h1>
                {children}
                {ctaLinks && ctaLinks.length && ctaLinks.map((item, i) => 
                    <CTA 
                        key={i}
                        ctaSize={item.ctaSize} 
                        ctaDesc={item.ctaDesc} 
                        ctaIcon={item.ctaIcon} 
                        ctaBorderless={item.ctaBorderless}
                        ctaColor={item.ctaColor}
                        tag={item.tag} />
                )}
            </section>
        );
    }
}

export default HeroBanner;