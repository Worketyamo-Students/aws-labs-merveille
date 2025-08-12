
//import '../assets/index.css'; 
//import React from 'react'
import Navbar from '../Navbar';
import Section1 from '../Section1';
// import Bord from '../Bord'
import Footer from '../Footer'


function Account() {
  return (
    // <div className='flex   '>
    //   <Bord />
    <div className="flex md:flex-1  w-full md:pr-12   flex-col gap-4 justify-between items-center   pt-14">
      <Navbar />
      <Section1 />
      <Footer/>
    </div>
    // </div>
  )
}

export default Account