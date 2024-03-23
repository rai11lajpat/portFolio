import './App.css'
import Header from './components/Header'
import Baner from './components/Baner'
import AboutSection from './components/AboutSection'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom';
import Projects from './components/Projects'

function App() {
  return (
    <div>
   
        <Header/>

        <Routes>
          <Route path="/portFolio/" element={<><Baner/> <AboutSection/><Services/><Expertise/><Projects/></>} />
          <Route path="/About" element={<AboutSection/>} />
          <Route path='/Projects' element={<Projects/>}/>
          <Route path="/services" element={<Services/>} />
          <Route path="/Expertise" element={<Expertise/>} />
        </Routes>
        <Footer/>
   
    </div>
  );
}

export default App;
