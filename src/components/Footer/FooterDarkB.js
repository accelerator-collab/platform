import React, { Component } from 'react';
import InputBox from '../Input/InputBox'
class FooterDarkB extends Component {
  render() {
    let { customClass, socialMediaLink, footerLinkColumn1, footerLinkColumn2 } = this.props;
    customClass = customClass ? customClass : '';

    return (

      <div className={`footer ${customClass}`}>
        <div className="footer__container">
          <div className="footer__container__link">

            <ul className="footer__container__link__section">
              {footerLinkColumn1.length && (footerLinkColumn1.map(f =>
                <li key={f.label} className='footer__container__link__section_item'>
                  <p> {f.columntitle}</p>
                  <a href={f.url}>{f.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__container__column2__link">
            <ul className="footer__container__link__section">
              {footerLinkColumn2.length && (footerLinkColumn2.map(f =>
                <li key={f.label} className='footer__container__link__section_item'>
                  <p> {f.columntitle}</p>
                  <a href={f.url}>{f.label}</a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <InputBox inputStyle={'wrap'}></InputBox>
          </div>

        </div>


      </div>

      // <div className={`footer ${customClass}`}>
      //   <div className="footer__container">

      //     <div className="footer__container__link">
      //       <ul className="footer__container__link__section">
      //         {footerLink.length && (footerLink.map(f =>
      //           <li key={f.label} className='footer__container__link__section_item'>
      //             <a href={f.url}>{f.label}</a>
      //           </li>
      //         ))}
      //       </ul>
      //     </div>

      //     <div className="footer__container__link">
      //       <ul className="footer__container__link__section">
      //         {footerLink.length && (footerLink.map(f =>
      //           <li key={f.label} className='footer__container__link__section_item'>
      //             <a href={f.url}>{f.label}</a>
      //           </li>
      //         ))}
      //       </ul>
      //     </div>

      //     <div className="footer__container__social">
      //       <ul className="footer__container__social__section">
      //         {socialMediaLink.length && (socialMediaLink.map(soc =>
      //           <li key={soc.icon} className='footer__container__social_section_item'>
      //             <a href={soc.url} className={`fab fa-${soc.icon}`}>&nbsp;</a>
      //           </li>
      //         ))}
      //       </ul>
      //     </div>

      //   </div>
      // </div>
    );
  }
}

export default FooterDarkB;