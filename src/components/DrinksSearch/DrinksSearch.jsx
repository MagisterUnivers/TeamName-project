import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import {
  getAllGlassesThunk,
  getCategoriesListThunk,
  getIngredientsListThunk,
  searchAllDrinksThunk,
} from 'redux/Cocktails/cocktailsOperations';
import { SelectStyled, InputStyled } from './DrinksSearch.styled';
import {
  selectCategories,
  selectIngredients,
  selectPage,
  selectSearch,
} from 'redux/selectors';
import {
  setChosenCategory,
  setChosenIngredient,
  setPage,
  setQuery,
} from 'redux/Cocktails/cocktailsSlice';

const DrinksSearch = ({ categoryName }) => {
  const dispatch = useDispatch();
  const ingredientsList = useSelector(selectIngredients);
  const categoriesList = useSelector(selectCategories);
  const page = useSelector(selectPage);

  const search = useSelector(selectSearch);
  const category = search.chosenCategory;
  console.log(category);
  useEffect(() => {
    dispatch(getCategoriesListThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getIngredientsListThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllGlassesThunk());
  }, [dispatch]);

  useEffect(() => {
    // if (search.query || search.chosenCategory || search.chosenIngredient||)
    dispatch(searchAllDrinksThunk({ search, page }));
  }, [dispatch, search, page]);

  const styles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#f3f3f3' : 'rgba(243, 243, 243, 0.40)',
    }),
  };
  // function customTheme(theme) {
  //   return {
  //     ...theme,
  //     colors: { ...theme.colors, primary25: 'orange', primary: 'orange' },
  //   };
  // }
  console.log(categoryName);
  return (
    <>
      <InputStyled
        type="text"
        name="query"
        value={search.query}
        // placeholder="Enter the text"
        onChange={e => {
          dispatch(setQuery(e.target.value));
          dispatch(setPage(1));
        }}
      />
      ;
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            width: '335px',
            height: '54px',
            background: '#161f37',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            borderRadius: '200px',
            cursor: 'pointer',
          }),
          // @media ${devices.tablet} {
          //   width: 199px,
          //   height: 56px,
          // }

          // @media ${devices.desktop} {
          // }
          // &--is-focused,
          // &--menu-is-open {
          //   outline: none;
          //   cursor: pointer;
          // }}
          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            paddingTop: '18px',
            paddingBottom: '18px',
            paddingLeft: '20px',
            color: '#f3f3f3',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: 'calc(18 / 14)',
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            margin: '4px',
            width: '335px',
            borderRadius: '20px',
            backgroundColor: '#161f37',
          }),
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
          option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? '#f3f3f3' : 'rgba(243, 243, 243, 0.40)',
          }),
        }}
        // theme={customTheme}
        name="category"
        options={categoriesList.map(category => {
          return { value: category._id, label: category.category };
        })}
        placeholder="All categories"
        defaultValue={{ label: categoryName, value: '0' }}
        isSearchable={true}
        autoFocus
        isClearable
        ref={() => {
          dispatch(setChosenCategory(''));
        }}
        classNamePrefix="react-select"
        onChange={e => {
          dispatch(setChosenCategory(e.label));
          dispatch(setPage(1));
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
          dispatch(setPage(1));
        }}
        required
      />
    </>
  );
};

export default DrinksSearch;
