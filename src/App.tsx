import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { navData } from './data/navbardata';

function App() {
  useEffect(() => {
    document.body.classList.add('custom-background');

    return () => {
      document.body.classList.remove('custom-background');
    };
  }, []);

  return (
    <>
      <Navbar links={navData} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
