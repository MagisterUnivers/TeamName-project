// import React, { useEffect } from 'react';
// import { FollowUs, Nav, Logo } from 'components';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCocktailsByFourCategoryThunk } from 'redux/Cocktails/cocktailsOperations';

// import PreviewDrinks from '../../components/PreviewDrinks/PreviewDrinks'; // by Igor

// import { selectCocktails } from 'redux/selectors';
// import { Container } from 'components/Container/Container';

// const TestPage = () => {
//   const dispatch = useDispatch();
//   // const category = encodeURIComponent('Cocktail');
//   const category = useSelector(selectCocktails);
//   //   console.log(category);

//   const ordinaryDrink = category.filter(item => {
//     return item.category === 'Ordinary Drink';
//   });

//   const cocktail = category.filter(item => {
//     return item.category === 'Cocktail';
//   });

//   const shake = category.filter(item => {
//     return item.category === 'Shake';
//   });

//   const other = category.filter(item => {
//     return item.category === 'Other/Unknown';
//   });

//   useEffect(() => {
//     dispatch(getCocktailsByFourCategoryThunk());
//   }, []);

//   return (
//     <>
//       {/* <ThemeButton {...props} />
//       <Nav /> */}

//       <Container>
//         {/* <Logo />
//         <FollowUs />
//         <div style={{ height: '300vh' }}></div> */}

//         <PreviewDrinks title="Ordinary Drink" data={ordinaryDrink} />
//         <PreviewDrinks title="Cocktail" data={cocktail} />
//         <PreviewDrinks title="Shake" data={shake} />
//         <PreviewDrinks title="Other/Unknown" data={other} />
//       </Container>
//     </>
//   );
// };

// export default TestPage;
