import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Paginator from 'components/Paginator/Paginator';
import { getAllFavoriteDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';

const FavoritePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFavoriteDrinksThunk());
  }, [dispatch]);

  return (
    <>
      <MainPageTitle title={'Favotites'} />
      <MyRecipesList />
      <Paginator />
    </>
  );
};

export default FavoritePage;