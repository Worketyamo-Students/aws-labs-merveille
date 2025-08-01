// import React from 'react';
import Input from '../sous-components/Input';
import Barre from '../sous-components/Barre';
import Ligne from '../sous-components/Ligne';
import github from '../assets/public/github-logo.svg'
import google from '../assets/public/Google.svg'

function Section() {
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

            {/* Section 2 : Champ de formulaire */}
            <section className="w-full max-w-md p-2 flex flex-col gap-8">
                <Input
                    label="Email"
                    type="email"
                    placeholder="abc@example.com"
                />
                <Input
                    label="Mot de passe"
                    type="password"
                    placeholder="************"
                />
            </section>
            <div className='flex gap-4 w-full'>
                <Barre />
                <Barre />
                <Barre />
                <Barre />
            </div>

            <div className="flex items-center gap-2 pt-4 w-full">
                <Ligne />
                <span className="text-sm text-gray-600 whitespace-nowrap">ou avec</span>
                <Ligne />

            </div>

            <div className='flex gap-1 justify-center items-center border-1 w-11/12 border-gray-300'>
                <img src={github} alt="#"/>
                <h4>Github</h4>

            </div>

            <div className='flex gap-1 justify-center items-center border-1 w-11/12 border-gray-300'>
                <img src={google} alt="#"/>
                <h4>Google</h4>

            </div>

            <div className='flex gap-1 justify-center items-center bg-blue-600 border-1 w-11/12 h-12 border-blue-300'>
            Creer le compte

            </div>
            <p className='w-11/12 text-sm'>By clicking continue, you agree to our
            <span className="underline text-black">Terms of Service</span> and <span className="underline text-black">Privacy Policy.</span></p>


        </div>
    );
}

export default Section;
