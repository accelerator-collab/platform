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


class DarkBThemePage extends Component {
    render() {

        const ctaLinks = [
            {
                ctaDesc: 'Get Started',
                ctaIcon: 'arrow-right',
                ctaSize: 'md',
                ctaColor: 'cta--red',
                tag: Link,
            }
        ]

        const banner = [
            {
                img: welcomeBanner1,
                title: 'Digital Experience',
                subtitle: 'New Courses and activities to learn',
                action: 'button',
                action_label: 'More Details',
                action_props: {
                    onClick: () => window.alert('TEST')
                },
                theme: 'dark',
            },
            {
                img: welcomeBanner1
            },
            {
                img: welcomeBanner2
            },
            {
                img: welcomeBanner3
            }
        ];

        const banner2 = [
            {
                img: welcomeBanner2,
                title: 'Digital Experience',
                subtitle: 'New Courses and activities to learn',
                theme: 'dark'
            },
            {
                img: welcomeBanner1
            },
            {
                img: welcomeBanner2
            },
            {
                img: welcomeBanner3
            }
        ];

        const banner3 = [
            {
                img: welcomeBanner3,
                title: 'Digital Experience',
                subtitle: 'New Courses and activities to learn',
                theme: 'dark'
            },
            {
                img: welcomeBanner1
            },
            {
                img: welcomeBanner2
            },
            {
                img: welcomeBanner3
            }
        ];


        return (
            <section>
                <div className="wrapper">
                    <HeroBanner
                        avatar={welcomePage1}
                        title={'Welcome to news feed'}
                        desc={'Our goal with news feed is to show you the stories that matter most to you every time you visit.'}
                        ctaLinks={ctaLinks} />
                </div>

                <Layout className="layout--column wrapper">
                    <Carousel
                        className="m-b-l"
                        images={banner} />
                    <Carousel
                        className="m-b-l"
                        images={banner2} />
                    <Carousel
                        className="m-b-l"
                        images={banner3} />

                </Layout>

                <Layout className='cta--center--position'>

                    <CTA
                        ctaSize={'lg'}
                        ctaDesc={'View all category'}
                        ctaIcon={'arrow-right'}
                        ctaColor={'transparent-green'}
                        tag={Link} />
                </Layout>


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

export default DarkBThemePage;