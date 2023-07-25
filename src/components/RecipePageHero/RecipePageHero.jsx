import { useSelector } from 'react-redux';
import { selectFavorite, selectUserArray } from 'redux/selectors';
import { favoriteFilter } from 'utils';
import { MainPageTitle, StyledSection, ReusableButton } from 'components';
import { StyledContentHolder } from 'components/RecipePreparation/RecipePreparation.styled';
import {
  StyledGlassServi,
  StyledAboutContent,
  StyledImage,
} from './RecipePageHero.styled';

export const RecipePageHero = ({ func }) => {
  const cocktails = useSelector(selectFavorite);
  const user = useSelector(selectUserArray);

  return (
    cocktails !== undefined && (
      <>
        <StyledSection firstsection="true">
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
                <ReusableButton
                  text={'Remove recipe from favorite'}
                  onClick={func}
                  marginbottom={'80px'}
                  ariaLabel="Remove from favorite button"
                />
              ) : (
                <ReusableButton
                  text={'Add recipe to favorite'}
                  onClick={func}
                  marginbottom={'80px'}
                  ariaLabel="Add to favorite button"
                />
              )}
            </div>
            <div>
              <StyledImage
                src={
                  cocktails.drinkThumb
                    ? cocktails.drinkThumb
                    : require('../../assets/img/RecipePlaceholder.png')
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
