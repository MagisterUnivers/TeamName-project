import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories, selectGlasses } from '../../../redux/selectors';
import {
  getCategoriesListThunk,
  getAllGlassesThunk,
  addRecipeThunk,
} from 'redux/Cocktails/cocktailsOperations';
import { Formik } from 'formik';
import { StyledAddButton, StyledForm } from './AddRecipeForm.styled';
import { useNavigate } from 'react-router';
import RecipeDescriptionFields from '../../RecipeDescriptionFields/RecipeDescriptionFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import { RecipeIngredientsFields } from 'components';

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const drinksCategory = useSelector(selectCategories);
  const drinksGlass = useSelector(selectGlasses);
  const [imgURL, setImageURL] = useState('');
  const [imgData, setImageData] = useState(null);
  const [itemTitleRecipe, setItemTitleRecipe] = useState('');
  const [aboutRecipe, setAboutRecipe] = useState('');
  const [category, setCategory] = useState({ label: 'Cocktail' });
  const [glass, setGlass] = useState({ label: 'Highball glass' });
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    dispatch(getCategoriesListThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllGlassesThunk());
  }, [dispatch]);

  const resetForm = () => {
    setImageURL('');
    setItemTitleRecipe('');
    setAboutRecipe('');
    setCategory(null);
    setGlass(null);
    setInstructions('');
  };

  const handleOnImgSelect = async e => {
    const localFile = e.target.files[0];
    setImageData(localFile);
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImageURL(reader.result);
    });
    reader.readAsDataURL(localFile);
  };
  const handleOnInstructions = e => {
    const text = e.target.value;
    const lines = text.split('\n');
    setInstructions(lines);
    console.log(instructions);
  };

  const handleOnSubmit = () => {
    const formData = new FormData();
    if (imgData) {
      formData.append('drinkThumb', imgData);
    }
    formData.append('drink', itemTitleRecipe);
    formData.append('about', aboutRecipe);
    formData.append('category', category.label);
    formData.append('glass', glass.label);
    formData.append('instructions', instructions);

    dispatch(addRecipeThunk(formData));
    // resetForm();
    // navigate('/my', { replace: true });
  };

  return (
    <>
      <Formik
        initialValues={{ imgURL: '', itemTitleRecipe: '', aboutRecipe: '' }}
        onSubmit={handleOnSubmit}
      >
        <StyledForm autoComplete="off">
          <RecipeDescriptionFields
            dataField={{
              imgURL,
              itemTitleRecipe,
              aboutRecipe,
              category,
              glass,
            }}
            handleOnImgSelect={handleOnImgSelect}
            handleOnTitleRecipe={setItemTitleRecipe}
            handleOnAboutRecipe={setAboutRecipe}
            handleOnCategory={setCategory}
            handleOnGlass={setGlass}
            categoryList={drinksCategory}
            glassList={drinksGlass}
          />
          <RecipeIngredientsFields />
          <RecipePreparationFields
            dataField={instructions}
            handleOnInstructions={handleOnInstructions}
          />
          <StyledAddButton type="submit">Add</StyledAddButton>
        </StyledForm>
      </Formik>
    </>
  );
};

export default AddRecipeForm;
