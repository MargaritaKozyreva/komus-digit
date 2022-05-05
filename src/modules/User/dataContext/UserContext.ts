import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "@src/core/service";
import { UserState } from '../redux/UserSlices';
import { UserDTO } from './UserDTO.dto';

export const getUser = createAsyncThunk("user/getUser", async () => {
  const user = await httpService<UserDTO.UserState>(
    "GET",
    "get_user",
    undefined
  );
  return user;
});
