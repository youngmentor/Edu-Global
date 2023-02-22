import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  user: {},
  addFile: [],
}

const Features = createSlice({
  name: 'eduglobal',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
        state.user = payload;
      },
      clearUser: (state) => {
        const clearAll = {}
        state.user = clearAll
      },
      addFile: (state, { payload }) => {
        state.addProduct = [...state.addProduct, payload]
      },
  }
})

export const { addUser,clearUser, addFile} = Features.actions
export default Features.reducer