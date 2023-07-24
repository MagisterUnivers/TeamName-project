import { Paginator, MainPageTitle, Container } from 'components';
import { MyOwnRecipesList } from 'components/MyOwnRecipesList/MyOwnRecipesList';
import { StyledSection } from './MyRecipesPage.styled';
import { useEffect } from 'react';

const MyRecipesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container>
        <StyledSection>
          <MainPageTitle title={'My recipes'} />
          <MyOwnRecipesList />
          <Paginator />
        </StyledSection>
      </Container>
    </>
  );
};

export default MyRecipesPage;
