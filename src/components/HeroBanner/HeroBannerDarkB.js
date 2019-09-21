import React, { Component } from 'react';
import CTA from '../CTA/CTA';

class HeroBannerDarkB extends Component {
    render() {
        const { title, desc, logo, children, customClass, ctaLinks } = this.props;

        return (
            <div>
                <img className={'hero-banner-logo'} src={logo} />
                <h1 className='hero-banner-title'>{title}</h1>
                <p className='hero-banner-desc'>{desc}</p>
                {children}
                {
                    ctaLinks && ctaLinks.length && ctaLinks.map((item, i) =>
                        <CTA
                            key={i}
                            ctaSize={item.ctaSize}
                            ctaDesc={item.ctaDesc}
                            ctaIcon={item.ctaIcon}
                            ctaBorderless={item.ctaBorderless}
                            ctaColor={item.ctaColor}
                            tag={item.tag} />
                    )
                }
            </div>
        );
    }
}

export default HeroBannerDarkB;