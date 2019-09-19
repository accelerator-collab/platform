import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


// Components
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Layout from '../components/Layout/Layout';
import Featurette from '../components/Featurette/Featurette';

// Assets
import AVATAR from '../assets/hero-banner-a-light.png';
import TEMP_ITEM_IMAGE from '../assets/bronze-circle.png';

class HomepageALight extends Component {
    render() {
        const ctaLinks = [
            {
                ctaDesc: 'Get started',
                ctaIcon: 'arrow-right',
                ctaSize: 'md',
                ctaColor: 'cta--green',
                ctaStyle: 'cta--round',
                tag: NavLink,
            },
        ];

        return (
            <section>
                <div className="wrapper">
                    <HeroBanner 
                        alignment={'reverse'}
                        avatar={AVATAR}
                        title={'Welcome to news feed'} 
                        desc={'Our goal with news feed is to show you the stories that matter most to you every time you visit.'}
                        ctaLinks={ctaLinks} />
                </div>

                <Layout className="wrapper layout--wrap layout--space-around">

                    <Featurette
                        featuretteStyle={'featurette--column featurette--reverse'}
                        title={'Find Out Which Game Of Thrones House'}
                        timeStamp={'Sep 19, 2019'}
                        content='Our Managing Director Uday Shankar Sreeram led the Ribbon Cutting ceremony alongside Adam Powick (APJ Consulting Leader), Peter Bars (APJ Technology Leader), and Angeline Leong (SEA Technology Leader).'
                        imageSrc={TEMP_ITEM_IMAGE}
                    />
                    <Featurette
                        featuretteStyle={'featurette--column featurette--reverse'}
                        title={'Find Out Which Game Of Thrones House'}
                        timeStamp={'Sep 19, 2019'}
                        content='Concessionaire at the 19th floor Pantry. We now have a Concessionaire (Lormel’s Food Services) serving breakfast, lunch and snacks at the pantry. LFS will be available to serve you from 7AM to 4PM, Mondays to Fridays.'
                        imageSrc={TEMP_ITEM_IMAGE}
                    />
                    <Featurette
                        featuretteStyle={'featurette--column featurette--reverse'}
                        title={'Find Out Which Game Of Thrones House'}
                        timeStamp={'Sep 19, 2019'}
                        content='10 June 2019 The PDC Leadership team hard at work at the FY20 Strategic Planning session. The team identified the vision for the Philippines Delivery Center, analyzed Strengths, Weaknesses, Opportunities, and Threats, and along with the FY20 operating plan, identified the SMART goals for the center.'
                        imageSrc={TEMP_ITEM_IMAGE}
                    />
                    <Featurette
                        featuretteStyle={'featurette--column featurette--reverse'}
                        title={'Find Out Which Game Of Thrones House'}
                        timeStamp={'Sep 19, 2019'}
                        content='10 June 2019 The PDC Leadership team hard at work at the FY20 Strategic Planning session.  The team identified the vision for the Philippines Delivery Center, analyzed Strengths, Weaknesses, Opportunities, and Threats, and along with the FY20 operating plan, identified the SMART goals for the center.'
                        imageSrc={TEMP_ITEM_IMAGE}
                    />
                    <Featurette
                        featuretteStyle={'featurette--column featurette--reverse'}
                        title={'Find Out Which Game Of Thrones House'}
                        timeStamp={'Sep 19, 2019'}
                        content='Reception was held at the Shangri-La Fort Rizal Grand Ballroom. The night started with a toast from our Global Delivery Network leader Jeff Jordan, some fun games, followed by music, good food, and dancing.'
                        imageSrc={TEMP_ITEM_IMAGE}
                    />
                </Layout>
            </section>
        );
    }
}
    
export default HomepageALight;