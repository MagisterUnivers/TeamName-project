// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
// import { useSelector } from 'react-redux';

// import { getCocktailByIdThunk } from 'redux/Cocktails/cocktailsOperations';
// import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
// import { selectCocktails } from 'redux/selectors';
// import DrinkCard from 'components/DrinkCard/DrinkCard';

// const RecipePage = () => {
//   const { drinkId } = useParams();
//   const dispatch = useDispatch();
//   const cocktail = useSelector(selectCocktails);
//   useEffect(() => {
//     dispatch(getCocktailByIdThunk(drinkId));
//   }, [dispatch, drinkId]);

//   return (
//     <>
//       <MainPageTitle title={'A Drink'} />
//       <DrinkCard id={drinkId} cocktail={cocktail} />
//     </>
//   );
// };

// export default RecipePage;
