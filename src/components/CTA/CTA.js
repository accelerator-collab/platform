import React, { Component } from 'react';

class CTA extends Component {
    render() {
        const {ctaImage, ctaSize, ctaDesc, ctaIcon, tag: Tag} = this.props;
        return (
            <Tag 
                className={`cta ${ctaSize ? `cta--${ctaSize}` : ''} ${ctaImage ? 'cta--wimg' : ''}`} 
                to="/"
            >
                {ctaImage && (<img src={ctaImage} alt="CTA Thumbnail" />)}
                {ctaDesc && (<span className="cta__desc">{ctaDesc}</span>)}
                {ctaIcon && (<i className={`cta__icon fas fa-${ctaIcon} `} />)}
            </Tag>
        );
    }
}

export default CTA;