import {
  FollowUs,
  AddRecipeForm,
  PopularRecipe,
  MainPageTitle,
} from 'components';
import { StyledPageWrapper, StyledWrapper } from './AddRecipePage.styled';

export const AddRecipePage = () => {
  return (
    <>
      <MainPageTitle title="Add recipe" />
      <StyledPageWrapper>
        <AddRecipeForm />
        <StyledWrapper>
          <FollowUs title="Follow Us" />
          <PopularRecipe />
        </StyledWrapper>
      </StyledPageWrapper>
    </>
  );
};
