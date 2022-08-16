import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import { Pokemon, Sprites, Type } from '../../../global/interfaces';

interface PokemonItemProps {
  name: string;
  id: number;
  sprites: Sprites,
}

const PokemonItem: FC<PokemonItemProps> = ({ name, id, sprites }) => {
  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={sprites.other['official-artwork'].front_default} alt={name} />
      <div className="p-5">
        <NavLink to={`/pokemon/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">#{id} - {name}</h5>
        </NavLink>
      </div>
    </div>
  )
}

export default PokemonItem;