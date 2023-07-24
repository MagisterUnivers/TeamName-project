export const favoriteFilter = (cocktails, user) => {
  let filter;
  if (cocktails !== undefined) {
    if (cocktails.favorite !== undefined) {
      filter = cocktails.favorite.includes(user.id);
    }
  }
  console.log(filter, 'Filter func');
  return filter;
};
