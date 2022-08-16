import { createAsyncThunk } from "@reduxjs/toolkit";
import { POKEMON_API_URL } from "../../global";
import { Pokemon } from "../../global/interfaces";

export interface Response {
  count: number
  next: string
  previous: any
  results: Result[]
}

export interface Result {
  name: string
  url: string
}


export const fetchPokemonList = createAsyncThunk('todos/fetchPokemonList', async (offset: number, { rejectWithValue }) => {
  try {
    const response = await fetch(`${POKEMON_API_URL}?limit=6&offset=${offset}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { results }: Response = await response.json();
    const promises = results.map(async (pokemon) => {
      const response = await fetch(`${POKEMON_API_URL}/${pokemon.name}`);
      return await response.json();
    });
    const data = await Promise.all(promises);
    const pokedex = data.map((pokemon: Pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      is_default: pokemon.is_default,
      order: pokemon.order,
      sprites: pokemon.sprites,
      types: pokemon.types,
    }))
    return pokedex;
  } catch (e) {
    return rejectWithValue({
      message: 'Something went wrong. Refresh and try again.',
    });
  }
});


export const fetchPokemonByIdOrName = createAsyncThunk('todos/fetchPokemonByIdOrName', async (pokemonId: string, { rejectWithValue }) => {
  try {
    const response = await fetch(`${POKEMON_API_URL}/${pokemonId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      is_default: data.is_default,
      order: data.order,
      sprites: data.sprites,
      types: data.types,
    }
    return pokemon;
  }
  catch (e) {
    return rejectWithValue({
      message: 'Something went wrong. Refresh and try again.',
    });
  }



});
