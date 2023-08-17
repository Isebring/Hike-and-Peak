import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { navData } from './data/navbardata';

function App() {
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
