import { useSelector } from 'react-redux';
import { selectCocktails, selectUser } from 'redux/selectors';
import {
  StyledGlassServi,
  StyledAboutContent,
  StyledButton,
  StyledImage,
} from './RecipePageHero.styled';
import { favoriteFilter } from 'components/utils/filter';
import { MainPageTitle } from 'components';

const RecipePageHero = ({ func }) => {
  const cocktails = useSelector(selectCocktails);
  const user = useSelector(selectUser);
  let filter;

  // console.log(cocktails.favorite, 'Favorite');
  console.log(cocktails, 'Cocktails');
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
        {console.log(user.id, cocktails._id, 'ID')}
        <StyledGlassServi>{cocktails.glass}</StyledGlassServi>
        <MainPageTitle title={cocktails.drink} />
        <StyledAboutContent>
          {cocktails.about ? cocktails.about : 'sample about'}
        </StyledAboutContent>
        {console.log(filter, 'Filter before expression')}
        {favoriteFilter(cocktails, user) ? (
          <StyledButton type="button" onClick={func}>
            Remove recipe from favorite
          </StyledButton>
        ) : (
          <StyledButton type="button" onClick={func}>
            Add recipe to favorite
          </StyledButton>
        )}
        <StyledImage
          src={cocktails.drinkThumb}
          alt="cocktail thumb"
          width={400}
          height={400}
        />
      </>
    )
  );
};

export default RecipePageHero;
