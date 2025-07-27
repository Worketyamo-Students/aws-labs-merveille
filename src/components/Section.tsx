import fille from '../assets/img/fille.svg';
import copy from '../assets/img/copy.svg';
import fleche from '../assets/img/fleche.svg';
import telephone from '../assets/img/telephone.svg';
import Music2 from '../assets/img/Music2.svg';
import Music from '../assets/img/Music.svg';
import carte1 from '../assets/img/carte1.svg';
import carte2 from '../assets/img/carte2.svg';

function Section() {
    return (
        <div className='flex flex-col gap-4  '>
            {/* Section 1 */}
            <section className="flex flex-col w-full gap-4 p-4 bg-[#262626] lg:p-8 rounded-[9px] mt-4 lg:mt-8">
                <div className="flex flex-col lg:flex-row md:flex-row gap-2 lg:justify-between md:justify-between">
                    <div className="flex lg:hidden md:hidden justify-center items-center rounded-[14px] w-[125px] h-[21px] lg:w-[181px] lg:h-[26px] bg-page gap-1">
                        <div className="mt-1 w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full bg-[#F35034]"></div>
                        <a href="#" className="text-[#FFFFFF] text-[9px] font-[500] lg:text-[13px] font-inter">AVAILABLE FOR JOB</a>
                    </div>

                    <h1 className="text-[#C0C0C0] text-[16px] font-[500] lg:text-[24px] font-inter">UI/UX Designer</h1>

                    <div className="hidden lg:flex justify-center items-center rounded-[14px] w-[125px] h-[21px] lg:w-[181px] lg:h-[26px] bg-page gap-1">
                        <div className="mt-1 w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full bg-[#F35034]"></div>
                        <a href="#" className="text-[#FFFFFF] text-[9px] font-[500] lg:text-[13px] font-inter">AVAILABLE FOR JOB</a>
                    </div>
                </div>

                <div className="lg:flex lg:justify-between md:flex md:justify-between mt-4">
                    <div className="lg:hidden md:hidden w-[80px] h-[80px] rounded-full bg-[#262626] flex justify-center items-center">
                        <img src={fille} alt="" className="w-[71px] h-[71px] rounded-full object-cover" />
                    </div>
                    
                    <div className="flex flex-col gap-2 lg:gap-6 mt-6">
                        <h1 className="text-[#FFFFFF] text-[24px] font-[600] lg:text-[36px] font-inter">I'm Nguiyou Merveille</h1>
                        <h4 className="text-[#C0C0C0] text-[14px] font-[400] w-[230px] lg:w-[280px] h-[52px] lg:text-[20px] font-inter">
                            I design digital products with great experience.
                        </h4>
                        <div className="flex gap-4 mt-6">
                            <button className="w-[84px] h-[33px] lg:w-[108px] p-2 lg:h-[42px] rounded-[5px] bg-[#F35034] flex justify-center items-center gap-2">
                                <h1 className="text-[#FFFFFF] text-[11px] lg:text-[16px] font-[500] font-inter">Hire me</h1>
                                <div className="h-[33px] lg:h-[42px] w-[1px] bg-[#262626]"></div>
                                <h2 className="text-[#FFFFFF] text-[11px] lg:text-[16px] font-[500] font-inter">+</h2>
                            </button>

                            <div className="w-[100px] h-[33px] lg:w-[148px] lg:h-[42px] rounded-[5px] bg-[#000000] flex justify-center items-center gap-2">
                                <a href="#" className="text-[#C0C0C0] text-[11px] lg:text-[16px] font-[500] font-inter">Copy Email</a>
                                <div className="h-[33px] lg:h-[40px] w-[0.5px] bg-gray-700"></div>
                                <img src={copy} alt="copy" className="w-[12px] h-[12px] lg:w-[24px] lg:h-[24px] object-cover" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="hidden lg:flex md:flex justify-center items-center w-[180px] h-[180px] rounded-full bg-[#262626]">
                        <img src={fille} alt="" className="w-[157px] h-[157px] rounded-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="grid grid-cols-1 w-full mt-4 lg:grid-cols-2 lg:gap-6">
                <div className="w-full h-auto bg-[#262626] rounded-[9px] p-6 lg:h-[594px]">
                    <div className="flex gap-2 mb-6">
                        <div className="mt-3 w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full bg-[#FFFFFF]"></div>
                        <h2 className="text-[#FFFFFF] text-[16px] lg:text-[24px] font-[500] font-inter">Recent Work</h2>
                    </div>

                    <div className="flex flex-col gap-4 lg:gap-12">
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <h1 className="text-[#F35034] text-base lg:text-[24px] font-[500] font-inter">Product designer</h1>
                                <h4 className="text-[#C0C0C0] text-sm lg:text-[20px] font-[400] font-inter">2023-present</h4>
                            </div>
                            <a href="#" className="text-[#FFFFFF] text-sm lg:text-[20px] font-[400] font-inter">Figma</a>
                        </div>

                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <h1 className="text-[#FFFFFF] text-sm lg:text-[24px] font-[500] font-inter">Product designer</h1>
                                <h4 className="text-[#C0C0C0] text-sm lg:text-[20px] font-[400] font-inter">2021-2022</h4>
                            </div>
                            <a href="#" className="text-[#FFFFFF] text-sm lg:text-[20px] font-[400] font-inter">Google</a>
                        </div>

                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <h1 className="text-[#FFFFFF] text-sm lg:text-[24px] font-[500] font-inter">Product designer</h1>
                                <h4 className="text-[#C0C0C0] text-sm lg:text-[20px] font-[400] font-inter">2023-present</h4>
                            </div>
                            <a href="#" className="text-[#FFFFFF] text-sm lg:text-[20px] font-[400] font-inter">Figma</a>
                        </div>

                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <h1 className="text-[#FFFFFF] text-sm lg:text-[24px] font-[500] font-inter">Product designer</h1>
                                <h4 className="text-[#C0C0C0] text-sm lg:text-[20px] font-[400] font-inter">2023-present</h4>
                            </div>
                            <a href="#" className="text-[#FFFFFF] text-sm lg:text-[20px] font-[400] font-inter">Figma</a>
                        </div>
                    </div>
                </div>

                {/* Tableau des compétences */}
                <div className="flex flex-col mt-6 lg:mt-0 gap-6">
                    <div className="h-20 lg:h-[150px] p-[0.11rem] bg-gradient-to-tr from-[#262626] from-55% via-[#262626] to-[#F35034] rounded-xl">
                        <div className="flex justify-center items-center relative w-full h-full bg-gradient-to-tr from-[#262626] from-45% via-[#262626] to-[#F35034] rounded-xl">
                            <div className="w-full h-full bg-[#262626] opacity-40 absolute rounded-xl"></div>
                            <h1 className="text-[#C0C0C0] relative text-sm lg:text-[24px] font-[500] font-inter">Product design</h1>
                        </div>
                    </div>

                    <div className="flex w-full gap-4">
                        <div className="flex-1 h-20 lg:h-[150px] p-[0.11rem] bg-gradient-to-tr from-[#262626] from-75% to-[#F35034] rounded-xl">
                            <div className="flex justify-center items-center relative w-full h-full bg-gradient-to-tr from-[#262626] from-75% to-[#F35034] rounded-xl">
                                <div className="w-full h-full bg-[#262626] opacity-40 absolute rounded-xl"></div>
                                <h1 className="text-[#C0C0C0] relative text-sm lg:text-[24px] font-[500] font-inter">User Experience</h1>
                            </div>
                        </div>

                        <div className="flex-1 h-20 lg:h-[150px] p-[0.11rem] bg-gradient-to-tr from-[#F35034] via-[#262626] to-[#262626] to-40% rounded-xl">
                            <div className="flex justify-center items-center relative w-full h-full bg-gradient-to-tr from-[#F35034] via-[#262626] to-[#262626] to-40% rounded-xl">
                                <div className="w-full h-full bg-[#262626] opacity-40 absolute rounded-xl"></div>
                                <h1 className="text-[#C0C0C0] relative text-sm lg:text-[24px] font-[500] font-inter">NoCode develop</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Téléphone */}
                <div className="flex flex-col bg-[#262626] rounded-[9px] mt-8 lg:mt-0 lg:h-[815px]">
                    <div className="flex justify-between p-8 lg:p-12">
                        <div className="flex flex-col">
                            <h1 className="text-[#FFFFFF] text-sm lg:text-[24px] font-[600] font-inter">OS Mobile app</h1>
                            <h2 className="text-[#C0C0C0] text-[12px] lg:text-[20px] font-[400] font-inter">Product develop</h2>
                        </div>
                        <div className="w-[22px] h-[22px] md:w-[40px] md:h-[40px] rounded-full bg-[#F35034] flex justify-center items-center">
                            <img src={fleche} alt="" className="w-[8px] h-[10px] md:w-[16px] md:h-[18px] object-cover" />
                        </div>
                    </div>
                    <div className="flex justify-center px-8">
                        <div className="w-[308px] h-[450px] lg:w-[433px] lg:h-[600px]">
                            <img src={telephone} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Projets musicaux */}
                <div className="flex flex-col gap-6 lg:gap-10">
                    <div className="bg-[#262626] lg:h-[400px] rounded-[9px] p-1 mt-6 lg:mt-0">
                        <div className="flex justify-between p-8 lg:p-12">
                            <div className="flex flex-col">
                                <h1 className="text-[#FFFFFF] text-sm lg:text-[24px] font-[600] font-inter">AI Music product</h1>
                                <h2 className="text-[#C0C0C0] text-[12px] lg:text-[20px] font-[400] font-inter">UX Case study</h2>
                            </div>
                            <div className="w-[22px] h-[22px] md:w-[40px] md:h-[40px] rounded-full bg-[#F35034] flex justify-center items-center">
                                <img src={fleche} alt="" className="w-[8px] h-[10px] md:w-[16px] md:h-[18px] object-cover" />
                            </div>
                        </div>
                        <div className="flex justify-center px-8">
                            <div className="flex justify-center items-center w-full max-w-sm">
                                <div className="relative bg-cover bg-center bg-no-repeat w-[139px] h-[146px] lg:w-[271px] lg:h-[285px]"
                                     style={{ backgroundImage: `url(${Music2})` }}>
                                    <div className="relative bg-cover bg-center bg-no-repeat w-[152px] h-[159px] lg:w-[251px] lg:h-[275px] -ml-12 -mt-4"
                                         style={{ backgroundImage: `url(${Music})` }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#262626] lg:h-[400px] rounded-[9px] p-1 mt-4 lg:mt-0">
                        <div className="flex justify-between p-8 lg:p-12">
                            <div className="flex flex-col">
                                <h1 className="text-[#FFFFFF] text-sm lg:text-[24px] font-[600] font-inter">AI Music product</h1>
                                <h2 className="text-[#C0C0C0] text-[12px] lg:text-[20px] font-[400] font-inter">UX Case study</h2>
                            </div>
                            <div className="w-[22px] h-[22px] md:w-[40px] md:h-[40px] rounded-full bg-[#F35034] flex justify-center items-center">
                                <img src={fleche} alt="" className="w-[8px] h-[10px] md:w-[16px] md:h-[18px] object-cover" />
                            </div>
                        </div>
                        <div className="flex justify-center px-8">
                            <div className="flex justify-center items-center w-full max-w-sm">
                                <div className="relative bg-cover bg-center bg-no-repeat w-[139px] h-[146px] lg:w-[271px] lg:h-[285px]"
                                     style={{ backgroundImage: `url(${carte1})` }}>
                                    <div className="relative bg-cover bg-center bg-no-repeat w-[152px] h-[159px] lg:w-[251px] lg:h-[265px] -ml-10 -mt-8"
                                         style={{ backgroundImage: `url(${carte2})` }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section;

