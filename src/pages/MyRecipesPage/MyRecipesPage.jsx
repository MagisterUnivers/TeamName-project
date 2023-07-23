import { Paginator, MainPageTitle, Container } from 'components';
import { MyOwnRecipesList } from 'components/MyOwnRecipesList/MyOwnRecipesList';
import { StyledSection } from './MyRecipesPage.styled';

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
