import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Header} from 'accelerator-lib';
import Sidebar from './components/Sidebar/Sidebar';
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

function App() {
  return (
    <Router>
      <Header 
        siteTitle='Logo and Title' 
        links={LINKS} 
        logo='https://via.placeholder.com/150x150' />
        <Route exact path="/" component={HomePage} />
        <Route path="/layouts" component={LayoutPage} />
    </Router>
  );
}

export default App;
