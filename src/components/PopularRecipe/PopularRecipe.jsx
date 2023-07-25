import { useSelector } from 'react-redux';
import { selectPopular, selectTheme } from 'redux/selectors';
import {
  StyledImage,
  StyledLink,
  StyledList,
  StyledListElement,
  StyledSubtitle,
  StyledTextWrapper,
  StyledTitle,
  StyledWrapper,
} from './PopularRecipe.styled';

export const PopularRecipe = () => {
  const popularData = useSelector(selectPopular);
  const theme = useSelector(selectTheme);

  return (
    <>
      <StyledWrapper>
        <StyledTitle>Popular Recipe</StyledTitle>
        <StyledList>
          {popularData?.map(i => {
            return (
              <StyledListElement key={i._id} theme={theme}>
                <StyledLink to={`/main/recipe/${i._id}`}>
                  <StyledImage
                    src={
                      i.drinkThumb
                        ? i.drinkThumb
                        : require('../../assets/img/Popular90x90.png')
                    }
                    alt="popular thumb"
                    width={90}
                    height={90}
                  />
                  <StyledTextWrapper>
                    <StyledSubtitle text="false">{i.drink}</StyledSubtitle>
                    <StyledSubtitle text="true">
                      {i.about
                        ? i.about
                        : 'The  spring punch is a highball cocktail of vodka and liqueur, per IBA specified ingredients. The International Bartenders Association lists the beverage in its New Era Drinks category.'}
                    </StyledSubtitle>
                  </StyledTextWrapper>
                </StyledLink>
              </StyledListElement>
            );
          })}
        </StyledList>
      </StyledWrapper>
    </>
  );
};
