import React, { Component } from 'react';

class Featurette extends Component {
    render() {
        const { content, imageSrc, featuretteStyle, title, timeStamp } = this.props;

        return (
            <article className={`featurette ${featuretteStyle ? featuretteStyle : ''}`}>
                <div className="featurette__content">
                    <h1>{title}</h1>
                    <span>{timeStamp}</span>
                    <p>{content}</p>
                </div>
                <div className="featurette__image">
                    <img src={imageSrc} alt="Featurette Thumbnail" />
                </div>
            </article>
        );
    }
}

export default Featurette;