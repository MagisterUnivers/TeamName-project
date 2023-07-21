import { useDispatch, useSelector } from 'react-redux';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import {
  SelectStyled,
  InputStyled,
  StyledSearchButton,
  SearchFormStyled,
  QueryFormStyled,
  StyledSearchIcon,
  HoverWrapper,
  FirstHoverWrapper,
} from './DrinksSearch.styled';
import {
  selectCategories,
  selectIngredients,
  selectSearch,
} from 'redux/selectors';
import {
  setChosenCategory,
  setChosenIngredient,
  setPage,
  setQuery,
} from 'redux/Cocktails/cocktailsSlice';

export const DrinksSearch = ({ categoryName }) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState();
  const ingredientsList = useSelector(selectIngredients);
  const categoriesList = useSelector(selectCategories);
  const search = useSelector(selectSearch);
  // console.log(searchQuery);

  //creating options for the dropdowns
  const categoriesListOptions = categoriesList.map(category => {
    return { value: category._id, label: category.category };
  });
  categoriesListOptions.unshift({
    value: '100',
    label: 'Categories',
  });
  const ingredientsListOptions = ingredientsList.map(ingredient => {
    return { value: ingredient._id, label: ingredient.title };
  });
  ingredientsListOptions.unshift({
    value: '100',
    label: 'Ingredients',
  });
  //styling scrollbar and color in the dropdown
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
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: 'rgba(243, 243, 243, 0.40)',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#f3f3f3' : 'rgba(243, 243, 243, 0.40)',
    }),
  };

  const handleChangeQuery = e => {
    setSearchQuery(e.target.value.trim());
  };
  const handleChangeCategory = e => {
    if (e.label !== 'Categories') {
      dispatch(setChosenCategory(e.label));
      dispatch(setPage(1));
    } else {
      dispatch(setChosenCategory('Cocktail'));
    }
  };
  const handleChangeIngredient = e => {
    if (e.label !== 'Ingredients') {
      dispatch(setChosenIngredient(e.label));
      dispatch(setPage(1));
    } else {
      dispatch(setChosenIngredient(''));
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setQuery(searchQuery));
  };
  return (
    <SearchFormStyled>
      <QueryFormStyled onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          name="query"
          value={searchQuery}
          autocomplete="off"
          placeholder="Enter the text"
          onChange={handleChangeQuery}
        />

        <StyledSearchButton type="submit">
          <HoverWrapper></HoverWrapper>
          <StyledSearchIcon />
        </StyledSearchButton>
      </QueryFormStyled>

      <SelectStyled
        // theme={customTheme}
        styles={styles}
        name="category"
        value={search.category}
        options={categoriesListOptions}
        placeholder="All categories"
        defaultValue={{ label: categoryName, value: '0' }}
        isSearchable={true}
        autoFocus
        classNamePrefix="react-select"
        onChange={handleChangeCategory}
        required
      />
      <SelectStyled
        styles={styles}
        value={search.ingredient}
        name="ingredient"
        defaultValue={{ label: 'Indredients', value: '0' }}
        options={ingredientsListOptions}
        placeholder="Ingredients"
        isSearchable={true}
        autoFocus
        classNamePrefix="react-select"
        onChange={handleChangeIngredient}
        required
      />
    </SearchFormStyled>
  );
};
