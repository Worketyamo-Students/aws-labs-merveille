
//import '../assets/index.css'; 
//import React from 'react'
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex  flex-col gap-4 justify-center align-center  p-8 pt-8">
      <Navbar />
      <Section />
      <Footer/>
    </div>
  )
}

export default App