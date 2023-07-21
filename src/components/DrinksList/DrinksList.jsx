import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCocktails,
  selectPage,
  selectSearch,
  selectSearchResults,
} from 'redux/selectors';
import DrinkCard from 'components/DrinkCard/DrinkCard';
import { DrinkListStyled, Section } from './DrinkList.styled';
import NotFound from 'components/NotFound/NotFound';
import { searchAllDrinksThunk } from 'redux/Cocktails/cocktailsOperations';

const DrinksList = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(selectSearchResults);
  const page = useSelector(selectPage);
  console.log(page);
  const search = useSelector(selectSearch);

  useEffect(() => {
    // if (search.query || search.chosenCategory || search.chosenIngredient||)
    dispatch(searchAllDrinksThunk({ search, page }));
  }, [dispatch, search, page]);
  console.log(searchResults);
  return (
    <Section>
      <DrinkListStyled>
        {searchResults.length !== 0 ? (
          searchResults.map(searchResult => (
            <DrinkCard
              key={searchResult._id}
              cocktail={searchResult}
              page={'drinks'}
            />
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
