import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  user: [{}]
}

const Features = createSlice({
  name: 'e-store',
  initialState,
  reducers: {
    userData: (state, { payload }) => {
      state.product = payload;
    },
  }
})

export const { userData} = Features.actions
export default Features.reducer