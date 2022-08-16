import { useAppDispatch, useAppSelector } from ".";
import { LOGIN, LOGOUT } from "../store/auth";
import { selectAuthState } from "../store/selectors";
import { SET_CURRENT_TODO, SET_TODOS } from "../store/todos";

const useAuth = () => {
  const { isAuthenticated, isLoading, authenticatedUser, error, hasError } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const login = (username: string, password: string) => {
    dispatch(LOGIN({ username, password }));
  };

  const logout = () => {
    dispatch(LOGOUT());
    dispatch(SET_TODOS([]));
    dispatch(SET_CURRENT_TODO(null));
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