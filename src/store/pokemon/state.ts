import { Pokemon } from "../../global/interfaces";

export interface PokemonState {
  pokemonList: Array<Pokemon>;
  currentPokemon: Pokemon | null;
  isLoading: boolean;
}

export const pokemonState: PokemonState = {
  pokemonList: [],
  currentPokemon: null,
  isLoading: false,
};