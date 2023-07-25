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
import { userInfoReducer } from './UserInfo/userInfoSlice';

const persistConfig = {
  key: 'data',
  version: 1,
  storage,
  whitelist: ['accessToken', 'userInfo', 'user', 'online'],
};

const persistConfigForUserInfo = {
  key: 'theme',
  version: 2,
  storage,
  whitelist: ['theme', 'user', 'firstRender'],
};

const persistConfigForCocktails = {
  key: 'cocktails',
  version: 3,
  storage,
  whitelist: ['cocktails', 'ingredients', 'categories', 'glass'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    cocktails: persistReducer(persistConfigForCocktails, cocktailsReducer),
    userInfo: persistReducer(persistConfigForUserInfo, userInfoReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
