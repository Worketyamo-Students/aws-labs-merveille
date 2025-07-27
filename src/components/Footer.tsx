function Footer() {
    return (
        <div >
            {/* Footer mobile - visible uniquement sur mobile */}
            <footer className="lg:hidden md:hidden flex flex-col justify-center items-center bg-[#262626] h-40 mt-4 mb-6 gap-4 rounded-lg">
                <div className="flex justify-center items-center rounded-[14px] w-[125px] h-[21px] bg-gray-800 gap-1">
                    <div className="mt-1 w-[7px] h-[7px] rounded-full bg-orange-500"></div>
                    <a href="#" className="text-[#FFFFFF] text-[9px] font-medium font-inter">AVAILABLE FOR JOB</a>
                </div>
                
                <div className="flex gap-4">
                    <a href="#" className="font-inter text-[15px] font-medium text-[#E63E21]">Twitter</a>
                    <a href="#" className="font-inter text-[15px] font-medium text-[#FFFFFF]">Instagram</a>
                    <a href="#" className="font-inter text-[15px] font-medium text-[#FFFFFF]">LinkedIn</a>
                </div>
                
                <a href="#" className="text-[#C0C0C0] font-inter font-medium">Portfolio 2024</a>
            </footer>

            {/* Footer desktop - visible uniquement sur desktop */}
            <div className="hidden lg:block md:block mt-6 h-[125px] p-[0.08rem] bg-gradient-to-tr from-orange-800 via-[#262626] to-[#262626] rounded-xl">
                <div className="flex justify-center md:justify-between lg:justify-between items-center relative w-full h-[122px] bg-gradient-to-tr from-orange-600 via-[#262626] to-[#262626] rounded-xl">
                    <div className="w-full h-[122px] bg-[#262626] opacity-50 absolute rounded-xl"></div>
                    
                    <footer className="flex justify-between items-center w-full px-10 relative z-10">
                        <a href="#" className="text-[#FFFFFF] font-inter font-medium">Portfolio 2024</a>
                        
                        <div className="flex gap-6">
                            <a href="#" className="font-inter text-[15px] font-medium text-[#E63E21]">Twitter</a>
                            <a href="#" className="font-inter text-[15px] font-medium text-[#FFFFFF]">Instagram</a>
                            <a href="#" className="font-inter text-[15px] font-medium text-[#FFFFFF]">LinkedIn</a>
                        </div>
                        
                        <div className="flex justify-center items-center rounded-[14px] w-[125px] h-[21px] bg-gray-800 gap-1">
                            <div className="mt-1 w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full bg-orange-500"></div>
                            <a href="#" className="text-[#FFFFFF] text-[9px] font-medium font-inter">AVAILABLE FOR JOB</a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Footer;

