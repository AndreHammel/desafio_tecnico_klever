import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'token',
  initialState: {
    token: '',
    amount: 0,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
});

export const { setToken, setBalance } = slice.actions;
export default slice.reducer;
