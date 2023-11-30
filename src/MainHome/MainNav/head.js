import React from "react";
import "../MainNav/head.css";
import Logo from "../../images/shareifyLogo.jpg";
function head() {
  return (
    <div>
      <div className="head">
        <img src={Logo} className="logo" alt="error" />
        <div className="user">
          <p style={{ textAlign: "center" }}>
            <b>Arvindh</b>
          </p>
          <p>sivsecuredata@gmail.com</p>
        </div>
        <div>
          <img
            src="https://dxkgfgg79h3hz.cloudfront.net/avatars/crab.png"
            alt="error"
            className="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default head;
