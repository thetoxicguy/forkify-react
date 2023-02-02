import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../src/store'
import type { SearchArray } from '../../types'

// Define a type for the slice state

interface RecipesList {
    list: SearchArray
  }
  
  const initialState: RecipesList = {
    list: [ {
      publisher: 'danrolo',
      image: 'no image',
      title: 'La recetísima de danrolo',
      id: '1234',
    } ]
  };

  export const searchArraySlice = createSlice({
    name: 'searchArray',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      // Use the PayloadAction type to declare the contents of `action.payload`
      updateRecipes: (state, action: PayloadAction<SearchArray>) => {
        state.list = action.payload
      },  
    },
  })
  
  export const { updateRecipes } = searchArraySlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectSearch = (state: RootState) => state.search // .value?
  export default searchArraySlice.reducer