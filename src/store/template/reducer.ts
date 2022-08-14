import { PayloadAction } from '@reduxjs/toolkit';
import { TemplateState } from './state';

export const setTemplateValue = (state: TemplateState, { payload }: PayloadAction<number>) => {
  state.value = payload;
};