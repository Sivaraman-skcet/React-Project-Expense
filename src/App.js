import React from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "./IntroPage/Main";
import Login from "./Authentication/login";
import Home from "./MainHome/Home";
import Signup from "./Authentication/Signup";
import Create from "./MainHome/Create";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
