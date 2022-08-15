import { useAppDispatch, useAppSelector } from ".";
import { LOGIN, LOGOUT } from "../store/auth";
import { selectAuthState } from "../store/selectors";

const useAuth = () => {
  const { isAuthenticated, isLoading, authenticatedUser, error, hasError } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const login = (username: string, password: string) => {
    dispatch(LOGIN({ username, password }));
    // console.log({ username, password })
  };

  const logout = () => {
    dispatch(LOGOUT());
  };

  return {
    isAuthenticated,
    isLoading,
    authenticatedUser,
    login,
    logout,
    error,
    hasError,
  };
};

export default useAuth;