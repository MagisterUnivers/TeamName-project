import React from 'react';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/icons/youtube.svg';

import { StyledLink, StyledList, getStyledIcon } from './FollowUs.styled';

const StyledFacebookIcon = getStyledIcon(FacebookIcon);
const StyledInstagramIcon = getStyledIcon(InstagramIcon);
const StyledYoutubeIcon = getStyledIcon(YoutubeIcon);

const FollowUs = () => {
  return (
    <StyledList>
      <li>
        <StyledLink
          href="https://fb.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledFacebookIcon />
        </StyledLink>
      </li>
      <li>
        <StyledLink
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledInstagramIcon />
        </StyledLink>
      </li>
      <li>
        <StyledLink
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledYoutubeIcon />
        </StyledLink>
      </li>{' '}
    </StyledList>
  );
};

export default FollowUs;
