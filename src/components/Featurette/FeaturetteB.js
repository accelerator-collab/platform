import React, { Component } from 'react';
import featuretteB from '../../styles/_featuretteB.scss'


class FeaturetteB extends Component {
    render() {
        const { desc, content, imageSrc, reverse } = this.props;

        return (

            <div className="featuretteB__div">
                <div className="featuretteB__image">
                    <img src={imageSrc} alt="Featurette Thumbnail" />
                </div>

                <div className="featuretteB__content">
                    <div className="featuretteB__title-desc">{content}</div>
                    <div className="featuretteB__desc">{desc}</div>
                </div>

            </div>

        );
    }
}

export default FeaturetteB;