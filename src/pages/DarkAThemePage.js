import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


// Components
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Layout from '../components/Layout/Layout';
import Featurette from '../components/Featurette/Featurette';
import CTA from '../components/CTA/CTA';
import Carousel from '../components/Carousel/Carousel';

// Assets
import BannerA from '../assets/hero-banner-a-dark.png';
import DetailImages from '../assets/bronze-circle.png';
import welcomeBanner1 from '../assets/welcome-banner-01.png';
import welcomeBanner2 from '../assets/welcome-banner-02.png';
import welcomeBanner3 from '../assets/welcome-banner-03.png';


class DarkAThemePage extends Component {
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

        const testImgs = [
            {
                img: welcomeBanner1,
                title: 'Design Workspace',
                subtitle: 'New Courses and activities to learn',
                button: <button>More Details</button>,
                theme: 'dark'
            },
            {
                img: welcomeBanner2
            },
            {
                img: welcomeBanner3
            },
            {
                img: welcomeBanner2
            }
        ];

        return (
            <section>
                <div className="hero-banner__bg">
                    <HeroBanner
                        alignment={'reverse'}
                        avatar={BannerA}
                        title={'Welcome to news feed'}
                        desc={'Our goal with news feed is to show you the stories that matter most to you every time you visit.'}
                        ctaLinks={ctaLinks} />
                </div>

                {/* <Layout>

                    <div class="line1 col-xs-5">
                        <hr></hr>
                    </div>

                    <div class="line2 col-xs-2">
                        <p>Important Notes</p>

                    </div>

                    <div class="line1 col-xs-5">
                        <hr></hr>
                    </div>

                </Layout> */}

                <Layout className="wrapper layout--wrap layout--space-around">

                    <Featurette
                        featuretteStyle={'featurette--column featurette--reverse'}
                        title={'Find Out Which Game Of Thrones House'}
                        timeStamp={'Sep 19, 2019'}
                        content='Find Out Which Game Of Thrones House These Two Would Like To Be A Part Of, If They Want To Be On The…'
                        imageSrc={DetailImages}
                    />
                    <Featurette
                        featuretteStyle={'featurette--column featurette--reverse'}
                        title={'Find Out Which Game Of Thrones House'}
                        timeStamp={'Sep 19, 2019'}
                        content='Find Out Which Game Of Thrones House These Two Would Like To Be A Part Of, If They Want To Be On The…'
                        imageSrc={DetailImages}
                    />
                    <Featurette
                        featuretteStyle={'featurette--column featurette--reverse'}
                        title={'Find Out Which Game Of Thrones House'}
                        timeStamp={'Sep 19, 2019'}
                        content='Find Out Which Game Of Thrones House These Two Would Like To Be A Part Of, If They Want To Be On The…'
                        imageSrc={DetailImages}
                    />
                    <Featurette
                        featuretteStyle={'featurette--column featurette--reverse'}
                        title={'Find Out Which Game Of Thrones House'}
                        timeStamp={'Sep 19, 2019'}
                        content='Find Out Which Game Of Thrones House These Two Would Like To Be A Part Of, If They Want To Be On The…'
                        imageSrc={DetailImages}
                    />
                    <Featurette
                        featuretteStyle={'featurette--column featurette--reverse'}
                        title={'Find Out Which Game Of Thrones House'}
                        timeStamp={'Sep 19, 2019'}
                        content='Find Out Which Game Of Thrones House These Two Would Like To Be A Part Of, If They Want To Be On The…'
                        imageSrc={DetailImages}
                    />

                    <Featurette
                        featuretteStyle={'featurette--column featurette--reverse'}
                        title={'Find Out Which Game Of Thrones House'}
                        timeStamp={'Sep 19, 2019'}
                        content='Find Out Which Game Of Thrones House These Two Would Like To Be A Part Of, If They Want To Be On The…'
                        imageSrc={DetailImages}
                    />
                </Layout>

                <Layout className='cta--center--position'>

                    <CTA
                        ctaSize={'lg'}
                        ctaDesc={'View more news'}
                        ctaIcon={'arrow-right'}
                        ctaColor={'transparent-green-radius'}
                        tag={NavLink} />


                </Layout>

                <Layout className=''>
                    <Carousel thumbnails images={testImgs} />
                </Layout>

            </section>
        );
    }
}

export default DarkAThemePage;