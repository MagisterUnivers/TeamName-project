import { FollowUs } from 'components';
import AddRecipeForm from 'components/Forms/AddRecipeForm/AddRecipeForm';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
import { StyledPageWrapper, StyledWrapper } from './AddRecipePage.styled';

const AddRecipePage = () => {
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

export default AddRecipePage;
