import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userInfo',
  initialState: {
    value: {},
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.value = action;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
