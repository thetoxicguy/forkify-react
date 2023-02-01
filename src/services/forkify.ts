import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { SearchArray } from '../types';
import axios from 'axios';

// Define a service using a base URL and expected endpoints
export const searchApi = createApi({
  reducerPath: 'search',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://forkify-api.herokuapp.com/api/v2/recipes' }),
  
  endpoints: (builder) => ({
    getRecipesList: builder.query<SearchArray, string>({
      query: (text) => `?search=${text}`,
    }),
    getRecipe: builder.query<SearchArray, string>({
      query: (id) => `/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRecipesListQuery, useGetRecipeQuery } = searchApi