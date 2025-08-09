// import React from 'react'; // Pas nécessaire avec React 17+ et nouvelle transformation JSX
import Input from '../sous-components/Input';
// import Barre from '../sous-components/Barre'; // Attention : tu importes Barre et Ligne mais ne les utilises pas
// import Ligne from '../sous-components/Ligne';
// import github from '../assets/public/github-logo.svg';
// import google from '../assets/public/Google.svg';

function Section3() {
  return (
    <div className="flex flex-col gap-6 items-center p-6">

      {/* Section 1 : En-tête */}
      <section className="text-center">
        <h1 className="text-2xl font-semibold mb-2 md:hidden">Création de compte</h1>
        <h1 className="text-2xl font-semibold mb-2 hidden md:block">Connexion</h1>
        <h3 className="text-sm text-gray-600">
          Rentrez vos infos pour créer votre compte.
        </h3>
      </section>

      {/* Section 2 : Champs de formulaire */}
      <section className="w-full max-w-md p-2 flex flex-col gap-3">
        <Input
          label="Numéro de téléphone"
          type="text"           // "texte" → "text" (valeur correcte en HTML)
          placeholder="Numéro WhatsApp"
        />
        <Input
          label=""
          type="text"
          placeholder="Numéro WhatsApp"
        />
        <Input
          label=""
          type="text"
          placeholder="Numéro WhatsApp"
        />
        <Input
          label=""
          type="text"
          placeholder="Numéro WhatsApp"
        />
      </section>

      {/* Bouton */}
      <button
        className="flex gap-1 justify-center items-center bg-[#00539C] w-full max-w-md h-10 text-[14.5px] rounded-[10px] text-white font-bold"
        type="submit"
      >
        Créer le compte
      </button>

      <p className="w-11/12 max-w-md text-sm text-center">
        By clicking continue, you agree to our{' '}
        <span className="underline text-black cursor-pointer">Terms of Service</span> and{' '}
        <span className="underline text-black cursor-pointer">Privacy Policy.</span>
      </p>

    </div>
  );
}

export default Section3;
