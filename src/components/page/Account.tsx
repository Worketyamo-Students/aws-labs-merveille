
//import '../assets/index.css'; 
//import React from 'react'
import Navbar from '../Navbar';
import Section1 from '../Section1';
import Footer from '../Footer';

function Account() {
  return (
    <div className="flex   flex-col gap-4 justify-between items-center  p-8 pt-20">
      <Navbar />
      <Section1 />
      <Footer/>
    </div>
  )
}

export default Account