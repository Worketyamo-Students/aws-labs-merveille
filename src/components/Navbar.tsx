import logo from '../assets/img/logo.svg';
import menu from '../assets/img/menu.svg';



function Navbar() {
    return(

    <header className="flex w-full items-center">
        {/* Logo */}
      <div className="flex  justify-center items-center w-[42px] h-[42px] md:w-[64px] md:h-[64px] bg-[#262626] rounded-full">
        <img
           src={logo}
          alt="Logo"
          className="w-[27.5px] h-[27.5px] md:w-[40px] md:h-[40px] object-cover rounded-full "
        />
      </div>

    <div
        className="flex justify-between p-5  items-center grow w-full  h-[42px] md:h-[64px] rounded-full  bg-[#262626]">
        <a href="#" className="flex font-bold text-[13px] pl-8 md:text-base lg:text-[20px] text-[#F35034]">ABOUT
        </a>
        <a href="#"  className="hidden md:flex w-[47px] h-[24px] text-[11px] font-bold lg:text-[20px] text-[#FFFFFF]">PORTFOLIO</a>
        <a href="#" className="hidden md:flex w-[47px] h-[24px] text-[11px] font-bold lg:text-[20px] text-[#FFFFFF]">CONCTACT</a>

        {/* Menu hamburger visible seulement sur mobile */} 
         <img
          src={menu}
          alt="Menu"
          className="flex md:hidden w-4 h-4 object-cover"
        />
      </div>
    </header>
    )
}

export default Navbar