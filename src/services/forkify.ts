import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { SearchArray } from '../types';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { updateRecipes } from '../store/search/searchArraySlice';
import {updateDisplayRecipe} from '../store/recipe/recipeSlice'

type FetchFunction = (a: string) => void

const dispatch = useAppDispatch();

export const getRecipes: FetchFunction = async (searchText: string) => {
  await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${ searchText }`)
    .then(res => dispatch(updateRecipes(res.data.data.recipes)))
    .catch(err => { throw new Error(err) })
}

export const fetchRecipe: FetchFunction = async (id) => {
  await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${ id }`)
    .then(res =>
      dispatch(updateDisplayRecipe(
        {
          id: res.data.data.recipe.id,
          title: res.data.data.recipe.title,
          publisher: res.data.data.recipe.publisher,
          sourceUrl: res.data.data.recipe.sourceUrl,
          image: res.data.data.recipe.image_url,
          servings: res.data.data.recipe.servings,
          cookingTime: res.data.data.recipe.cookingTime,
          ingredients: res.data.data.recipe.ingredients,
        }
      ))
    )
    .catch(err => { throw new Error(err) })
}


// function updateRecipe(): any {
//   throw new Error('Function not implemented.');
// }
// // Define a service using a base URL and expected endpoints
// export const searchApi = createApi({
//   reducerPath: 'search',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://forkify-api.herokuapp.com/api/v2/recipes' }),
  
//   endpoints: (builder) => ({
//     getRecipesList: builder.query<SearchArray, string>({
//       query: (text) => `?search=${text}`,
//     }),
//     getRecipe: builder.query<SearchArray, string>({
//       query: (id) => `/${id}`,
//     }),
//   }),
// })

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetRecipesListQuery, useGetRecipeQuery } = searchApi