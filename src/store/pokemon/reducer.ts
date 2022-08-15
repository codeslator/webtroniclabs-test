import { PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../global/interfaces';
import { PokemonState } from './state';

export const setPokemonList = (state: PokemonState, { payload }: PayloadAction<Array<Pokemon>>) => {
  state.pokemonList = payload;
};

export const setCurrentPokemon = (state: PokemonState, { payload }: PayloadAction<Pokemon | null>) => {
  state.currentPokemon = payload;
};

export const setIsLoading = (state: PokemonState, { payload }: PayloadAction<boolean>) => {
  state.isLoading = payload;
};

export const nextPage = (state: PokemonState) => {
  state.currentPage += 1;
};

export const previousPage = (state: PokemonState) => {
  state.currentPage -= 1;
};

export const calculateOffset = (state: PokemonState) => {
  state.pageOffset = (state.currentPage * state.pageLimit) - state.pageLimit;
};