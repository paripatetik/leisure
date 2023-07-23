import { configureStore, combineReducers } from '@reduxjs/toolkit';

import moviesReducer from './features/movies/moviesSlice';
import booksReducer from './features/books/booksSlice';

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

const rootReducer = combineReducers({
  books: booksReducer,
  movies: moviesReducer,
});

const persistConfig = {
  key: 'root',
  storage,

}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

window.addEventListener('storage',(e)=>{
  const persistData = JSON.parse(localStorage.getItem('persist:root'));
  const newCounterValue = parseInt(persistData.counter);
  console.log(newCounterValue);
  store.dispatch({type:'SET_VALUE',payload:newCounterValue})
})

export const persistor = persistStore(store);
export default store;
