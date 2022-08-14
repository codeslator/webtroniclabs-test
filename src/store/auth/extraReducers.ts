import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAuthenticated } from "../../global/interfaces";

const LOGIN_USERNAME =  'andres123';
const LOGIN_PASSWORD = '12345678';
interface LoginParams {
  username: string;
  password: string;
}

export const logIn = createAsyncThunk('auth/logIn', async ({ username, password }: LoginParams, { rejectWithValue }) => {
  try {
    if(username === LOGIN_USERNAME && password === LOGIN_PASSWORD) {
      localStorage.setItem('username', username);
      const authUser: UserAuthenticated = {
        firstName: 'Andres',
        lastName: 'Melendez',
        email: 'andres.22.melendez@gmail.com',
        username: LOGIN_USERNAME,
        id: 1,
      }
      return authUser;
    }
  } catch (err: any) {
    return rejectWithValue({
      message: 'Login failed.',
    });
  }
});
