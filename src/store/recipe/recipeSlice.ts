import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../../src/store'
import type { DisplayRecipe } from "../../types";

export interface RecipeState {
    recipe: DisplayRecipe;
}

const initialState = {
    rec: {
        id: '',
      title: '',
      publisher: '',
      sourceUrl: '',
      image: '',
      servings: '',
      cookingTime: '',
      ingredients: [{
          quantity: 0,
          unit: '',
          description: '',
    }]
}
}

export const recipeSlice = createSlice({
        name: 'recipe',
        initialState,
        reducers: {
            updateDisplayRecipe: (state, action: PayloadAction<DisplayRecipe>) => {
                state.rec = action.payload
            }
        }
    })

    export const {updateDisplayRecipe} = recipeSlice.actions;

    export const selectRecipe = (state: RootState) => state.recipe;
    export default recipeSlice.reducer;