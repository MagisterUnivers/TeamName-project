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
import { nanoid } from '@reduxjs/toolkit';


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
  const [cocktailIngredientsList, setCocktailIngredientsList] = useState([])

  useEffect(() => {
    dispatch(getCategoriesListThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllGlassesThunk());
  }, [dispatch]);

  // useEffect(()=> {
  //   setCocktailIngredientsList([{   
  //   id: nanoid(),
  //   title: 'Lem',
  //   unitQuantity: '1',
  //   unit: 'cl',
  //   }])
  // }, []);

  const resetForm = () => {
    setImageURL('');
    setItemTitleRecipe('');
    setAboutRecipe('');
    setCategory(null);
    setGlass(null);
    setInstructions('');
    setCocktailIngredientsList([])
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
  }

  const handleIncIngredients = () => {
    console.log(cocktailIngredientsList);
    setCocktailIngredientsList(p => {
      return [...p, {
        id: nanoid(),
        title: '',
        unitQuantity: '',
        unit: '',
      }]
    });
    return;
  };

  console.log(cocktailIngredientsList);

  const handleDecIngredient = () => {
    const newIngredientsList = [...cocktailIngredientsList];
    newIngredientsList.pop();
    setCocktailIngredientsList(newIngredientsList);
  };

  
  const handleDeleteIngredient = (index) => {
    const newIngredientsList = [...cocktailIngredientsList];
    newIngredientsList.splice(index, 1);
    setCocktailIngredientsList(newIngredientsList);
  };

  const handleOnChangeIngredientName = (e, i) => {
    const tmpList = [...cocktailIngredientsList];
    // tmpList[i].id = e.value;
    // tmpList[i].title = e.label;
    console.log(tmpList);
    tmpList[i] = {
      ...tmpList[i],
      id: e.value,
      title: e.label
    }
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
    measure: `${obj.unitQuantity} ${obj.unit}`
  }
  })
  console.log(newIngredientsList);

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
    formData.append('ingredients', JSON.stringify(newIngredientsList));

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
        <RecipeIngredientsFields 
          cocktailIngredientList={cocktailIngredientsList}
          handleIncIngredients={handleIncIngredients}
          handleDecIngredients={handleDecIngredient}
          handleOnDeleteIngredient={handleDeleteIngredient}
          handleOnChangeIngredientName={handleOnChangeIngredientName}
          handleOnChangeIngredientUnit={handleOnChangeIngredientUnit}
          handleOnChangeUnitQuantity={handleOnChangeUnitQuantity}
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

export default AddRecipeForm;
