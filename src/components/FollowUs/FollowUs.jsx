import React from 'react';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/icons/youtube.svg';

import s from './FollowUs.module.css';
const FollowUs = () => {
  return (
    <ul className={s.list}>
      <li>
        <a
          className={s.link}
          href="https://fb.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className={s.icon} />
        </a>
      </li>
      <li>
        <a
          className={s.link}
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className={s.icon} />
        </a>
      </li>
      <li>
        <a
          className={s.link}
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon className={s.icon} />
        </a>
      </li>
    </ul>
  );
};

export default FollowUs;
