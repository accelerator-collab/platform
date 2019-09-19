import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

// Components
import HeroBanner from '../components/HeroBanner/HeroBanner';

// Assets
import AVATAR from '../assets/hero-banner-b-light.png';

class HomepageBLight extends Component {
    render() {
        const ctaLinks = [
            {
                ctaDesc: 'Learn more',
                ctaIcon: 'arrow-right',
                ctaSize: 'md',
                ctaColor: 'cta--red',
                tag: NavLink,
            },
        ];

        return (
            <section>
                <div className="wrapper">
                    <HeroBanner 
                        avatar={AVATAR}
                        title={'Welcome to news feed'} 
                        desc={'Our goal with news feed is to show you the stories that matter most to you every time you visit.'}
                        ctaLinks={ctaLinks} />
                </div>
            </section>
        );
    }
}
    
export default HomepageBLight;