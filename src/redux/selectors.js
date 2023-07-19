export const selectFilter = state => state.filter;
export const selectUser = state => state.auth.user;
export const selectIsOnline = state => state.auth.online;
export const selectUserLoading = state => state.auth.loading;
export const selectAuthError = state => state.auth.error;
export const selectAuthToken = state => state.auth.data;
export const selectAuthAccessToken = state => state.auth.accessToken;
export const selectAuthRefreshToken = state => state.auth.data.refreshToken;
export const selectIsClicked = state => state.auth.isClicked;

// UserInfo
export const selectUserInfo = state => state.userInfo;
export const selectUserInfoEmail = state => state.userInfo.email;
export const selectUserInfoName = state => state.userInfo.user.name;
export const selectUserInfoAvatar = state => state.userInfo.avatarURL;
export const selectTheme = state => state.userInfo.theme;
export const selectUserArray = state => state.userInfo.user;
export const selectRender = state => state.userInfo.firstRender;

//Cocktails
export const selectCocktails = state => state.cocktails.cocktails;
export const selectCocktailsIsLoading = state => state.loading;
export const selectCategories = state => state.cocktails.categories;
export const selectGlasses = state => state.cocktails.glasses;
export const selectIngredients = state => state.cocktails.ingredients;
export const selectSearch = state => state.cocktails.search;
export const selectPage = state => state.cocktails.page;
export const selectTotalHits = state => state.cocktails.totalHits;
