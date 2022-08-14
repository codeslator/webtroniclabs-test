import { FC } from 'react';
import { SearchBar } from '../components/home';

const PokemonPage: FC = () => {
  return (
    <div className="mx-auto w-10/12">
      <p className="text-xl md:text-3xl text-white text-center my-2">Pokemon Search</p>
      <SearchBar placeholder="Search a Pokemon" />
    </div>
  );
};

export default PokemonPage;