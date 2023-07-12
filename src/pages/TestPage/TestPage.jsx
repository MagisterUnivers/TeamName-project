import { Container } from '../../components/Container/Container';
import FollowUs from 'components/FollowUs/FollowUs';
import Navigation from 'components/Navigation/Navigation';
import { Nav } from 'components/Nav/Nav';
import React from 'react';
import { Logo } from 'components/Logo/Logo';

const TestPage = () => {
  return (
    <>
      <Nav />

      <Container>
        <Logo />
        <FollowUs />
      </Container>
    </>
  );
};

export default TestPage;
