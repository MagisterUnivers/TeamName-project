import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { nanoid } from '@reduxjs/toolkit';
import { Formik } from 'formik';
import Notiflix from 'notiflix';
import {
  selectCategories,
  selectGlasses,
  selectIngredients,
} from '../../../redux/selectors';
import {
  getCategoriesListThunk,
  getAllGlassesThunk,
  addRecipeThunk,
  getIngredientsListThunk,
} from 'redux/Cocktails/cocktailsOperations';
import { StyledAddButton, StyledForm } from './AddRecipeForm.styled';
import {
  RecipeDescriptionFields,
  RecipeIngredientsFields,
  RecipePreparationFields,
} from 'components';

export const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const drinksCategory = useSelector(selectCategories);
  const drinksGlass = useSelector(selectGlasses);
  const ingredientsList = useSelector(selectIngredients);
  const [imgURL, setImageURL] = useState('');
  const [imgData, setImageData] = useState(null);
  const [itemTitleRecipe, setItemTitleRecipe] = useState('');
  const [aboutRecipe, setAboutRecipe] = useState('');
  const [category, setCategory] = useState({ label: 'Cocktail' });
  const [glass, setGlass] = useState({ label: 'Highball glass' });
  const [instructions, setInstructions] = useState([]);
  const [cocktailIngredientsList, setCocktailIngredientsList] = useState([]);

  useEffect(() => {
    if (drinksCategory.length !== 0) return;
    dispatch(getCategoriesListThunk());
  }, [dispatch, drinksCategory]);

  useEffect(() => {
    if (drinksGlass.length !== 0) return;
    dispatch(getAllGlassesThunk());
  }, [dispatch, drinksGlass]);

  useEffect(() => {
    if (ingredientsList.length !== 0) return;
    dispatch(getIngredientsListThunk());
  }, [dispatch, ingredientsList]);

  const resetForm = () => {
    setImageURL('');
    setItemTitleRecipe('');
    setAboutRecipe('');
    setCategory(null);
    setGlass(null);
    setInstructions('');
    setCocktailIngredientsList([]);
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
  };

  const handleIncIngredients = () => {
    console.log(cocktailIngredientsList);
    setCocktailIngredientsList(p => {
      return [
        ...p,
        {
          id: nanoid(),
          title: '',
          unitQuantity: '',
          unit: '',
        },
      ];
    });
    return;
  };

  const handleDecIngredient = () => {
    const newIngredientsList = [...cocktailIngredientsList];
    newIngredientsList.pop();
    setCocktailIngredientsList(newIngredientsList);
  };

  const handleDeleteIngredient = index => {
    const newIngredientsList = [...cocktailIngredientsList];
    newIngredientsList.splice(index, 1);
    setCocktailIngredientsList(newIngredientsList);
  };

  const handleOnChangeIngredientName = (e, i) => {
    const tmpList = [...cocktailIngredientsList];
    console.log(tmpList);
    tmpList[i] = {
      ...tmpList[i],
      id: e.value,
      title: e.label,
    };
    setCocktailIngredientsList(tmpList);
  };

  const handleOnChangeIngredientUnit = (e, i) => {
    const tmpList = [...cocktailIngredientsList];
    tmpList[i].unit = e.value;
    setCocktailIngredientsList(tmpList);
  };

  const handleOnChangeUnitQuantity = (e, i) => {
    let tmpData = e.currentTarget.value;
    if (tmpData < 0) {
      tmpData = 0;
      e.currentTarget.value = 0;
    }
    const tmpList = [...cocktailIngredientsList];
    tmpList[i].unitQuantity = tmpData;
    setCocktailIngredientsList(tmpList);
  };

  const newIngredientsList = cocktailIngredientsList.map(obj => {
    return {
      _id: obj.id,
      title: obj.title,
      measure: `${obj.unitQuantity} ${obj.unit}`,
    };
  });

  const handleOnSubmit = async () => {
    const formData = new FormData();
    if (imgData) {
      formData.append('drinkThumb', imgData);
    }
    formData.append('drink', itemTitleRecipe);
    formData.append('about', aboutRecipe);
    formData.append('category', category.label);
    formData.append('glass', glass.label);
    formData.append('instructions', instructions);
    formData.append('ingredients', JSON.stringify(newIngredientsList));
    console.log(formData.get('ingredients'));
    if (formData.get('ingredients') === '[]') {
      Notiflix.Report.warning('Please, add necessary ingredients');
      return;
    }
    const res = await dispatch(addRecipeThunk(formData));
    if (res.meta.requestStatus === "fulfilled") {
      resetForm();
      navigate('/main/my');
    }
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
          <RecipeIngredientsFields
            cocktailIngredientList={cocktailIngredientsList}
            handleIncIngredients={handleIncIngredients}
            handleDecIngredients={handleDecIngredient}
            handleOnDeleteIngredient={handleDeleteIngredient}
            handleOnChangeIngredientName={handleOnChangeIngredientName}
            handleOnChangeIngredientUnit={handleOnChangeIngredientUnit}
            handleOnChangeUnitQuantity={handleOnChangeUnitQuantity}
            ingredientsList={ingredientsList}
          />
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
