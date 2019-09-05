import React, { Component } from 'react';

class CTA extends Component {
    render() {
        const {ctaImage, ctaSize, ctaDesc, ctaIcon, ctaBorderless, ctaColor, ctaTitle, tag: Tag} = this.props;
        return (
            <Tag 
                className={`cta ${ctaSize ? `cta--${ctaSize}` : ''} ${ctaImage ? 'cta--wimg' : ''} ${ctaBorderless ? 'cta-borderless' : ''} ${ctaColor ? ctaColor : ''}`} 
                to="/"
            >
                {ctaImage && (<div className="cta__img__holder"><img src={ctaImage} alt="CTA Thumbnail" /></div>)}
                {ctaTitle && (<span className="cta__title">{ctaTitle}</span>)}
                {ctaDesc && (<span className="cta__desc">{ctaDesc}</span>)}
                {ctaIcon && (<i className={`cta__icon fas fa-${ctaIcon} `} />)}
            </Tag>
        );
    }
}

export default CTA;