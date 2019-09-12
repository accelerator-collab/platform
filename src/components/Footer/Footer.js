import React, { Component } from 'react';

class Footer extends Component {
    render() {
        let { customClass, socialMediaLink, footerLink } = this.props;
        customClass = customClass ? customClass : '';
  
        return (
          <div className={`footer ${customClass}`}>
            <div className="footer__container">
              <div className="footer__container__link">
                <ul className="footer__container__link__section">
                    {footerLink.length && (footerLink.map(f =>
                        <li key={f.label} className='footer__container__link__section_item'>
                          <a href={f.url}>{f.label}</a>
                        </li>
                    ))}
                  </ul>
              </div>

              <div className="footer__container__link">
                <ul className="footer__container__link__section">
                    {footerLink.length && (footerLink.map(f =>
                        <li key={f.label} className='footer__container__link__section_item'>
                          <a href={f.url}>{f.label}</a>
                        </li>
                    ))}
                  </ul>
              </div>

              <div className="footer__container__link">
                <ul className="footer__container__link__section">
                    {footerLink.length && (footerLink.map(f =>
                        <li key={f.label} className='footer__container__link__section_item'>
                          <a href={f.url}>{f.label}</a>
                        </li>
                    ))}
                  </ul>
              </div>

              <div className="footer__container__social">
                <ul className="footer__container__social__section">
                  {socialMediaLink.length && (socialMediaLink.map(soc =>
                      <li key={soc.icon} className='footer__container__social_section_item'>
                        <a href={soc.url} className={`fab fa-${soc.icon}`}>&nbsp;</a>
                      </li>
                  ))}
                </ul>
              </div>
  
            </div>
        </div>
        );
      }
}

export default Footer;