import React, { Component } from 'react';

class Featurette extends Component {
    render() {
        const { content, imageSrc, reverse } = this.props;

        return (
            <article className={`featurette ${reverse ? 'featurette--reverse' : ''}`}>
                <div className="featurette__content">
                    {content}
                </div>
                <div className="featurette__image">
                    <img src={imageSrc} alt="Featurette Thumbnail" />
                </div>
            </article>
        );
    }
}

export default Featurette;