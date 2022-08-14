import { FC } from 'react'

const PokemonCard: FC = () => {
  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Types</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">#000</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pokedex entry</p>
      </div>
    </div>
  )
}

export default PokemonCard