import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectSearch, selectSearchResults } from 'redux/selectors';
import { searchAllDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { DrinkCard } from 'components';
import { DrinkListStyled, Section } from './DrinkList.styled';
import { useNavigate } from 'react-router';
import { NotFound } from '../NotFound/NotFound';

export const DrinksList = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(selectSearchResults);
  const page = useSelector(selectPage);
  console.log(page);
  const search = useSelector(selectSearch);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(searchAllDrinksThunk({ search, page }));
    navigate(
      `/main/drinks/${encodeURIComponent(
        encodeURIComponent(search.chosenCategory)
      )}?query=${encodeURIComponent(search.query)}&ingredient=${
        search.chosenIngredient
      }`
    );
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
