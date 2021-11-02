import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark align-items-center footerFirst">
      <div className="container-fluid bg-dark preFooter">
        <div className="row">
          <div className="col-md-12"></div>
        </div>
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center text-white">
            <h3>¿Tienes dudas?</h3>
          </div>
        </div>
        <div className="container-fluid infoFooter">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="row">
                <div className="col text-center text-white">
                  <h5>Santa Cruz</h5>
                  <p>reservas@hotelsantacruzplaza.cl</p>
                  <p>+56 72 220 9600</p>
                </div>

                <div className="col text-center text-white">
                  <h5>Santiago</h5>
                  <p>reservas@almacruz.cl</p>
                  <p>+56 2 2470 7400</p>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
