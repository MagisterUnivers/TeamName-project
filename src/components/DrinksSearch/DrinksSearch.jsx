import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCategoriesListThunk,
  getIngredientsListThunk,
  searchAllDrinksThunk,
} from 'redux/Cocktails/cocktailsOperations';
import { SelectStyled, InputStyled } from './DrinksSearch.styled';
import {
  selectCategories,
  selectIngredients,
  selectSearch,
} from 'redux/selectors';
import {
  setChosenCategory,
  setChosenIngredient,
  setQuery,
} from 'redux/Cocktails/cocktailsSlice';

const DrinksSearch = ({ categoryDefault }) => {
  const dispatch = useDispatch();
  const ingredientsList = useSelector(selectIngredients);
  const categoriesList = useSelector(selectCategories);

  const search = useSelector(selectSearch);

  useEffect(() => {
    dispatch(getCategoriesListThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getIngredientsListThunk());
  }, [dispatch]);

  useEffect(() => {
    if (search) dispatch(searchAllDrinksThunk(search));
  }, [dispatch, search]);

  const styles = {
    menuList: base => ({
      ...base,
      height: '200px',
      '::-webkit-scrollbar': {
        width: '8px',
        height: '110px',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
        margin: '5px',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#434D67',
        height: '110px',
        width: '8px',
        borderRadius: '20px',
        padding: '20px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#434D67',
      },
    }),
  };
  return (
    <>
      <InputStyled
        type="text"
        name="query"
        placeholder="Enter the text"
        onChange={e => {
          dispatch(setQuery(e.target.value));
        }}
      />
      <SelectStyled
        styles={styles}
        name="category"
        options={categoriesList.map(category => {
          return { value: category._id, label: category.category };
        })}
        placeholder="All categories"
        isSearchable={true}
        classNamePrefix="react-select"
        onChange={e => {
          dispatch(setChosenCategory(e.label));
        }}
        required
      />
      <SelectStyled
        styles={styles}
        name="ingredient"
        options={ingredientsList.map(ingredient => {
          return { value: ingredient._id, label: ingredient.title };
        })}
        placeholder="Ingredients"
        isSearchable={true}
        classNamePrefix="react-select"
        onChange={e => {
          dispatch(setChosenIngredient(e.label));
        }}
        required
      />
    </>
  );
};

export default DrinksSearch;
