import { RootState } from "./";

export const selectUIState = (state: RootState) => state.ui;
export const selectAuthState = (state: RootState) => state.auth;
export const selectTodoState = (state: RootState) => state.todo;