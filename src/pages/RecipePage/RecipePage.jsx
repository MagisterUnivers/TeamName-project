import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { getCocktailByIdThunk } from 'redux/Cocktails/cocktailsOperations';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';

const RecipePage = () => {
  const { drinkId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCocktailByIdThunk(drinkId));
  }, [dispatch, drinkId]);

  return (
    <>
      <MainPageTitle title={'A Drink'} />
    </>
  );
};

export default RecipePage;
