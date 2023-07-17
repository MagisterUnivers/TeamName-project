// export const favoriteFilter = (cocktails, user) => {
//   let filter;
//   let boolean = true;
//   if (cocktails.length !== 0) {
//     if (cocktails.favorite !== undefined) {
//       filter = cocktails.favorite.find(i => i._id === user.id);
//       if (!filter) boolean = false;
//       else boolean = true;
//       console.log(filter, 'Filter func');
//       console.log(boolean, 'Filter return');
//     }
//   }
//   return boolean;
//   // return true;
// };

export const favoriteFilter = (cocktails, user) => {
  let filter;
  if (cocktails !== undefined) {
    if (cocktails.favorite !== undefined) {
      filter = cocktails.favorite.includes(user.id);
      console.log(filter, 'Filter func');
    }
  }
  return filter;
};
