import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCocktailsByFourCategoryThunk } from 'redux/Cocktails/cocktailsOperations';
import { PreviewDrinks } from '../../components/PreviewDrinks/PreviewDrinks'; // by Igor
import { selectCocktails } from 'redux/selectors';
import { OtherDrinksButton } from 'components/Buttons/OtherDrinks.jsx/OtherDrinks';
import { HeroSection } from 'components';

const HomePage = () => {
  const dispatch = useDispatch();
  const category = useSelector(selectCocktails);

  const ordinaryDrink = category.filter(item => {
    return item.category === 'Ordinary Drink';
  });

  const cocktail = category.filter(item => {
    return item.category === 'Cocktail';
  });

  const shake = category.filter(item => {
    return item.category === 'Shake';
  });

  const other = category.filter(item => {
    return item.category === 'Other/Unknown';
  });

  useEffect(() => {
    if (category !== undefined && category.length === 0)
      dispatch(getCocktailsByFourCategoryThunk());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {category !== undefined && (
        <>
          <HeroSection />
          <PreviewDrinks title="Ordinary Drink" data={ordinaryDrink} />
          <PreviewDrinks title="Cocktail" data={cocktail} />
          <PreviewDrinks title="Shake" data={shake} />
          <PreviewDrinks title="Other/Unknown" data={other} />
          <OtherDrinksButton />
        </>
      )}
    </>
  );
};
export default HomePage;

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCocktailsByFourCategoryThunk } from 'redux/Cocktails/cocktailsOperations';
// import { PreviewDrinks } from '../../components/PreviewDrinks/PreviewDrinks'; // by Igor
// import { selectCocktails } from 'redux/selectors';
// import { OtherDrinksButton } from 'components/Buttons/OtherDrinks.jsx/OtherDrinks';

// const HomePage = () => {
//   const dispatch = useDispatch();
//   const category = useSelector(selectCocktails);

//   const ordinaryDrink = category[3]?.drinks;

//   const shake = category[0]?.drinks;

//   const cocktail = category[2]?.drinks;

//   const other = category[1]?.drinks;

//   useEffect(() => {
//     if (category !== undefined && category.length === 0)
//       dispatch(getCocktailsByFourCategoryThunk());
//   }, [category]);

//   return (
//     <>
//       {category !== undefined && (
//         <>
//           <PreviewDrinks title="Ordinary Drink" data={ordinaryDrink} />
//           <PreviewDrinks title="Cocktail" data={cocktail} />
//           <PreviewDrinks title="Shake" data={shake} />
//           <PreviewDrinks title="Other/Unknown" data={other} />
//           <OtherDrinksButton />
//         </>
//       )}
//     </>
//   );
// };
// export default HomePage;
