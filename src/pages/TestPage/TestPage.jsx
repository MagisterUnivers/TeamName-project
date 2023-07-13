import { Container } from '../../components/Container/Container';
// import Navigation from 'components/Navigation/Navigation';
import React, { useEffect } from 'react';
import { FollowUs, Nav, Logo } from 'components';
import { useDispatch } from 'react-redux';
import { getCocktailsByCategoryThunk } from 'redux/Cocktails/cocktailsOperations';

const TestPage = () => {
  const dispatch = useDispatch();
  const category = encodeURIComponent('Cocktail');
  useEffect(() => {
    dispatch(getCocktailsByCategoryThunk(category));
  }, [dispatch, category]);

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
