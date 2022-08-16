import { FC, useEffect } from 'react';
import { usePokemon } from '../../hooks';
import { SearchBar } from '../components/home';
import { PokemonList } from '../components/pokemon';

const PokemonPage: FC = () => {
  const { fetchPokemonList, currentPage } = usePokemon(); 

  useEffect(() => {
    fetchPokemonList();
  }, [currentPage])

  return (
    <div className="mx-auto w-11/12">
      <p className="text-xl md:text-3xl text-white text-center my-2">Pokemon Search</p>
      <SearchBar placeholder="Search a Pokemon" />
      <PokemonList />
    </div>
  );
};

export default PokemonPage;