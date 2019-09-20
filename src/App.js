import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';

import WelcomePage from './pages/WelcomePage';

import Header from './components/Header/Header';
import FooterDarkB from './components/Footer/FooterDarkB';
import Sidebar from './components/Sidebar/Sidebar';

import logo from './assets/deloitte-logo.svg';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import instagram from './assets/instagram.svg';
import linkedin from './assets/linkedin.svg';
import Layout from './components/Layout/Layout';

const LINKS = [
  {
    label: 'Foreword',
    url: '/',
    subLabel: 'Sub label 1',
    columntitle: 'Column Title'
  },
  {
    label: 'Spotlight',
    url: '/',
    subLabel: ''
  },
  {
    label: 'Center News',
    url: '/',
    subLabel: ''
  },
  {
    label: 'Wall Arts',
    url: '/',
    subLabel: ''
  },
  {
    label: 'What\'s Coming',
    url: '/',
    subLabel: ''
  },
  {
    label: 'Funny Corner',
    url: '/',
    subLabel: ''
  },
];


const COLUMN1 = [
  {
    label: 'Wall Arts',
    url: '/',
    subLabel: 'Sub label 1',
    columntitle: 'Column Title'
  },
  {
    label: 'What’s Coming',
    url: '/',
    subLabel: ''
  },
  {
    label: 'Funny Corner',
    url: '/',
    subLabel: ''
  }
]

const COLUMN2 = [
  {
    label: 'Foreword',
    url: '/',
    subLabel: '',
    columntitle: 'Column Title'
  },
  {
    label: 'Spotlight',
    url: '/',
    subLabel: ''
  },
  {
    label: 'Center News',
    url: '/',
    subLabel: ''
  }
]

const socials = [
  { icon: 'facebook', url: 'https://www.facebook.com/' },
  { icon: 'twitter', url: 'https://twitter.com/' },
  { icon: 'linkedin', url: 'https://www.instagram.com/?hl=en' },
  { icon: 'instagram', url: 'https://www.instagram.com/?hl=en' }
];

const sidebarLinks = [
  {
    name: 'Foreword',
    icon: 'scroll',
    url: '/',
  },
  {
    name: 'Spotlight',
    icon: 'lightbulb',
    url: '/',
  },
  {
    name: 'Center News',
    icon: 'newspaper',
    url: '/',
  },
  {
    name: 'Wall Arts',
    icon: 'palette',
    url: '/',
  },
  {
    name: 'What\'s Coming',
    icon: 'meteor',
    url: '/',
  },
  {
    name: 'Funny Corner',
    icon: 'theater-masks',
    url: '/',
  },
];

function App() {
  return (
    <Router>
      <Header
        siteTitle='DCPDC Newsletter'
        links={LINKS}
        logo={logo} />
      <main className="wrapper">
        <Sidebar links={sidebarLinks} />
        {/* <article className="wrapper__content"> */}
        {/* <Route exact path="/" component={HomePage} /> */}
        {/* <Route exact path="/layouts" component={LayoutPage} /> */}

        <Route exact path="/" component={WelcomePage} />

        {/* </article> */}
      </main>


      <FooterDarkB socialMediaLink={socials} footerLinkColumn1={COLUMN1} footerLinkColumn2={COLUMN2} />
    </Router>
  );
}

export default App;