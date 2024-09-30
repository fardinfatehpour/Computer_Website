//import
import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
//component
import Heder from "./assets/component/Heder.jsx";
import Home from './assets/component/Home.jsx';
import Footer from './assets/component/Footer.jsx';
import Add from './assets/component/Add.jsx';
import Signin from './assets/component/Signin.jsx'
const App = () => {
  return (
    <>
    <Heder/>
    <Routes>
      
      <Route path="*" element={ <Home/> } />
      <Route path="/" element={ <Home/> } />
      <Route path="/Add" element={ <Add/> }/>
    </Routes>
    <Footer/>
    </>
  );
};

export default App;
