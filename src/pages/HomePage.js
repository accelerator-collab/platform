import React, { Component } from 'react';

import HeroBanner from '../components/HeroBanner/HeroBanner';
import Layout from '../components/Layout/Layout';
import CTA from '../components/CTA/CTA';
import Featurette from '../components/Featurette/Featurette';
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        const content = 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.';
        const image = 'https://via.placeholder.com/400x400';
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
            <main className="home-page">
                <HeroBanner ctaLinks={ctaLinks} />
                <Layout className="layout--space-between">
                    <CTA 
                        ctaSize="lg"
                        ctaImage="https://via.placeholder.com/150x150"
                        ctaDesc="Lorem ipsum is simply a dummy text. Bacon Ipsum is also a dummy text." 
                        tag={Link} />
                    <CTA 
                        ctaSize="lg"
                        ctaImage="https://via.placeholder.com/150x150"
                        ctaDesc="Lorem ipsum is simply a dummy text. Bacon Ipsum is also a dummy text." 
                        ctaIcon="caret-down"
                        tag={'p'} />
                    <CTA 
                        ctaSize="lg"
                        ctaImage="https://via.placeholder.com/150x150"
                        ctaDesc="Lorem ipsum is simply a dummy text. Bacon Ipsum is also a dummy text."
                        tag={'p'} />
                </Layout>
                <Layout className="layout--column">
                    <Featurette 
                        reverse={true}
                        content={content}
                        imageSrc={image}
                    />
                    <Featurette
                        content={content}
                        imageSrc={image}
                    />
                    <Featurette 
                        reverse={true}
                        content={content}
                        imageSrc={image}
                    />
                </Layout>
            </main>
        );
    }
}

export default HomePage;