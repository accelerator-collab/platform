import React, { Component } from 'react';

import HeroBanner from '../components/HeroBanner/HeroBanner';
import Layout from '../components/Layout/Layout';
import CTA from '../components/CTA/CTA';
import Featurette from '../components/Featurette/Featurette';
import { Link } from "react-router-dom";

import pic1 from '../assets/cn-pic-01.png';
import pic2 from '../assets/cn-pic-02.png';
import pic3 from '../assets/cn-pic-03.png';
import pic4 from '../assets/cn-pic-04.png';
import pic5 from '../assets/cn-pic-05.png';
import pic6 from '../assets/cn-pic-06.png';

import spot01 from '../assets/spot-01.png';

class HomePage extends Component {
    render() {
        const ctaLinks = [
            {
                ctaDesc: 'Learn more',
                ctaIcon: 'arrow-right',
                ctaSize: 'xxs',
                ctaColor: 'dark',
                tag: Link,
            },
            {
                ctaDesc: 'Get to know Jio and Arianne',
                ctaIcon: 'arrow-right',
                ctaSize: 'xxs',
                ctaColor: '',
                tag: Link,
                ctaBorderless: true,
            },
        ];

        return (
            <main className="home-page">
                <HeroBanner title={'Are you competitive? Ready for challenge?'} ctaLinks={ctaLinks} />

                <h1 className="accelerator-h1">Spotlight</h1>

                <Layout className="layout--space-around">
                    <CTA
                        ctaSize="full"
                        ctaTitle="Find out which Game of Thrones house"
                        ctaImage={spot01}
                        ctaDesc="Find out which Game of Thrones house these two would like to be a part of, if they want to be on the top or the bottom bunk and other fun facts."
                        ctaColor={'grey-white'}
                        tag={'p'} />
                    <CTA
                        ctaSize="full"
                        ctaTitle="Find out which Game of Thrones house"
                        ctaImage={spot01}
                        ctaColor={'grey-white'}
                        ctaDesc="Find out which Game of Thrones house these two would like to be a part of, if they want to be on the top or the bottom bunk and other fun facts"
                        tag={'p'} />
                    <CTA
                        ctaSize="full"
                        ctaTitle="Find out which Game of Thrones house"
                        ctaImage={spot01}
                        ctaColor={'grey-white'}
                        ctaDesc="Find out which Game of Thrones house these two would like to be a part of, if they want to be on the top or the bottom bunk and other fun facts"
                        tag={'p'} />
                </Layout>

                <h1 className="accelerator-h1">Center News</h1>

                <Layout className="layout--column">

                    <Featurette
                        reverse={true}
                        content='Our Managing Director Uday Shankar Sreeram led the Ribbon Cutting ceremony alongside Adam Powick (APJ Consulting Leader), Peter Bars (APJ Technology Leader), and Angeline Leong (SEA Technology Leader).'
                        imageSrc={pic1}
                    />
                    <Featurette
                        reverse={true}
                        content='Concessionaire at the 19th floor Pantry. We now have a Concessionaire (Lormel’s Food Services) serving breakfast, lunch and snacks at the pantry. LFS will be available to serve you from 7AM to 4PM, Mondays to Fridays.'
                        imageSrc={pic2}
                    />
                    <Featurette
                        reverse={true}
                        content='10 June 2019 The PDC Leadership team hard at work at the FY20 Strategic Planning session. The team identified the vision for the Philippines Delivery Center, analyzed Strengths, Weaknesses, Opportunities, and Threats, and along with the FY20 operating plan, identified the SMART goals for the center.'
                        imageSrc={pic3}
                    />
                    <Featurette
                        reverse={true}
                        content='10 June 2019 The PDC Leadership team hard at work at the FY20 Strategic Planning session.  The team identified the vision for the Philippines Delivery Center, analyzed Strengths, Weaknesses, Opportunities, and Threats, and along with the FY20 operating plan, identified the SMART goals for the center.'
                        imageSrc={pic4}
                    />
                    <Featurette
                        reverse={true}
                        content='Reception was held at the Shangri-La Fort Rizal Grand Ballroom. The night started with a toast from our Global Delivery Network leader Jeff Jordan, some fun games, followed by music, good food, and dancing.'
                        imageSrc={pic5}
                    />
                    <Featurette
                        reverse={true}
                        content='Concessionaire at the 19th floor Pantry. We now have a Concessionaire (Lormel’s Food Services) serving breakfast, lunch and snacks at the pantry. LFS will be available to serve you from 7AM to 4PM, Mondays to Fridays.'
                        imageSrc={pic6}
                    />
                </Layout>


            </main>
        );
    }
}

export default HomePage;