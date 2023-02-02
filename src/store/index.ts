import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search/searchSlice';
import recipeReducer from './recipe/recipeSlice';
import searchArrayReducer from './search/searchArraySlice';

// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { searchApi } from '../services/forkify';

export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
    // [searchApi.reducerPath]: searchApi.reducer,
    searchText: searchReducer,
    searchArray: searchArrayReducer,
    recipe: recipeReducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(searchApi.middleware),
  })
  
  // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization:
// setupListeners(store.dispatch)

  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch