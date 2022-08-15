import { FC } from 'react'
import { usePokemon } from '../../../hooks'
import PokemonCard from './PokemonItem'

const PokemonList: FC = () => {
  const { pokemonList, nextPage, previousPage, currentPage } = usePokemon();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {pokemonList.map(({ name, id, sprites, types }) => (
          <PokemonCard
            key={id}
            id={id}
            name={name}
            sprites={sprites}
            types={types}
          />
        ))}
      </div>
      <div className="py-5 mx-auto">
        <button
          disabled={currentPage <= 1}
          type="button"
          onClick={previousPage}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={nextPage}
          className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </div>
    </>

  )
}

export default PokemonList