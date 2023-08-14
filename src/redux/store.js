import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initialReducer from './Functions/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'prova3',
  storage,
  version: 1
};

//e krijojme reducerin dhe e bejme persist
const rootReducer = combineReducers({ initialReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);


//e krijojme store dhe e bejme persist
export const store = configureStore({
  reducer: persistedReducer,
  devTools: composeWithDevTools(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: true,
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persisted = persistStore(store);
