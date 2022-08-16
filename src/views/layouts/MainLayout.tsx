import { FC, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../config/navigation';
import { useAuth } from '../../hooks';
import Footer from '../components/home/Footer'
import NavBar from '../components/home/NavBar'

const MainLayout: FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTES.HOME, { replace: true });
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavBar />
      <main className="my-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;