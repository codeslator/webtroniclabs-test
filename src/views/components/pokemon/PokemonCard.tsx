import { FC } from 'react';
import { Sprites, Type } from '../../../global/interfaces';

interface PokemonCardProps {
  name: string;
  id: number;
  types: Type[];
  sprites: Sprites;
}

const PokemonCard: FC<PokemonCardProps> = ({ id, name, types, sprites }) => {
  return (
    <div className="mb-5 flex flex-col items-center w-full bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={sprites.other['official-artwork'].front_default} alt={name} />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">#{id} - {name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </div>
  );
};

export default PokemonCard;