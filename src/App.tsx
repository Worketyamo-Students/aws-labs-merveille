import { Navigate, Routes, Route } from 'react-router-dom';
import Account from './components/page/Account';
import Authentification from './components/page/Authentification';
import Finalisation from './components/page/Finalisation';
import Bienvenue from './components/page/Bienvenue';
import Bord from './components/Bord'
// import Footer from './components/Footer';
// import api from "../front-end";
function App() {
  
  return (
    <div className=" flex flex-row  h-auto md:pt-6   md:p-1 md:gap-6 lg:p-6 lg:mt-1 xl:mt-8 md:pl-12 lg:pl-24 lg:pr-24 lg:gap-10 ">
      <div className="w-1/2 hidden md:block">
        <Bord />
      </div>
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
