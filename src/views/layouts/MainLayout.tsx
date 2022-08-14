import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/home/Footer'
import NavBar from '../components/home/NavBar'

const MainLayout: FC = () => {
  return (
    <div className="h-screen bg-gray-800 flex flex-col justify-between">
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout