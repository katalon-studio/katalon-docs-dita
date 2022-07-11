import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function FooterLeftView(copyright) {
  const SvgFacebook = require('@site/static/img/ic_facebook.svg').default;
  const SvgTwitter = require('@site/static/img/ic_twitter.svg').default;
  const SvgLinkedin = require('@site/static/img/ic_in.svg').default;
  const SvgYoutube = require('@site/static/img/ic_youtube.svg').default;
  return (
    <div className={styles.footerContainerLeft}>
      <div className={styles.logoContainer}>
         <img className={styles.logo} src={require('@site/static/img/logo_katalon.png').default}/>
         <p className={styles.logoText}>Katalon</p>
      </div>
      <p className={styles.footerCompanyText}>1776 Peachtree Street NW, Suite 200N, Atlanta, GA 30309<br/>
          Phone: +1 678-500-9185<br/>
          General & Legal inquiries: info@katalon.com<br/>
          License & Purchase inquiries: business@katalon.com<br/>
          Partnership inquiries: partner@katalon.com<br/>
        </p>
        <p>FOLLOW US</p>
        <div className={styles.footerSocialView}>
          <a className={styles.footerLinkSocial} href="https://www.facebook.com/KatalonPlatform" target="_blank"><SvgFacebook className={styles.footerSocialFBImg}/></a>
          <a className={styles.footerLinkSocial} href="https://twitter.com/KatalonPlatform" target="_blank"><SvgTwitter className={styles.footerSocialImg}/></a>
          <a className={styles.footerLinkSocial} href="https://www.linkedin.com/company/katalon/" target="_blank"><SvgLinkedin className={styles.footerSocialImg}/></a>
          <a className={styles.footerLinkSocial} href="https://www.youtube.com/c/KatalonStudio/" target="_blank"><SvgYoutube className={styles.footerSocialImg}/></a>
        </div>
        
        {copyright ? (
               <div
                 className={clsx("footer__copyright", styles.footerCopyRight)}
               >
                 {copyright}
               </div>
             ) : null}
    </div>
  )
}

export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      }, styles.footerContainer)}>

      {FooterLeftView(copyright)}

      <div className={clsx("container container-fluid", styles.footerContainerRight)}>
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
          </div>
        )}
        <div className={styles.footerContainerPrivacy}>
             <a href="https://katalon.com/terms" target="_blank" style={{ textDecoration: "none" }}><p className={styles.footerTermText}>Terms</p></a>
             <a href="https://katalon.com/terms#privacy-policy" target="_blank" style={{ textDecoration: "none" }}><p className={styles.footerPrivacyText}>Privacy Policy</p></a>
             <a href="https://katalon.com/terms#license-agreement" target="_blank" style={{ textDecoration: "none" }}><p className={styles.footerPrivacyText}>License Agreement</p></a>
             <a href="https://katalon.com/security/" target="_blank" style={{ textDecoration: "none" }}><p className={styles.footerPrivacyText}>Security</p></a>
         </div>
      </div>
    </footer>
  );
}
