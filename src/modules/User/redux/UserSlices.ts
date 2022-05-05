import { createSlice } from "@reduxjs/toolkit";
import { getUser } from '../dataContext/UserContext';
import { UserDTO } from "../dataContext/UserDTO.dto";

export type UserState = {
    entity: UserDTO.UserState | null;
    isLoading: boolean;
    error: string | undefined;
};

const initialState: UserState = {
    entity: null,
    isLoading: false,
    error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.entity = action.payload.data;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const userReducer = userSlice.reducer;
