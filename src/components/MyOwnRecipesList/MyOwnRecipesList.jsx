import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DrinkCard } from 'components/DrinkCard/DrinkCard';
import { selectOwn, selectPage } from 'redux/selectors';
import { MyRecipesListStyled, Section } from './MyOwnRecipesList.styled';
import { getAllOwnDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { NotFound } from '../NotFound/NotFound';
import { useMediaRules } from 'hooks';

export const MyOwnRecipesList = () => {
  const dispatch = useDispatch();
  const { isDesktop } = useMediaRules();
  const ownCocktails = useSelector(selectOwn);
  const page = useSelector(selectPage);
  const limit = isDesktop ? 9 : 8;
  // console.log(isDesktop);
  // console.log(limit);

  useEffect(() => {
    // if (ownCocktails.length !== 0) return;
    dispatch(getAllOwnDrinksThunk({ page, limit }));
  }, [page, limit]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Section>
      <MyRecipesListStyled>
        {ownCocktails.length !== 0 ? (
          ownCocktails.map(ownCocktail => (
            <DrinkCard
              key={ownCocktail._id}
              page={'my'}
              cocktail={ownCocktail}
            />
          ))
        ) : (
          // <p>Not found</p>
          <NotFound message={"You haven't added any cocktail recipes yet"} />
        )}
      </MyRecipesListStyled>
    </Section>
  );
};
