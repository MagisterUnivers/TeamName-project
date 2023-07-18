import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCocktails, selectPage, selectSearch } from 'redux/selectors';
import DrinkCard from 'components/DrinkCard/DrinkCard';
import { DrinkListStyled, Section } from './DrinkList.styled';
import NotFound from 'components/NotFound/NotFound';
import { searchAllDrinksThunk } from 'redux/Cocktails/cocktailsOperations';

const DrinksList = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector(selectCocktails);
  const page = useSelector(selectPage);
  const search = useSelector(selectSearch);

  useEffect(() => {
    // if (search.query || search.chosenCategory || search.chosenIngredient||)
    dispatch(searchAllDrinksThunk({ search, page }));
  }, [dispatch, search, page]);
  return (
    <Section>
      <DrinkListStyled>
        {cocktails.length !== 0 ? (
          cocktails.map(cocktail => (
            <DrinkCard key={cocktail._id} cocktail={cocktail} page={'drinks'} />
          ))
        ) : (
          <NotFound
            message={"We haven't found any cocktails for this search"}
          />
        )}
      </DrinkListStyled>
    </Section>
  );
};

export default DrinksList;
