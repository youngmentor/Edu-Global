import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  user: [{}]
}

const Features = createSlice({
  name: 'eduglobal',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
        state.user = [payload];
      },
      clearUser: (state) => {
        const clearAll = []
        state.user = clearAll
      },
  }
})

export const { addUser,clearUser} = Features.actions
export default Features.reducer