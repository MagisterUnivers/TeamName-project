import { Paginator, MainPageTitle, Container } from 'components';
import { MyOwnRecipesList } from 'components/MyOwnRecipesList/MyOwnRecipesList';

const MyRecipesPage = () => {
  return (
    <>
      <Container>
        <MainPageTitle title={'My recipes'} />
        <MyOwnRecipesList />
        <Paginator />
      </Container>
    </>
  );
};

export default MyRecipesPage;
