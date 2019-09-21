import React, { Component } from 'react';

import HeroBannerDarkB from '../components/HeroBanner/HeroBannerDarkB';
import Layout from '../components/Layout/Layout';
import CTA from '../components/CTA/CTA';
import Featurette from '../components/Featurette/Featurette';

import Card from '../components/Card/Card';
import { Link } from "react-router-dom";

import welcomePage1 from '../assets/welcome-page-group.png';
import welcomeBanner1 from '../assets/welcome-banner-01.png';
import welcomeBanner2 from '../assets/welcome-banner-02.png';
import welcomeBanner3 from '../assets/welcome-banner-03.png';
import Slideshow from '../components/Slideshow/Slideshow';
import { loadOptions } from '@babel/core';



class WelcomePage extends Component {
    render() {

        const ctaLinks = [
            {
                ctaDesc: 'Get Started',
                ctaIcon: 'arrow-right',
                ctaSize: 'xxxs',
                ctaColor: 'red',
                tag: Link,
            }
        ]

        return (
            <main>
                <Layout className="layout--hero-banner">
                    <HeroBannerDarkB
                        customClass={1}
                        logo={welcomePage1}
                        title={'Welcome to news feed'}
                        desc={'Our goal with news feed is to show you the stories that matter most to you every time you visit.'} ctaLinks={ctaLinks} />

                </Layout>
                <Layout className="layout--column">
                    <Featurette
                        reverse={true}
                        imageSrc={welcomeBanner1}
                    />
                    <Featurette
                        reverse={true}
                        imageSrc={welcomeBanner2}
                    />
                    <Featurette
                        reverse={true}
                        imageSrc={welcomeBanner3}
                    />
                </Layout>

            </main>
        );
    }
}

export default WelcomePage;