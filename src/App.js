import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';

import logo from './assets/deloitte-logo.svg';

const LINKS = [
  {
    label: 'Foreword',
    url: '/',
    subLabel: 'Sub label 1'
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

const socials = [
  {icon: 'facebook-f', url: 'https://www.facebook.com/'},
  {icon: 'twitter', url: 'https://twitter.com/'},
  {icon: 'linkedin', url: 'https://www.instagram.com/?hl=en'},
  {icon: 'pinterest', url: 'https://www.instagram.com/?hl=en'}
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
        <article className="wrapper__content">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/layouts" component={LayoutPage} />
        </article>
      </main>
      <Footer socialMediaLink={socials} footerLink={LINKS} />
    </Router>
  );
}

export default App;