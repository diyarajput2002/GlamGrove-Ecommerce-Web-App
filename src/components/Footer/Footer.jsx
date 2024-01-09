import React from 'react';
import css from './Footer.module.css';
import Logo from '../../assets/logo.png';
import {
    PhoneIcon ,
    LocationMarkerIcon ,
    InboxIcon,
    UsersIcon,
    LoginIcon,
    LinkIcon
} from '@heroicons/react/outline';

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />
       <div className={css.cFooter}>
           <div className={css.logo}>
              <img src={Logo} alt='logo' />
              <span>amazon</span>
           </div>

           <div className={css.block}>
             <div className={css.detail}>
                <span className={css.topic} >contact us</span>
                <span className={css.pngLine}>
                    <LocationMarkerIcon className={css.icon} />
                    <span>111 North Avenue Orlando , FL 32801</span>
                </span>

                <span className={css.pngLine}>
                    <PhoneIcon className={css.icon} />
                    <a href='tel : 352-306-4415'>352-306-4415</a>
                </span>

                <span className={css.pngLine}>
                    <InboxIcon className={css.icon} />
                    <a href='mailto : support@amazoon.com'>support@amazon.com</a>
                </span>
            </div>
           </div>

           <div className={css.block}>
             <div className={css.detail}>
                <span className={css.topic} >Account</span>
                <span className={css.pngLine}>
                    <LoginIcon className={css.icon} />
                    <a href='#sign-in'>Sign in</a>
                </span>
            </div>
           </div>

           <div className={css.block}>
             <div className={css.detail}>
                <span className={css.topic} >Company</span>
                <span className={css.pngLine}>
                    <UsersIcon className={css.icon} />
                    <a href='about us'>about us</a>
                </span>
            </div>
           </div>

           <div className={css.block}>
             <div className={css.detail}>
                <span className={css.topic} >Resources</span>
                <span className={css.pngLine}>
                    <LinkIcon className={css.icon} />
                    <a href='about us'>safety privecy & terms</a>
                </span>
            </div>
           </div>
       </div>

       <div className={css.copyRight}>
         <span>CopyRight 2023 by Amazon, inc</span>
         <span>All rights reserved</span>
       </div>
    </div>
  )
}

export default Footer;