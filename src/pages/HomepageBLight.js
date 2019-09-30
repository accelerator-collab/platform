import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

// Components
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Carousel from '../components/Carousel/Carousel';
import Layout from '../components/Layout/Layout';

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

        const testImgs = [
			{
				img: 'https://brandspace.deloitte.com/downloads/5d7be318f2be9/lg_shutterstock_405027658.eps.png',
				title: 'Design Workspace',
				subtitle: 'New Courses and activities to learn',
				button: <button>More Details</button>,
				theme: 'dark'
			},
			{
				img: 'https://brandspace.deloitte.com/downloads/5d7be318f2be9/lg_shutterstock_338049497.jpg.jpg'
			},
			{
				img: 'https://brandspace.deloitte.com/downloads/5d7be318f2be9/lg_shutterstock_416885032.jpg.jpg'
			},
			{
				img: 'https://brandspace.deloitte.com/downloads/5d7bde24d9c9a/lg_shutterstock_487144453.jpg.jpg'
			}
		];

        return (
            <section>
                <Layout className="wrapper">
                    <HeroBanner 
                        avatar={AVATAR}
                        title={'Welcome to news feed'} 
                        desc={'Our goal with news feed is to show you the stories that matter most to you every time you visit.'}
                        ctaLinks={ctaLinks} />
                </Layout>
                <Layout className="layout--column wrapper">
                    <Carousel 
                        className="m-b-l"
                        images={testImgs} />
                    <Carousel 
                        className="m-b-l"
                        images={testImgs} />
                </Layout>
            </section>
        );
    }
}
    
export default HomepageBLight;