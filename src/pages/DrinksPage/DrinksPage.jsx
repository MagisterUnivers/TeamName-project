import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import {
  Paginator,
  DrinksSearch,
  DrinksList,
  MainPageTitle,
  Container,
} from 'components';
import {
  getCategoriesListThunk,
  getCocktailsByCategoryThunk,
  getIngredientsListThunk,
} from 'redux/Cocktails/cocktailsOperations';
import { setChosenCategory } from 'redux/Cocktails/cocktailsSlice';
import { selectCategories, selectIngredients } from 'redux/selectors';
import { StyledSection } from './DrinksPage.styled';

const DrinksPage = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  dispatch(setChosenCategory(categoryName));
  const navigate = useNavigate();

  const ingredientsList = useSelector(selectIngredients);
  const categoriesList = useSelector(selectCategories);

  useEffect(() => {
    if (categoriesList.length !== 0) return;
    dispatch(getCategoriesListThunk());
  }, [dispatch, categoriesList]);

  useEffect(() => {
    if (ingredientsList.length !== 0) return;
    dispatch(getIngredientsListThunk());
  }, [dispatch, ingredientsList]);

  useEffect(() => {
    dispatch(getCocktailsByCategoryThunk(categoryName));
    // navigate(`/main/drinks/${encodeURIComponent(categoryName)}`);
  }, [dispatch, categoryName]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <StyledSection>
          <MainPageTitle title={'Drinks'} />
          <DrinksSearch categoryName={categoryName} />
          <DrinksList />
          <Paginator />
        </StyledSection>
      </Container>
    </>
  );
};

export default DrinksPage;
