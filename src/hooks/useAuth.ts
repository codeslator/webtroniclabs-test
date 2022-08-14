import { useAppDispatch, useAppSelector } from ".";
import { LOGIN, LOGOUT } from "../store/auth";
import { selectAuthState } from "../store/selectors";

const useAuth = () => {
  const { isAuthenticated, isLoading, authenticatedUser } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const login = (username: string, password: string) => {
    dispatch(LOGIN({ username, password }));
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
  };
};

export default useAuth;