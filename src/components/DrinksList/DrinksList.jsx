import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectSearchResults } from 'redux/selectors';
import { DrinkCard, NotFound } from 'components';
import { DrinkListStyled, Section } from './DrinkList.styled';

export const DrinksList = () => {
  const searchResults = useSelector(selectSearchResults);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section>
      {searchResults?.length !== 0 ? (
        <DrinkListStyled>
          {searchResults?.map(searchResult => (
            <DrinkCard
              key={searchResult._id}
              cocktail={searchResult}
              page={'drinks'}
            />
          ))}
        </DrinkListStyled>
      ) : (
        <NotFound message={"We haven't found any cocktails for this search"} />
      )}
    </Section>
  );
};
