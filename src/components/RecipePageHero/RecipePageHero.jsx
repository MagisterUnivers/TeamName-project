import { useSelector } from 'react-redux';
import { selectFavorite, selectUser } from 'redux/selectors';
import { favoriteFilter } from 'components/utils/filter';
import { MainPageTitle, StyledSection } from 'components';
import { StyledContentHolder } from 'components/RecipePreparation/RecipePreparation.styled';
import {
  StyledGlassServi,
  StyledAboutContent,
  StyledButton,
  StyledImage,
} from './RecipePageHero.styled';

export const RecipePageHero = ({ func }) => {
  const cocktails = useSelector(selectFavorite);
  const user = useSelector(selectUser);

  return (
    cocktails !== undefined && (
      <>
        <StyledSection>
          <StyledGlassServi>{cocktails.glass}</StyledGlassServi>
          <StyledContentHolder>
            <div>
              <MainPageTitle title={cocktails.drink} />
              <StyledAboutContent>
                {cocktails.about
                  ? cocktails.about
                  : `Let’s forget about the second half of this drink’s name for a moment: It doesn’t remotely resemble a classic Martini. As for the first part, it's said by some that its creator, bartender Douglas Ankrah, thought it was what a porn star would order; other stories hold that he was inspired by the smell of a stripper's perfume.`}
              </StyledAboutContent>
              {favoriteFilter(cocktails, user) ? (
                <StyledButton type="button" onClick={func}>
                  Remove recipe from favorite
                </StyledButton>
              ) : (
                <StyledButton type="button" onClick={func}>
                  Add recipe to favorite
                </StyledButton>
              )}
            </div>
            <div>
              {' '}
              <StyledImage
                src={
                  cocktails.drinkThumb
                    ? cocktails.drinkThumb
                    : require('../../assets/img/testPNG.png')
                }
                alt="cocktail thumb"
                width={400}
                height={400}
              />
            </div>
          </StyledContentHolder>
        </StyledSection>
      </>
    )
  );
};
