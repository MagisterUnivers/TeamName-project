import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { searchAllDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import {
  SelectStyled,
  InputStyled,
  SerachWrapperStyled,
  SearchWrapperStyled,
  PaperStyled,
} from './DrinksSearch.styled';
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
import { useEffect } from 'react';
// import { useNavigate } from 'react-router';

const DrinksSearch = ({ categoryName }) => {
  const dispatch = useDispatch();
  const ingredientsList = useSelector(selectIngredients);
  const categoriesList = useSelector(selectCategories);
  const page = useSelector(selectPage);
  const search = useSelector(selectSearch);
  // const navigate = useNavigate();
  // function customTheme(theme) {
  //   return {
  //     ...theme,
  //     colors: { ...theme.colors, primary25: 'orange', primary: 'orange' },
  //   };
  // }
  const categoriesListOptions = categoriesList.map(category => {
    return { value: category._id, label: category.category };
  });
  categoriesListOptions.unshift({
    value: '100',
    label: 'No category',
  });

  const ingredientsListOptions = ingredientsList.map(ingredient => {
    return { value: ingredient._id, label: ingredient.title };
  });
  ingredientsListOptions.unshift({
    value: '100',
    label: 'No ingredient',
  });
  console.log(categoriesListOptions);
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
    clearIndicator: prevStyle => ({
      ...prevStyle,

      ':hover': {
        color: 'rgba(168, 31, 31)',
      },
      padding: '0px',
    }),
  };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (search.query.trim() === '') {
  //     Notify.warning('Write something.', {
  //       fontSize: '16px',
  //       width: '350px',
  //       padding: '10px',
  //     });
  //     return;
  //   }
  // navigate(
  //   `/main/drink/Cocktail?query=${search.query}&ingredient=${search.chosenIngredient}`
  // );
  // };

  return (
    <SearchWrapperStyled>
      <PaperStyled
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
          placeholder="Enter the text"
          inputProps={{ 'aria-label': 'Enter the text' }}
          label="Controlled"
          value={search.query}
          onSubmit={e => {
            dispatch(setQuery(e.target.value));
            dispatch(setPage(1));
          }}
        />
        <IconButton
          type="button"
          sx={{ p: '10px', color: '#F3F3F3' }}
          aria-label="search"
          onSubmit
        >
          {/* <SearchIcon /> */}
        </IconButton>
      </PaperStyled>
      {/* <form onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          name="query"
          autocomplete="off"
          value={search.query}
          placeholder="Enter the text"
          onChange={e => {
            dispatch(setQuery(e.target.value));
            dispatch(setPage(1));
          }}
        />
        <button type="submit">Search</button>
      </form> */}

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
        onChange={e => {
          dispatch(setChosenCategory(e.label));
          dispatch(setPage(1));
        }}
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
        onChange={e => {
          dispatch(setChosenIngredient(e.label));
          dispatch(setPage(1));
        }}
        required
      />
    </SearchWrapperStyled>
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
