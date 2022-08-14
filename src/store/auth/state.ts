import { UserAuthenticated } from "../../global/interfaces";

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  authenticatedUser: UserAuthenticated | null;
  hasError: boolean;
  error: string;
}

export const authState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  authenticatedUser: null,
  hasError: false,
  error: '',
};