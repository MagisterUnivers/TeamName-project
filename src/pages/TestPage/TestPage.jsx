import { Container } from '../../components/Container/Container';
import FollowUs from 'components/FollowUs/FollowUs';
import Header from 'components/Header/Header';

// import { Nav } from 'components/Nav/Nav';
import React from 'react';

const TestPage = () => {
  return (
    <>
      <Header />
      {/* <Nav /> */}
      {/* <Navigation/>
      <UserLogo/> */}
      <Container>
        {' '}
        <FollowUs />
      </Container>
    </>
  );
};

export default TestPage;
