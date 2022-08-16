import { useAppDispatch, useAppSelector } from ".";
import {
  CALCULATE_OFFSET,
  FETCH_POKEMON_BY_ID_OR_NAME,
  FETCH_POKEMON_LIST, NEXT_PAGE,
  PREVIOUS_PAGE,
  SET_CURRENT_POKEMON
} from "../store/pokemon";
import { selectPokedexState } from "../store/selectors";
import BugBadge from '../assets/images/Type_Bug.svg';
import DarkBadge from '../assets/images/Type_Dark.svg';
import DragonBadge from '../assets/images/Type_Dragon.svg';
import ElectricBadge from '../assets/images/Type_Electric.svg';
import FairyBadge from '../assets/images/Type_Fairy.svg';
import FightingBadge from '../assets/images/Type_Fighting.svg';
import FireBadge from '../assets/images/Type_Fire.svg';
import FlyingBadge from '../assets/images/Type_Flying.svg';
import GhostBadge from '../assets/images/Type_Ghost.svg';
import GrassBadge from '../assets/images/Type_Grass.svg';
import GroundBadge from '../assets/images/Type_Ground.svg';
import IceBadge from '../assets/images/Type_Ice.svg';
import NormalBadge from '../assets/images/Type_Normal.svg';
import PoisonBadge from '../assets/images/Type_Poison.svg';
import PsychicBadge from '../assets/images/Type_Psychic.svg';
import RockBadge from '../assets/images/Type_Rock.svg';
import SteelBadge from '../assets/images/Type_Steel.svg';
import WaterBadge from '../assets/images/Type_Water.svg';
import { POKEMON_TYPE } from "../global";

const usePokemon = () => {
  const {
    pokemonList,
    currentPokemon,
    isLoading,
    currentPage,
    pageOffset,
    hasError,
    error,
  } = useAppSelector(selectPokedexState);
  const dispatch = useAppDispatch();

  const fetchPokemonList = () => {
    dispatch(FETCH_POKEMON_LIST(pageOffset));
  };

  const fetchPokemonByIdOrName = (pokemonId: string = '') => {
    dispatch(FETCH_POKEMON_BY_ID_OR_NAME(pokemonId.toLowerCase()));
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

  const getPokemonTypeBadge = (type: string) => {
    switch(type) {
      case POKEMON_TYPE.DARK: return DarkBadge;
      case POKEMON_TYPE.BUG: return BugBadge;
      case POKEMON_TYPE.DRAGON: return DragonBadge;
      case POKEMON_TYPE.ELECTRIC: return ElectricBadge;
      case POKEMON_TYPE.FAIRY: return FairyBadge;
      case POKEMON_TYPE.FIGHTING: return FightingBadge;
      case POKEMON_TYPE.FIRE: return FireBadge;
      case POKEMON_TYPE.FLYING: return FlyingBadge;
      case POKEMON_TYPE.GHOST: return GhostBadge;
      case POKEMON_TYPE.GRASS: return GrassBadge;
      case POKEMON_TYPE.GROUND: return GroundBadge;
      case POKEMON_TYPE.ICE: return IceBadge;
      case POKEMON_TYPE.NORMAL: return NormalBadge;
      case POKEMON_TYPE.POISON: return PoisonBadge;
      case POKEMON_TYPE.PSYCHIC: return PsychicBadge;
      case POKEMON_TYPE.ROCK: return RockBadge;
      case POKEMON_TYPE.STEEL: return SteelBadge;
      case POKEMON_TYPE.WATER: return WaterBadge;
    };
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
    getPokemonTypeBadge,
    hasError,
    error,
  };
};

export default usePokemon;