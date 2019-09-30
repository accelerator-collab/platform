import React, { Component } from 'react';
import CTA from '../CTA/CTA';

class HeroBanner extends Component {
    render() {
        const { title, desc, avatar, alignment, ctaLinks } = this.props;

        return (
            <section className={`hero-banner hero-banner--${alignment || ''} ${avatar ? 'hero-banner--wavatar' : ''}`}>
                {avatar && (
                    <div className="hero-banner__avatar">
                        <img src={avatar} alt="Avatar" />
                    </div>
                )}
                <div className="hero-banner__copy">
                    <h1 className='hero-banner__title'>{title}</h1>
                    {desc && (<p className="hero-banner__desc">{desc}</p>)}
                    {ctaLinks && ctaLinks.length && ctaLinks.map((item, i) =>
                        <CTA
                            key={i}
                            ctaStyle={item.ctaStyle}
                            ctaSize={item.ctaSize}
                            ctaDesc={item.ctaDesc}
                            ctaIcon={item.ctaIcon}
                            ctaColor={item.ctaColor}
                            tag={item.tag} />
                    )}
                </div>
            </section>
        );
    }
}

export default HeroBanner;