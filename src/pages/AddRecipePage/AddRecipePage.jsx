import React, { useState } from 'react';
import RecipeDescriptionFields from '../../components/RecipeDescriptionFields/RecipeDescriptionFields';
import { useSelector } from 'react-redux';
import { selectCategory, selectGlass } from '../../redux/selectors';

const AddRecipePage = () => {
  const drinksCategory = useSelector(selectCategory);
  const drinksGlass = useSelector(selectGlass);
  const [drinkThumb, setDrinkThumb] = useState(null);
  const [drink, setDrink] = useState(null);
  const [about, setAbout] = useState(null);

  return (
    <div>
      <RecipeDescriptionFields category={drinksCategory} glass={drinksGlass} />
    </div>
  );
};

export default AddRecipePage;
