import { FC, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { usePokemon } from '../../hooks';
import { PokemonCard } from '../components/pokemon';

const PokemonDetailsPage: FC = () => {
  const { pokemonId } = useParams();
  const { fetchPokemonByIdOrName, currentPokemon, resetCurrentPokemon } = usePokemon();

  useEffect(() => {
    fetchPokemonByIdOrName(pokemonId);
  }, [pokemonId])

  return (
    <div className="w-full px-5 md:w-9/12 mx-auto">
      {(Boolean(currentPokemon) && currentPokemon !== null) && (
        <PokemonCard
          id={currentPokemon.id}
          name={currentPokemon.name}
          sprites={currentPokemon.sprites}
          types={currentPokemon.types}
        />
      )}
      <NavLink
        to="/pokemon"
        onClick={resetCurrentPokemon}
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
      >
        Back
      </NavLink>
    </div>
  );
};

export default PokemonDetailsPage;