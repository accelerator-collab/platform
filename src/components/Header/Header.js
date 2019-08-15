import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        const { siteTitle, links, logo } = this.props;
        return (
          <header className="header">
            <div className="header__logo">
              <img className="header__logo-icon" src={logo} alt="Brand Logo" />
              <h1 className="header__logo-title">{siteTitle}</h1>
            </div>
            <ul className="header__links">
              {links.length && (links.map(d => 
                <li key={d.label} className='header__link'>
                  <Link 
                    className="link__item" 
                    to={d.url}>
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </header>
        );
      }
}

export default Header;