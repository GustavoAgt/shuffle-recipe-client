import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../../types/user.types";
import { RootState } from "../../store";

const initialState: User = {
  username: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.username = action.payload?.username;
      state._id = action.payload?._id;
    },
  },
});

export const { setUser } = userSlice.actions;
export const getUser = (state: RootState) => state.user;
export default userSlice.reducer;
