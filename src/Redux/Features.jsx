import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  user: {},
  student: {},
  teacher: {},
  allclass: {},
  addFile: [],
  payment: []
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
      addPayment: (state, { payload }) => {
        state.payment =[ payload];
      },
      addTeacher: (state, { payload }) => {
        state.teacher = payload;
      },
  }
})

export const { addUser,clearUser, addFile, addClass, addStudent, addPayment} = Features.actions
export default Features.reducer