import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  user: {},
  student: {},
  teacher: [],
  allclass: {},
  file: [],
  payment: [{}]
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
      addStudent: (state, { payload }) => {
        state.student = payload;
      },
      clearStudent: (state) => {
        const clearAll = {}
        state.student = clearAll
      },
      addClass: (state, { payload }) => {
        state.allclass = payload;
      },
     
      addPayment: (state, { payload }) => {
        state.payment =[ payload];
      },
      addFile: (state, { payload }) => {
        state.file =[ payload];
      },
      addTeacher: (state, { payload }) => {
        state.teacher = [payload];
      },
      clearTeacher: (state) => {
        const clearAll = {}
        state.teacher = clearAll
      },
  }
})

export const { addUser,clearUser,clearTeacher, clearStudent, addFile, addClass, addStudent, addPayment, addTeacher} = Features.actions
export default Features.reducer