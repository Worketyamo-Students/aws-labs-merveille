import { Navigate, Routes, Route } from 'react-router-dom';
import Account from './components/page/Account';
import Authentification from './components/page/Authentification';
import Finalisation from './components/page/Finalisation';
import Bienvenue from './components/page/Bienvenue';
import Bord from './components/Bord'
// import Footer from './components/Footer';

function App() {
  return (
    <div className=" flex  p-8 md:m-2">
      <Bord/>
      <main className="flex-1 ">
        <Routes>
          {/* <Route path="/" element={<Navigate to="/account" />} />  redirection */}
          <Route path="/" element={<Navigate to="/account" />} />

          <Route path="/account" element={<Account />} />
          <Route path="/authentification" element={<Authentification />} />
          <Route path="/finalisation" element={<Finalisation />} />
          <Route path="/bienvenue" element={<Bienvenue />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
