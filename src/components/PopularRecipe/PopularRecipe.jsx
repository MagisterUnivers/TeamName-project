import { useSelector } from 'react-redux';
import { selectPopular } from 'redux/selectors';
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
import { Container } from 'components';

export const PopularRecipe = () => {
  const popularData = useSelector(selectPopular);
  // console.log(popularData);

  return (
    <>
      <StyledWrapper>
        <Container>
          <StyledTitle>Popular Recipe</StyledTitle>
          <StyledList>
            {popularData?.map(i => {
              // console.log(i.desc);
              return (
                <StyledListElement key={i._id}>
                  <StyledLink to={`/main/recipe/${i._id}`}>
                    {/* <div> */}
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
                    {/* </div> */}
                    <StyledTextWrapper>
                      <StyledSubtitle text={false}>{i.drink}</StyledSubtitle>
                      <StyledSubtitle text={true}>
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
        </Container>
      </StyledWrapper>
    </>
  );
};
