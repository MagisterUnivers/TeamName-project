import { Container } from 'components/Container';
import FollowUs from 'components/FollowUs/FollowUs';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/UserLogo/UserLogo';
// import { Nav } from 'components/Nav/Nav';
import React from 'react';

const TestPage = () => {
  return (
    <>
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
