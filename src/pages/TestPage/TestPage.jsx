import { Container } from '../../components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { FollowUs, Nav,Logo } from 'components';

const TestPage = () => {
  return (
    <>
      <Nav />

      <Container>
        <Logo />
        <FollowUs />
        <div style={{ height: '300vh' }}></div>
      </Container>
    </>
  );
};

export default TestPage;
