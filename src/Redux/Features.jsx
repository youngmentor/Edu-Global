import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  user: {},
  student: {},
  // addStudent:{},
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
      addStudent: (state, { payload }) => {
        state.student = payload;
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

export const { addUser,clearUser, addFile, addClass, addStudent} = Features.actions
export default Features.reducer