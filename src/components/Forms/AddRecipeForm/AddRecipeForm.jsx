import React, { useState, useEffect } from 'react';
import RecipeDescriptionFields from '../../RecipeDescriptionFields/RecipeDescriptionFields';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories, selectGlasses } from '../../../redux/selectors';
import {
  getCategoriesListThunk,
  getAllGlassesThunk,
  addRecipeThunk,
} from 'redux/Cocktails/cocktailsOperations';
import { Formik } from 'formik';
import { StyledForm } from './AddRecipeForm.styled';
import { useNavigate } from 'react-router';

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

  const handleOnSubmit = () => {
    const formData = new FormData();
    if (imgData) {
      formData.append('drinkThumb', imgData);
    }
    formData.append('drink', itemTitleRecipe);
    formData.append('about', aboutRecipe);
    formData.append('category', category.label);
    formData.append('glass', glass.label);

    dispatch(addRecipeThunk(formData));
    // resetForm();
    // navigate('/my', { replace: true });
  };

  return (
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
        <button type="submit">Add</button>
      </StyledForm>
    </Formik>
  );
};

export default AddRecipeForm;
