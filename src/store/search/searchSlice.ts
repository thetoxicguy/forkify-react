import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../src/store'
import type { SearchArray } from '../../types'

// Define a type for the slice state
interface SearchState {
  value: string
}

// Define the initial state using that type
const initialState: SearchState = {value: ''};

export const searchSlice = createSlice({
  name: 'searchText',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { updateSearch } = searchSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSearch = (state: RootState) => state.search // .value?
export default searchSlice.reducer