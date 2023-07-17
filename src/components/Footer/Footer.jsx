import React from 'react';

import { FollowUs } from '../FollowUs/FollowUs';
import { Logo, Navigation, SubscribeForm } from 'components';

export const Footer = () => {
  return (
    <footer>
      <Logo />
      <Navigation />
      <FollowUs />
      <SubscribeForm />
      <p>&#169;2023 Drink Master. All rights reserved.</p>
      <p>Privacy Policy</p>
      <p>Terms of Service</p>
    </footer>
  );
};
