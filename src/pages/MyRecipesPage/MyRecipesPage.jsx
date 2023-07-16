import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Paginator from 'components/Paginator/Paginator';
import { getAllOwnDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';

const MyRecipesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOwnDrinksThunk());
  }, [dispatch]);

  return (
    <>
      <MainPageTitle title={'My recipes'} />
      <MyRecipesList />
      <Paginator />
    </>
  );
};

export default MyRecipesPage;
