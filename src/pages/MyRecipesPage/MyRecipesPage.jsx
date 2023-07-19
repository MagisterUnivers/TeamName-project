import { useSelect } from '@mui/base';
import { useDispatch } from 'react-redux';
import { Paginator, MyRecipesList, MainPageTitle } from 'components';
import { getAllOwnDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import { MainPageTitle } from 'components';

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
