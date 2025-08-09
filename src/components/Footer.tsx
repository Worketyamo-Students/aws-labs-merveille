import { useLocation } from 'react-router-dom';
import Barre from '../sous-components/Barre';

function Footer() {
  const location = useLocation();

  let activeBars = 0;
  switch (location.pathname) {
    case '/account':
      activeBars = 1;
      break;
    case '/authentification':
      activeBars = 2;
      break;
    case '/finalisation':
      activeBars = 3;
      break;
    case '/bienvenue':
      activeBars = 4;
      break;
    default:
      activeBars = 0;
  }

  return (
    <div className="flex  justify-center w-full gap-3 p-4 md:p-8">
      <Barre destination="/account" active={activeBars >= 1} activeColor="#FFA270" />
      <Barre destination="/authentification" active={activeBars >= 2} activeColor="#fb923c" />
      <Barre
        destination="/finalisation"
        active={activeBars >= 3}
        style={{ background: 'linear-gradient(to right, #FFA273, #00539C)' }}
      />
      <Barre destination="/bienvenue" active={activeBars >= 4} activeColor="#00539C" />
    </div>
  );
}

export default Footer;
