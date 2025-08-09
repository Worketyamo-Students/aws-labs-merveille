
import fille from "../assets/public/images 2.svg"

function Section4() {
    return (
        <div className="flex flex-col gap-6 items-center p-6 ">

            {/* Section 1 : En-tête */}
            <section className="text-center">
                <h1 className="text-2xl font-semibold mb-2 md:hidden">Création de compte</h1>
                <h1 className="text-2xl font-semibold mb-2 hidden md:block">Connexion</h1>
                <h3 className="text-sm text-gray-600">
                    Rentrez vos infos pour créer votre compte.
                </h3>
            </section>

            {/* Section 2 : Champ de formulaire */}
            <img src={fille} alt="" className=""/>
           

            <div className='flex gap-1 justify-center items-center bg-[#00539C] border-1 w-full h-10 text-[14.5px] rounded-[10px] text-white font-bold'>
            Creer le compte

            </div>
            <p className='w-11/12 text-sm'>By clicking continue, you agree to our
            <span className="underline text-black">Terms of Service</span> and <span className="underline text-black">Privacy Policy.</span></p>


        </div>
    );
}

export default Section4;
