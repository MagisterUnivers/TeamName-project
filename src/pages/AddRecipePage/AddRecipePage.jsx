import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularThunk } from 'redux/Cocktails/cocktailsOperations';
import {
  FollowUs,
  AddRecipeForm,
  PopularRecipe,
  MainPageTitle,
  Container,
} from 'components';
import {
  StyledPageWrapper,
  StyledWrapper,
  StyledSection,
} from './AddRecipePage.styled';

const AddRecipePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularThunk());
  }, []); // eslint-disable-line

  return (
    <StyledSection>
      <Container>
        <MainPageTitle title="Add recipe" />
        <StyledPageWrapper>
          <AddRecipeForm />
          <StyledWrapper>
            <FollowUs title="Follow Us" />
            <PopularRecipe />
          </StyledWrapper>
        </StyledPageWrapper>
      </Container>
    </StyledSection>
  );
};

export default AddRecipePage;
