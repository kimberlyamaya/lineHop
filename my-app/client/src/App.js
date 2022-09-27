import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/index";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../src/components/Navbar/index"



function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
    </div>
  );
}

export default App;
