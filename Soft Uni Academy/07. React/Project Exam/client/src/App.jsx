import { Routes, Route, Router } from "react-router";

import "./App.css";

import HeaderComponent from "./modules/Header";
import MainComp from "./modules/Main";
import FooterComp from "./modules/Footer";
import AboutComp from "./modules/About";
import ContactUsComp from "./modules/ContactUs";


function App() {
  return (
    <>
  <HeaderComponent/>
  <Routes>
    <Route path="/" element={<MainComp/>}/>
    <Route path="/about" element={<AboutComp/>}/>
    <Route path="/contact" element={<ContactUsComp/>}/>
  </Routes  >
  
  <FooterComp/> 
    </>
  );
}

export default App;
