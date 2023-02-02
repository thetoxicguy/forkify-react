import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../src/store'

// Define a type for the slice state
interface LoadingImageState {
  value: boolean
}

// Define the initial state using that type
const initialState: LoadingImageState = {value: true};

export const loadingImageSlice = createSlice({
  name: 'loadingImage',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    toggleLoadingImage: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { toggleLoadingImage } = loadingImageSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLoadingImage = (state: RootState) => state.loadingImage// .value?
export default loadingImageSlice.reducer