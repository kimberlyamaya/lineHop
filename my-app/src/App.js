import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsHouseDoorFill } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <Header>
    <Link to="/"><BsHouseDoorFill /></Link>
    <Link to="/">Home</Link>
    </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
