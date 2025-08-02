// import React from 'react';
import Input from '../sous-components/Input';
import Barre from '../sous-components/Barre';
import Ligne from '../sous-components/Ligne';
import github from '../assets/public/github-logo.svg'
import google from '../assets/public/Google.svg'

function Section1() {
    return (
        <div className="flex flex-col gap-5 items-center p-4 ">

            {/* Section 1 : En-tête */}
            <section className="text-center">
                <h1 className="text-2xl font-semibold mb-2 md:hidden">Création de compte</h1>
                <h1 className="text-2xl font-semibold mb-2 hidden md:block">Connexion</h1>
                <h3 className="text-sm text-gray-600">
                    Rentrez vos infos pour créer votre compte.
                </h3>
            </section>

            {/* Section 2 : Champ de formulaire */}
            <section className="w-full max-w-md p-2 flex flex-col gap-4">
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
                <Barre className='bg-blue-700'/>
                <Barre />
                <Barre />
                <Barre />
            </div>

            <div className="flex items-center gap-2  w-full">
                <Ligne />
                <span className="text-sm text-gray-600 whitespace-nowrap">ou avec</span>
                <Ligne />

            </div>

            <div className='flex gap-1 justify-center items-center  h-6 border-1 w-11/12 border-gray-300 rounded-[5px]'>
                <img src={github} alt="#"/>
                <h4 className='text-sm'>Github</h4>

            </div>

            <div className='flex gap-1 justify-center items-center  h-6 border-1 w-11/12 border-gray-300 rounded-[5px]'>
                <img src={google} alt="#"/>
                <h4 className='text-sm'>Google</h4>

            </div>

            <div className='flex gap-1 justify-center items-center bg-[#00539C] border-1 w-full h-9 text-[14.5px] rounded-[10px] text-white font-bold'>
            Creer le compte

            </div>
            <p className='w-11/12 text-sm'>By clicking continue, you agree to our
            <span className="underline text-black">Terms of Service</span> and <span className="underline text-black">Privacy Policy.</span></p>


        </div>
    );
}

export default Section1;
