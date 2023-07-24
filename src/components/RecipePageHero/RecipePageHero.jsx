import { useSelector } from 'react-redux';
import { selectCocktails, selectFavorite, selectUser } from 'redux/selectors';
import {
  StyledGlassServi,
  StyledAboutContent,
  StyledButton,
  StyledImage,
} from './RecipePageHero.styled';
import { favoriteFilter } from 'components/utils/filter';
import { MainPageTitle } from 'components';
import { StyledSection } from 'components/Section/Section';
import { StyledContentHolder } from 'components/RecipePreparation/RecipePreparation.styled';

export const RecipePageHero = ({ func }) => {
  const cocktails = useSelector(selectFavorite);
  const user = useSelector(selectUser);
  let filter;

  // console.log(cocktails.favorite, 'Favorite');
  // console.log(cocktails, 'Cocktails');
  // console.log(func);

  // if (cocktails.favorite !== undefined) {
  //   filter = cocktails.favorite.filter(i => i._id === user.id);
  //   if (!filter) filter = null;
  //   console.log(filter);
  // }

  // if (!cocktails) {
  //   console.log('Empty');
  //   return null;
  // }

  return (
    cocktails !== undefined && (
      <>
        {/* {console.log(user.id, cocktails._id, 'ID')} */}
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
              {/* {console.log(filter, 'Filter before expression')} */}
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
