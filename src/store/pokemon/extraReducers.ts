import { createAsyncThunk } from "@reduxjs/toolkit";
import { POKEMON_API_URL } from "../../global";


export const fetchPokemonList = createAsyncThunk('todos/fetchPokemonList', async () => {
  const response = await fetch(`${POKEMON_API_URL}/pokemon`);
  const { results } = await response.json();
  console.log(results);
  return results;
});


export const fetchPokemonByIdOrName = createAsyncThunk('todos/fetchPokemonByIdOrName', async (todoId: number) => {
  const response = await fetch(`${POKEMON_API_URL}/todos/${todoId}`);
  const data = await response.json();
  return data;
});
