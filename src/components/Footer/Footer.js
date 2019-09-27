import React, { Component } from 'react';
import InputBox from '../Input/InputBox';
import table from '../../styles/_table.scss';

class Footer extends Component {
  render() {
    let { customClass, socialMediaLink, footerLinkColumn1, footerLinkColumn2, footerLinkColumn3 } = this.props;
    customClass = customClass ? customClass : '';
    // console.log(socialMediaLink, "keme")

    return (

      <div className={`footer ${customClass}`}>
        <div className="footer__container">
          <div className="footer__container__link">

            <div class="row">
              <div class="column">
                <ul className="footer__container__link__section">
                  {footerLinkColumn1.length && (footerLinkColumn1.map(f =>
                    <li key={f.label} className='footer__container__link__section_item'>
                      <p> {f.columntitle}</p>
                      <a href={f.url}>{f.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="column">
                <ul className="footer__container__link__section">
                  {footerLinkColumn2.length && (footerLinkColumn2.map(f =>
                    <li key={f.label} className='footer__container__link__section_item'>
                      <p> {f.columntitle}</p>
                      <a href={f.url}>{f.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="column">
                <ul className="footer__container__link__section">
                  {footerLinkColumn3.length && (footerLinkColumn3.map(f =>
                    <li key={f.label} className='footer__container__link__section_item'>
                      <p> {f.columntitle}</p>
                      <a href={f.url}>{f.label}</a>
                      <InputBox inputStyle={'wrap'} ></InputBox>

                    </li>
                  ))}
                </ul>
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

          </div>

        </div>
        <div className="footer-hr">
          <hr />
          <div className="footer-credits">Deloitte Consulting 2019</div>
        </div>

      </div>
    );
  }
}

export default Footer;