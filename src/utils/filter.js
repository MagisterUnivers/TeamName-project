export const favoriteFilter = (cocktails, user) => {
  let filter;
  if (cocktails !== undefined) {
    if (cocktails.favorite !== undefined) {
      filter = cocktails.favorite.includes(user.id);
    }
  }
  return filter;
};
