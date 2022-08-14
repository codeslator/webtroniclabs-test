import { PayloadAction } from '@reduxjs/toolkit';
import { UiState } from './state';

export const toggleOpenMenu = (state: UiState, { payload }: PayloadAction<boolean>) => {
  state.openMenu = !payload;
};