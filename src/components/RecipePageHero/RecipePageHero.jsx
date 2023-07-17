import { useSelector } from 'react-redux';
import { selectCocktails } from 'redux/selectors';

const RecipePageHero = () => {
  const cocktails = useSelector(selectCocktails);

  console.log(cocktails, 'state / selector');

  if (!cocktails) {
    console.log('Empty');
    return null;
  }

  return (
    <>
      <p>{cocktails.glass}</p>
      <h2>{cocktails.drink}</h2>
      <p>{cocktails.about ? cocktails.about : 'sample about'}</p>
      <img
        src={cocktails.drinkThumb}
        alt="cocktail thumb"
        width={400}
        height={400}
      />
    </>
  );
};

export default RecipePageHero;
