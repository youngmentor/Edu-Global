import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  user: {},
  allclass: {},
  addFile: [],
}

const Features = createSlice({
  name: 'eduglobal',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
        state.user = payload;
      },
      addClass: (state, { payload }) => {
        state.allclass = payload;
      },
      clearUser: (state) => {
        const clearAll = {}
        state.user = clearAll
      },
      // addFile: (state, { payload }) => {
      //   state.addProduct = [...state.addProduct, payload]
      // },
  }
})

export const { addUser,clearUser, addFile, addClass} = Features.actions
export default Features.reducer