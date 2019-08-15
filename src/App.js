import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';

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
  {icon: 'facebook-f', url: 'https://www.facebook.com/'},
  {icon: 'instagram', url: 'https://www.instagram.com/?hl=en'},
  {icon: 'linkedin', url: 'https://www.instagram.com/?hl=en'}
];

const sidebarLinks = [
  {
    name: 'Home',
    icon: 'home',
    url: '/',
  },
  {
    name: 'Layouts',
    icon: 'folder',
    url: 'layouts',
  },
];

function App() {
  return (
    <Router>
      <Header 
        siteTitle='Logo and Title' 
        links={LINKS} 
        logo='https://via.placeholder.com/150x150' />
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