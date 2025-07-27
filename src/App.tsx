
//import '../assets/index.css'; 
//import React from 'react'
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col gap-2 p-4 bg-[#000000]">
      <Navbar />
      <Section />
      <Footer/>
    </div>
  )
}

export default App