import { UiState } from './state';

export const toggleOpenMenu = (state: UiState) => {
  state.openMenu = !state.openMenu;
};