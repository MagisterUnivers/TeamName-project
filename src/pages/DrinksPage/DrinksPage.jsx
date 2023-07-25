import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

import {
  Paginator,
  DrinksSearch,
  DrinksList,
  MainPageTitle,
  Container,
} from 'components';
import {
  getCategoriesListThunk,
  getIngredientsListThunk,
  searchAllDrinksThunk,
} from 'redux/Cocktails/cocktailsOperations';
import { setChosenCategory } from 'redux/Cocktails/cocktailsSlice';
import {
  selectCategories,
  selectIngredients,
  selectPage,
  selectSearch,
} from 'redux/selectors';
import { StyledSection } from './DrinksPage.styled';
import { useMediaRules } from 'hooks';

const DrinksPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const categoryFromLocation = useLocation();
  const categoryName = categoryFromLocation?.state?.from;
  categoryName && dispatch(setChosenCategory(categoryName));
  const { isDesktop } = useMediaRules();
  const ingredientsList = useSelector(selectIngredients);
  const categoriesList = useSelector(selectCategories);
  const page = useSelector(selectPage);
  const search = useSelector(selectSearch);
  const limit = isDesktop ? 9 : 8;

  useEffect(() => {
    if (categoriesList.length !== 0) return;
    dispatch(getCategoriesListThunk());
  }, [dispatch, categoriesList]);

  useEffect(() => {
    if (ingredientsList.length !== 0) return;
    dispatch(getIngredientsListThunk());
  }, [dispatch, ingredientsList]);

  useEffect(() => {
    dispatch(searchAllDrinksThunk({ search, page, limit }));
    navigate(
      `/main/drinks/${encodeURIComponent(
        search.chosenCategory
      )}?query=${encodeURIComponent(search.query)}&ingredient=${
        search.chosenIngredient
      }&page=${page}`
    );
  }, [dispatch, search, page, limit]); //eslint-disable-line

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
