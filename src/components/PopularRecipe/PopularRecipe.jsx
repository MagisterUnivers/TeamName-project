import { useSelector } from 'react-redux';
import { selectPopular } from 'redux/selectors';
import {
  StyledImage,
  StyledList,
  StyledListElement,
  StyledSubtitle,
  StyledTextWrapper,
  StyledTitle,
  StyledWrapper,
} from './PopularRecipe.styled';

export const PopularRecipe = () => {
  const popularData = useSelector(selectPopular);

  return (
    <>
      <StyledWrapper>
        <StyledTitle>Popular Recipe</StyledTitle>
        <StyledList>
          {popularData?.map(i => {
            console.log(i.desc);
            return (
              <StyledListElement key={i._id}>
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
                  <StyledSubtitle text={false}>{i.drink}</StyledSubtitle>
                  <StyledSubtitle text={true}>
                    {i.about
                      ? i.about
                      : 'The  spring punch is a highball cocktail of vodka and liqueur, per IBA specified ingredients. The International Bartenders Association lists the beverage in its New Era Drinks category.'}
                  </StyledSubtitle>
                </StyledTextWrapper>
              </StyledListElement>
            );
          })}
        </StyledList>
      </StyledWrapper>
    </>
  );
};
