import { Paginator, MainPageTitle } from 'components';
import { MyOwnRecipesList } from 'components/Modals/MyOwnRecipesList/MyOwnRecipesList';

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
