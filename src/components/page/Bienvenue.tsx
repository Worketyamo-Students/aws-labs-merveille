
//import '../assets/index.css'; 
//import React from 'react'
import Navbar from '../Navbar';
import Section4 from '../Section4';
import Footer from '../Footer';

function Bienvenue() {
  return (
    <div className="flex   flex-col justify-between min-h-screen gap-8  items-center  p-6 pt-20">
      <Navbar />
      <Section4 />
      <Footer/>
    </div>
  )
}

export default Bienvenue;