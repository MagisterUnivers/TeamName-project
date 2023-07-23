import { Paginator, MainPageTitle } from 'components';
import { MyOwnRecipesList } from 'components/MyOwnRecipesList/MyOwnRecipesList';
import { StyledSection } from './MyRecipesPage.styled';

const MyRecipesPage = () => {
  return (
    <StyledSection>
      <MainPageTitle title={'My recipes'} />
      <MyOwnRecipesList />
      <Paginator />
    </StyledSection>
  );
};

export default MyRecipesPage;
