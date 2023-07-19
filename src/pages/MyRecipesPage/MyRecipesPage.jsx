import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Paginator, MyRecipesList, MainPageTitle } from 'components';
import { getAllOwnDrinksThunk } from 'redux/Cocktails/cocktailsOperations';

export const MyRecipesPage = () => {
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
