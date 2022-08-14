import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAuthenticated } from "../../global/interfaces";

const LOGIN_EMAIL =  'andres.22.melendez@gmail.com';
const LOGIN_PASSWORD = '12345678';
interface LoginParams {
  email: string;
  password: string;
}

export const logIn = createAsyncThunk('auth/logIn', async ({ email, password }: LoginParams, { rejectWithValue }) => {
  try {
    if(email === LOGIN_EMAIL && password === LOGIN_PASSWORD) {
      localStorage.setItem('user_email', email);
      const authUser: UserAuthenticated = {
        firstName: 'Andres',
        lastName: 'Melendez',
        email: LOGIN_EMAIL,
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
