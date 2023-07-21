import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DrinkCard } from 'components/DrinkCard/DrinkCard';
import { selectCocktailsIsLoading, selectOwn } from 'redux/selectors';
import { MyRecipesListStyled, Section } from './MyOwnRecipesList.styled';
import { getAllOwnDrinksThunk } from 'redux/Cocktails/cocktailsOperations';

export const MyOwnRecipesList = () => {
  const dispatch = useDispatch();
  const ownCocktails = useSelector(selectOwn);
  const loading = useSelector(selectCocktailsIsLoading);

  useEffect(() => {
    dispatch(getAllOwnDrinksThunk());
  }, [dispatch]);

  // useEffect(() => {
  //   if (ownCocktails.length > 1) return;
  //   dispatch(getAllOwnDrinksThunk());
  // }, [dispatch]);

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
          <p>Not found</p>
          // <NotFound message={"You haven't added any cocktail recipes yet"} />
        )}
      </MyRecipesListStyled>
    </Section>
  );
};
