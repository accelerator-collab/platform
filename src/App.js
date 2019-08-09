import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';

const LINKS = [
  {
    label: 'Home',
    url: '/',
    subLabel: 'Sub label 1'
  },
  {
    label: 'Layouts',
    url: '/layouts',
    subLabel: ''
  },
  {
    label: 'Accessibility',
    url: '/accessibility',
    subLabel: ''
  },
];

const socials = [
  {icon: 'facebook', url: 'https://www.facebook.com/'},
  {icon: 'instagram', url: 'https://www.instagram.com/?hl=en'},
  {icon: 'linkedin', url: 'https://www.instagram.com/?hl=en'}
];

function App() {
  return (
    <Router>
      <Header 
        siteTitle='Logo and Title' 
        links={LINKS} 
        logo='https://via.placeholder.com/150x150' />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/layouts" component={LayoutPage} />
      <Footer socialMediaLink={socials} footerLink={LINKS} />
    </Router>
  );
}

export default App;