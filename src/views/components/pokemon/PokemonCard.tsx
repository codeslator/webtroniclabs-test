import { FC, Fragment } from 'react';
import { Sprites, Type } from '../../../global/interfaces';
import { usePokemon } from '../../../hooks';

interface PokemonCardProps {
  name: string;
  id: number;
  types: Type[];
  sprites: Sprites;
}

const PokemonCard: FC<PokemonCardProps> = ({ id, name, types, sprites }) => {
  const { getPokemonTypeBadge } = usePokemon();

  return (
    <div className="mb-5 flex flex-col items-center w-full bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-72 md:rounded-none md:rounded-l-lg" src={sprites.other['official-artwork'].front_default} alt={name} />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">#{id} - {name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-row">
          {types.map(({ type }) => (
            <img src={getPokemonTypeBadge(type.name)} alt={type.name} className="w-18 h-8 mr-3" />
          ))}
        </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam a doloribus ipsa vitae ex beatae mollitia ad consequatur vel.</p>
        
      </div>
    </div>
  );
};

export default PokemonCard;