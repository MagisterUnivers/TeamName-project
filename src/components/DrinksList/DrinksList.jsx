import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCocktails,
  selectPage,
  selectSearch,
  selectSearchResults,
} from 'redux/selectors';
import { searchAllDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { DrinkCard, NotFound } from 'components';
import { DrinkListStyled, Section } from './DrinkList.styled';

export const DrinksList = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(selectSearchResults);
  const page = useSelector(selectPage);
  const search = useSelector(selectSearch);

  useEffect(() => {
    // if (search.query || search.chosenCategory || search.chosenIngredient||)
    dispatch(searchAllDrinksThunk({ search, page }));
  }, [dispatch, search, page]);

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
