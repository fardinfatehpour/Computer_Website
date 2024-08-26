//import
import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
//component
import Heder from "./assets/component/Heder.jsx";

import Home from './assets/component/Home.jsx'
const App = () => {
  return (
    <>
    <Heder/>
    <Routes>
      <Route path="/" element={ <Home/> } />
    </Routes>
    </>
  );
};

export default App;
