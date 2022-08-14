import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/home/NavBar'

const HomeLayout: FC = () => {
  return (
    <div className="h-screen bg-gray-800">
      <NavBar />
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}

export default HomeLayout