export const selectTodos = state => state.tasks.items;
export const selectLoading = state => state.tasks.loading;
export const selectFilter = state => state.filter;
export const selectUser = state => state.auth.user;
export const selectIsOnline = state => state.auth.online;
export const selectUserLoading = state => state.auth.loading;
export const selectAuthError = state => state.auth.error;
export const selectAuthToken = state => state.auth.data;
export const selectAuthAccessToken = state => state.auth.data.accessToken;
export const selectAuthRefreshToken = state => state.auth.data.refreshToken;
export const selectUserInfo = state => state.userInfo;
export const selectUserInfoEmail = state => state.userInfo.email;
export const selectTheme = state => state.userInfo.theme;
export const selectIsTaskExist = state => state.calendar.tasks;
export const selectTasks = state => state.calendar.monthDatesMap;
export const selectIsClicked = state => state.auth.isClicked;

export const selectMonthDateMap = state => state.calendar.monthDatesMap;
