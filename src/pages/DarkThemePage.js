import React, { Component } from 'react';

import HeroBanner from '../components/HeroBanner/HeroBanner';
import Carousel from '../components/Carousel/Carousel'
import Layout from '../components/Layout/Layout';
import CTA from '../components/CTA/CTA';
import Featurette from '../components/Featurette/Featurette';

import Card from '../components/Card/Card';
import { Link } from "react-router-dom";

import welcomePage1 from '../assets/welcome-page-group.png';
import welcomeBanner1 from '../assets/welcome-banner-01.png';
import welcomeBanner2 from '../assets/welcome-banner-02.png';
import welcomeBanner3 from '../assets/welcome-banner-03.png';
import { loadOptions } from '@babel/core';

import _cta from '../styles/_cta.scss';


class DarkThemePage extends Component {
    render() {

        const ctaLinks = [
            {
                ctaDesc: 'Learn more',
                ctaIcon: 'arrow-right',
                ctaSize: 'md',
                ctaColor: 'cta--red',
                tag: Link,
            }
        ]

        const slide = {
            key: 1,
            img: { welcomeBanner1 },
            theme: 'slide--dark',
            title: 'Digital Experience',
            subtitle: 'New courses and activities to learn',
            button: 'md'
        }

        return (
            <section>
                <div className="wrapper">
                    <HeroBanner
                        avatar={welcomePage1}
                        title={'Welcome to news feed'}
                        desc={'Our goal with news feed is to show you the stories that matter most to you every time you visit.'}
                        ctaLinks={ctaLinks} />
                </div>

                <Carousel Slide={slide} />

                <Carousel Slide={slide} />

                <Carousel Slide={slide} />


            </section>


            //     <Layout className="layout--column">
            //         <Featurette
            //             reverse={true}
            //             imageSrc={welcomeBanner1}
            //         />
            //         <Featurette
            //             reverse={true}
            //             imageSrc={welcomeBanner2}
            //         />
            //         <Featurette
            //             reverse={true}
            //             imageSrc={welcomeBanner3}
            //         />
            //     </Layout>

            // </main>
        );
    }
}

export default DarkThemePage;