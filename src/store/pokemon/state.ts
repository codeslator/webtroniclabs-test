import { Pokemon } from "../../global/interfaces";

export interface PokemonState {
  pokemonList: Array<Pokemon>;
  currentPokemon: Pokemon | null;
  isLoading: boolean;
  currentPage: number,
  pageLimit: number;
  pageOffset: number;
}

export const pokemonState: PokemonState = {
  pokemonList: [],
  currentPokemon: null,
  isLoading: false,
  currentPage: 1,
  pageLimit: 6,
  pageOffset: 0,
};