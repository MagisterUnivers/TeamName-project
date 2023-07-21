import { Paginator, MainPageTitle } from 'components';
import { MyOwnRecipesList } from 'components/MyOwnRecipesList/MyOwnRecipesList';

const MyRecipesPage = () => {
  return (
    <>
      <MainPageTitle title={'My recipes'} />
      <MyOwnRecipesList />
      <Paginator />
    </>
  );
};

export default MyRecipesPage;
