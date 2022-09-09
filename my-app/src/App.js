import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Signup from './components/Signup';
import Header from "./components/header/index";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <Header />
      <Home />
    </div>
  );
}

export default App;
