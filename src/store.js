import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice from './features/Auth/AuthSlice';
import categorySlice from './features/category/categorySlice';
import stockSlice from './features/stock/stockSlice';
import unitSlice from './slices/unitSlice';
import breadcrumbSlice from './slices/breadcrumbSlice';
import profileSlice from './features/profile/profileSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  category: categorySlice,
  stock: stockSlice,
  unit: unitSlice,
  breadcrumb: breadcrumbSlice,
  profile: profileSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
