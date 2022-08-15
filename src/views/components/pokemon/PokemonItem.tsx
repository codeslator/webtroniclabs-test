import { FC } from 'react'
import { Pokemon, Sprites, Type } from '../../../global/interfaces';

interface PokemonItemProps {
  name: string;
  id: number;
  sprites: Sprites,
  types: Type[];
}

const PokemonItem: FC<PokemonItemProps> = ({ name, id, sprites, types }) => {
  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={sprites.other['official-artwork'].front_default} alt={name} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">#{id} - {name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Types</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
      </div>
    </div>
  )
}

export default PokemonItem;