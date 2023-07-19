// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Paginator, MyRecipesList, MainPageTitle } from 'components';
// import { getAllOwnDrinksThunk } from 'redux/Cocktails/cocktailsOperations';

// const MyRecipesPage = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllOwnDrinksThunk());
//   }, [dispatch]);

//   return (
//     <>
//       <MainPageTitle title={'My recipes'} />
//       <MyRecipesList />
//       <Paginator />
//     </>
//   );
// };

// export default MyRecipesPage;

import { useSelect } from '@mui/base';
import { useDispatch } from 'react-redux';
import { Paginator, MyRecipesList, MainPageTitle } from 'components';
import { getAllOwnDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { selectOwn } from 'redux/selectors';

const MyRecipesPage = () => {
  const dispatch = useDispatch();
  const ownRecipes = useSelect(selectOwn);
  if (ownRecipes.length === 0) {
    dispatch(getAllOwnDrinksThunk());
  }
  return (
    <>
      <MainPageTitle title={'My recipes'} />
      <MyRecipesList />
      <Paginator />
    </>
  );
};

export default MyRecipesPage;
