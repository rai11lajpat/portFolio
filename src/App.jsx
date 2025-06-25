import './App.css'
import Header from './components/Header'
import Baner from './components/Baner'
import AboutSection from './components/AboutSection'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import FinalYearProject from './components/FinalYearProject'

import { Routes, Route } from 'react-router-dom';
import Projects from './components/Projects'

function App() {
  return (
    <div>
   
        <Header/>

        <Routes>
          <Route path="/portFolio/" element={<><Baner/> <AboutSection/><FinalYearProject/><Services/><Expertise/><Projects/></>} />
          <Route path="/portFolio/About" element={<AboutSection/>} />
          <Route path='/portFolio/Projects' element={<Projects/>}/>
          <Route path="/portFolio/services" element={<Services/>} />
          <Route path="/portFolio/Expertise" element={<Expertise/>} />
          <Route path="/portFolio/FinalYearProject" element={<FinalYearProject/>} />
        </Routes>
        <Footer/>
   
    </div>
  );
}

export default App;
