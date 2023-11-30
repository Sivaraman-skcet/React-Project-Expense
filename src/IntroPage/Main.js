import React from "react";
import Nav from "./Nav";
import Getstart from "./getstarted";
import "../IntroPage/Main.css";
import Logo from "../images/shareifyLogo.jpg";
function Main() {
  return (
    <div className="head">
      <img src={Logo} alt="" className="logo" />
      <div className="nav">
        <Nav />
      </div>
      <div className="start">
        <Getstart />
      </div>
    </div>
  );
}

export default Main;
