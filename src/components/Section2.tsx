
import { useNavigate } from 'react-router-dom';
function Section2() {

    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
       
            navigate('/finalisation');
    };
    
    return (
        <div className="flex flex-col gap-6 items-center p-6">

            {/* Section 1 : En-tête */}
            <section className="text-center">
                <h1 className="text-2xl font-semibold mb-2 md:hidden">Vefication OTP</h1>
                <h1 className="text-2xl font-semibold mb-2 hidden md:block">Vefication</h1>
                <h3 className="text-sm text-gray-600">
                    Rentrez vos infos pour créer votre compte.
                </h3>
            </section>

            {/* Section 2 : Champ de formulaire */}
            <section className="w-full max-w-md p-2 flex justify-between ">
                <div className="w-12 h-12  bg-gray-100 rounded-[5px] border-1 border-gray-200"></div>
                <div className="w-12 h-12  bg-gray-100 rounded-[5px] border-1 border-gray-200"></div>
                <div className="w-12 h-12  bg-gray-100 rounded-[5px] border-1 border-gray-200"></div>
                <div className="w-12 h-12  bg-gray-100 rounded-[5px] border-1 border-gray-200"></div>
            </section>

            <button 
            type="button"
            onClick={handleSubmit} className='flex gap-1 justify-center items-center bg-[#00539C] border-1 w-full h-10 text-[14.5px] rounded-[10px] text-white font-bold'>
            Creer le compte

            </button>
            <p className='w-11/12 text-sm'>By clicking continue, you agree to our
            <span className="underline text-black">Terms of Service</span> and <span className="underline text-black">Privacy Policy.</span></p>
            <p className="text-black text-sm pt-8 p-2 w-[300px] h-[186px]">
  https://myaccount.google.com/<br />
  apppasswords?pli=1&rapt=AEjHL4PVp1Gnq<br />
  juq4x5zDkjQ3rmZVy3iLvevWVvfYkjcrwLu-<br />
  eko3cTbrAPfltBtf4_A43d_ZntBr9qsew0J<br />
  a4utV7r1C6CDEWdMh9xjd-tSDFMF1qxy1g8
</p>

          </div>
    );
}

export default Section2;
