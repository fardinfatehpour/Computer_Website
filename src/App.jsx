//import
import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
//component
import Heder from "./assets/component/Heder.jsx";
import Home from "./assets/component/Home.jsx";
import Footer from "./assets/component/Footer.jsx";
import Add from "./assets/component/Add.jsx";
import Signin from "./assets/component/Signin.jsx";
import ErrorPage from "./assets/component/ErrorPage.jsx";
import { Container } from "react-bootstrap";
import Search from "./assets/component/Search.jsx";
import Product from "./assets/component/Product.jsx";
const App = () => {
  return (
    <div id="body">
      <Heder />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:product" element={<Product />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Add" element={<Add />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
