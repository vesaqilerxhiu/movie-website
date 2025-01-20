import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initialReducer from './Functions/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'prova3',        // celesi ku i ruajme te dhenat ne local storage
  storage,
  version: 1            // nese e nderrojme strukturen e redux state, mundemi me e bo version 2, to update the persisted state data to match the new structure.
};

// Redux Persist is a library that allows saving a Redux store / state in the local storage of an application

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

// The store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.
