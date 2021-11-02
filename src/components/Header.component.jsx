import React from "react";
import Logo from "../assets/images/logosanta.png";

const Header = () => {
  return (
    <div className="container-fluid bg-dark align-items-center headFirst">
      <div className="row">
        <div className="col-md-12">
          <img src={Logo} className="mx-auto d-block" alt="logo-img" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>
      </div>
    </div>
  );
};

export default Header;
