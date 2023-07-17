import { useSelector } from 'react-redux';
import { selectCocktails } from 'redux/selectors';
import {
  StyledCardWrapper,
  StyledListWrapper,
  StyledTextWrapper,
} from './RecipeIngredientsList.styled';

const RecipeIngredientsList = () => {
  const cocktails = useSelector(selectCocktails);

  console.log(cocktails, 'state / selector');

  if (!cocktails) {
    console.log('Empty');
    return null;
  }

  return (
    <div style={{ marginTop: 100 }}>
      <p style={{ marginBottom: 24 }}>Ingredients</p>
      <StyledListWrapper>
        {cocktails.ingredients &&
          cocktails.ingredients.map((item, i) => {
            return (
              <StyledCardWrapper key={i}>
                <img
                  src={
                    item.ingredientThumb
                      ? item.ingredientThumb
                      : require('../../assets/img/testPNG.png')
                  }
                  alt="ingredient thumb"
                  width={220}
                  height={220}
                />
                <StyledTextWrapper>
                  <p>{item.title}</p>
                  <p>{item.measure}</p>
                </StyledTextWrapper>
              </StyledCardWrapper>
            );
          })}
      </StyledListWrapper>
    </div>
  );
};

export default RecipeIngredientsList;
