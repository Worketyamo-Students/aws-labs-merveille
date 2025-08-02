import { createRoot } from 'react-dom/client';
import './index.css';
// import Account from './components/page/Account.tsx';
// import Finalisation from './components/page/Finalisation.tsx';
import Bienvenue from './components/page/Bienvenue.tsx';
// import Authentification from "./components/page/Authentification.tsx"
createRoot(document.getElementById('root')!).render(
  // <Account />
  // <Authentification />
  // <Finalisation />
  <Bienvenue/>
);
