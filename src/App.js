import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/login";
import Home from "./components/home";
import Orders from "./components/orders";

function App() {
  return (
    <>
      <BrowserRouter basename="figmafirebase">
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="home" element={<Home/>}></Route>
          <Route path="orders" element={<Orders/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
