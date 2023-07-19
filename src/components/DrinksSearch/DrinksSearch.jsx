import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import {
  SelectStyled,
  InputStyled,
  StyledSearchButton,
  SearchFormStyled,
  QueryFormStyled,
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

const DrinksSearch = ({ categoryName }) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState();
  const ingredientsList = useSelector(selectIngredients);
  const categoriesList = useSelector(selectCategories);
  const search = useSelector(selectSearch);

  // const navigate
  //creating options for the dropdowns
  const categoriesListOptions = categoriesList.map(category => {
    return { value: category._id, label: category.category };
  });
  categoriesListOptions.unshift({
    value: '100',
    label: 'All categories',
  });
  const ingredientsListOptions = ingredientsList.map(ingredient => {
    return { value: ingredient._id, label: ingredient.title };
  });
  ingredientsListOptions.unshift({
    value: '100',
    label: 'All ingredients',
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
    setSearchQuery(e.target.value);
  };
  const handleChangeCategory = e => {
    if (e.label !== 'All categories') {
      dispatch(setChosenCategory(e.label));
      dispatch(setPage(1));
    } else {
      dispatch(setChosenCategory(''));
    }
  };
  const handleChangeIngredient = e => {
    if (e.label !== 'All ingredients') {
      dispatch(setChosenIngredient(e.label));
      dispatch(setPage(1));
    } else {
      dispatch(setChosenIngredient(''));
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      Notify.warning('Write something.', {
        fontSize: '16px',
        width: '350px',
        padding: '10px',
      });
    }

    dispatch(setQuery(searchQuery));
    // navigate(
    //   `/main/drink/Cocktail?query=${search.query}&ingredient=${search.chosenIngredient}`
    // );
  };
  return (
    <SearchFormStyled>
      {/* <PaperStyled
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'right',
          maxWidth: 335,
          maxHeight: 54,
          background: 'transparent',
          border: '1px solid rgba(243, 243, 243, 0.2)',
          borderRadius: 200,
          // paddingleft: 24,
          // paddingTop: 18,
          // paddingBottom: 18,
          color: '#f3f3f3',
          fontSize: 14,
          fonWeight: 400,
          lineHeight: 'calc(18 / 14)',
          opacity: 0.800000011920929,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          name="query"
          placeholder="Enter the text"
          inputProps={{ 'aria-label': 'Enter the text' }}
          label="Controlled"
          value={search.query}
          onСhange={handleChangeQuery}
        />
        <IconButton
          type="submit"
          sx={{ p: '10px', color: '#F3F3F3' }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </PaperStyled> */}

      {/* <form class="search-form">
    <div class="search-form__wrapper">
    <button class="search-form__btn" type="submit" aria-label="Search">
        <svg class="search-form__img" width="24" height="24">
          <use href="./img/sprite.svg#icon-search"></use>
        </svg>
    </button>
    <input class="search-form__input" type="text" name="search" placeholder="Search |">
    </div>
</form> */}
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
          <SearchIcon />
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

export default DrinksSearch;

// styles={{
//   control: (baseStyles, state) => ({
//     ...baseStyles,
//     width: '335px',
//     height: '54px',
//     background: '#161f37',
//     border: 'none',
//     outline: 'none',
//     boxShadow: 'none',
//     borderRadius: '200px',
//     cursor: 'pointer',
//     marginBottom: '14px',
//   }),
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
//   placeholder: (baseStyles, state) => ({
//     ...baseStyles,
//     paddingTop: '18px',
//     paddingBottom: '18px',
//     paddingLeft: '20px',
//     color: '#f3f3f3',
//     fontSize: '14px',
//     fontWeight: '400',
//     lineHeight: 'calc(18 / 14)',
//   }),
//   menu: (baseStyles, state) => ({
//     ...baseStyles,
//     margin: '4px',
//     width: '335px',
//     borderRadius: '20px',
//     backgroundColor: '#161f37',
//   }),
//   menuList: base => ({
//     ...base,
//     height: '200px',
//     '::-webkit-scrollbar': {
//       width: '8px',
//       height: '110px',
//     },
//     '::-webkit-scrollbar-track': {
//       background: 'transparent',
//       margin: '5px',
//     },
//     '::-webkit-scrollbar-thumb': {
//       background: '#434D67',
//       height: '110px',
//       width: '8px',
//       borderRadius: '20px',
//       padding: '20px',
//     },
//     '::-webkit-scrollbar-thumb:hover': {
//       background: '#434D67',
//     },
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     color: state.isSelected ? '#f3f3f3' : 'rgba(243, 243, 243, 0.40)',
//   }),
// }}
