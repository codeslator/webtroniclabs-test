import { useAppDispatch, useAppSelector } from ".";
import { CALCULATE_OFFSET, FETCH_POKEMON_BY_ID_OR_NAME, FETCH_POKEMON_LIST, NEXT_PAGE, PREVIOUS_PAGE, SET_CURRENT_POKEMON } from "../store/pokemon";
import { selectPokedexState } from "../store/selectors";

const usePokemon = () => {
  const { pokemonList, currentPokemon, isLoading, pageLimit, currentPage, pageOffset} = useAppSelector(selectPokedexState);
  const dispatch = useAppDispatch();

  const fetchPokemonList = () => {
    dispatch(FETCH_POKEMON_LIST(pageOffset));
  };

  const fetchPokemonByIdOrName = (pokemonId: string = '') => {
    dispatch(FETCH_POKEMON_BY_ID_OR_NAME(pokemonId));
  };

  const nextPage = () => {
    dispatch(NEXT_PAGE());
    dispatch(CALCULATE_OFFSET());
  };

  const previousPage = () => {
    dispatch(PREVIOUS_PAGE());
    dispatch(CALCULATE_OFFSET());
  };

  const resetCurrentPokemon = () => {
    dispatch(SET_CURRENT_POKEMON(null));
  };
  
  return {
    pokemonList,
    currentPokemon,
    isLoading,
    fetchPokemonList,
    fetchPokemonByIdOrName,
    previousPage,
    nextPage,
    currentPage,
    resetCurrentPokemon,
  };
};

export default usePokemon;