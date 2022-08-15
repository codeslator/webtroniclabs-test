import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonState, pokemonState } from "./state";
import * as pokemonReducers from './reducer';
import { fetchPokemonByIdOrName, fetchPokemonList,  } from "./extraReducers";
import { Pokemon } from "../../global/interfaces";

export const pokemonSlice = createSlice({
  name: 'pokedex',
  initialState: pokemonState,
  reducers: pokemonReducers,
  extraReducers:  {
    [fetchPokemonList.pending as any]: (state: PokemonState) => {
      state.isLoading = true;
    },
    [fetchPokemonList.fulfilled as any]: (state: PokemonState, { payload }: PayloadAction<Array<Pokemon>>) => {
      state.pokemonList = payload;
      state.isLoading = false;
    },
    [fetchPokemonList.rejected as any]: (state: PokemonState) => {
      state.pokemonList = [];
      state.isLoading = false;
    },
    [fetchPokemonByIdOrName.fulfilled as any]: (state: PokemonState, { payload }: PayloadAction<Pokemon>) => {
      state.currentPokemon = payload;
    },
    [fetchPokemonByIdOrName.rejected as any]: (state: PokemonState) => {
      state.currentPokemon = null;
    },
  },
});

export const {
  setPokemonList: SET_POKEMON_LIST,
  setCurrentPokemon: SET_CURRENT_POKEMON,
  setIsLoading: SET_IS_LOADING,
} = pokemonSlice.actions;
export {
  fetchPokemonList as FETCH_POKEMON_LIST,
  fetchPokemonByIdOrName as FETCH_POKEMON_BY_ID_OR_NAME,
} from './extraReducers';
export default pokemonSlice.reducer;