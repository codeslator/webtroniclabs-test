import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/home/Footer'
import NavBar from '../components/home/NavBar'

const MainLayout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavBar />
      <main className="my-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout