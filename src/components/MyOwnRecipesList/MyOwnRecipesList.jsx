import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DrinkCard, NotFound } from 'components';
import { selectOwn, selectPage } from 'redux/selectors';
import { getAllOwnDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { useMediaRules } from 'hooks';
import { MyRecipesListStyled, Section } from './MyOwnRecipesList.styled';

export const MyOwnRecipesList = () => {
  const dispatch = useDispatch();
  const { isDesktop } = useMediaRules();
  const ownCocktails = useSelector(selectOwn);
  const page = useSelector(selectPage);
  const limit = isDesktop ? 9 : 8;

  useEffect(() => {
    dispatch(getAllOwnDrinksThunk({ page, limit }));
  }, [page, limit, dispatch]);

  return (
    <Section>
      {ownCocktails.length !== 0 ? (
        <MyRecipesListStyled>
          {ownCocktails.map(ownCocktail => (
            <DrinkCard
              key={ownCocktail._id}
              page={'my'}
              cocktail={ownCocktail}
            />
          ))}
        </MyRecipesListStyled>
      ) : (
        <NotFound message={"You haven't added any cocktail recipes yet"} />
      )}
    </Section>
  );
};
