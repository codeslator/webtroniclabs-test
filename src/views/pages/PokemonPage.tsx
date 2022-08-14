import { FC } from 'react';
import { SearchBar } from '../components/home';
import { PokemonList } from '../components/pokemon';

const PokemonPage: FC = () => {
  return (
    <div className="mx-auto w-11/12">
      <p className="text-xl md:text-3xl text-white text-center my-2">Pokemon Search</p>
      <SearchBar placeholder="Search a Pokemon" />
      <PokemonList />
    </div>
  );
};

export default PokemonPage;