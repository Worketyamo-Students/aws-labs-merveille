import logo from '../assets/public/udemy.svg';
import logo2 from '../assets/public/Group 28.svg'



function Navbar() {
    return(

    <header className="flex justify-center  lg:-mt-10 ">
      <img src={logo} alt="#" className='w-[38px] w-[38px]  md:hidden'/>
      <img src={logo2} alt="#" className='w-[150px] w-[38px] hidden md:block'/>
      
      </header>
     )
}


export default Navbar;