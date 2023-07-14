import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './Auth/authSlice';
import { cocktailsReducer } from './Cocktails/cocktailsSlice';
// import { userInfoReducer } from './UserInfo/userInfoSlice';
// import { calendarEventsReducer } from './CalendarEvents/calendarEventsSlice';

const persistConfig = {
  key: 'data',
  version: 1,
  storage,
  whitelist: ['accessToken', 'userInfo', 'user', 'online'],
};

// const persistConfigForTheme = {
//   key: 'theme',
//   version: 2,
//   storage,
//   whitelist: ['theme'],
// };

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    // userInfo: persistReducer(persistConfigForTheme, userInfoReducer),
    // calendar: calendarEventsReducer,
    cocktails: cocktailsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
