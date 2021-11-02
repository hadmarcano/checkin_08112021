import React,{useState,useEffect} from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Modal, Carousel, Form } from "react-bootstrap";
import roomSuiteJrImg1 from "../assets/images/KING_644X386PX.png";
import roomSuiteJrImg2 from "../assets/images/BANO-JACUZZI_644X386PX.png";
import roomSuiteJrImg3 from "../assets/images/breakfast.jpg";
import roomSuiteImg1 from "../assets/images/SUITE_644X386PX.png";
import roomSuiteImg2 from "../assets/images/BANO-JACUZZI_644X386PX.png";
import roomSuiteImg3 from "../assets/images/CMN_7815.png";
import roomSuiteSpImg1 from "../assets/images/SUITE_PREMIUM.png";
import roomSuiteSpImg2 from "../assets/images/BANO-JACUZZI_644X386PX.png";
import roomSuiteSpImg3 from "../assets/images/CMN_7815.png";
import roomSuitePrImg1 from "../assets/images/STPR_644X386PX.png";
import roomSuitePrImg2 from "../assets/images/BANO-JACUZZI_644X386PX.png";
import roomSuitePrImg3 from "../assets/images/breakfast.jpg";
import iconPassengers from "../assets/images/icon-passengers.png";
import PisoImage from "../assets/images/piso.png";
import WifiImage from "../assets/images/wifi.png";
import TerrazaImage from "../assets/images/terraza.png";
import JacuzziImage from "../assets/images/jacuzzi.png";
import AirConditionerImage from "../assets/images/terraza2.png";
import Underline from "../assets/images/underline.png";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "../pages/styles";
import AlertBar from "./AlertBar.component";
import {
  faEdit,
  faCameraRetro,
  faChevronRight,
  faTimesCircle,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SnackbarsAlert from "./Snackbars.component";


const ModalUpgrade = (props) =>{
    const {show, handleClose, error,showalert,typealerta,roomClass,clickWithUpgrade,upgradeValue} = props;
    const AlertShow = () => showalert && SnackbarsAlert({ error }, typealerta);
    const currency_code = localStorage.getItem("c-code");
    // console.log("currency_code",currency_code);

    let upgrade = null;
  switch (roomClass) {
    case "STD":
      upgrade = "Junior Suite";
      break;
    case "JST":
      upgrade = "Suite Superior";
      break;
    case "SUT":
      upgrade = "Suite Superior King";
      break;
    case "SUTS":
      upgrade = "Suite Presidencial";
      break;
    default:
      upgrade = { roomClass };
  }
    return (
        <Modal show={show} onHide={handleClose} size="lg">
                  <Modal.Header>
                    <button
                      type="button"
                      className="close"
                      onClick={handleClose}
                    >
                      <span aria-hidden="true">
                        <FontAwesomeIcon icon={faTimesCircle} />
                      </span>
                    </button>
                  </Modal.Header>

                  <Modal.Body>
                    {AlertShow()}
                    <h3 className=" text-center orangeFontColor">¡Espera!</h3>
                    <h4 className=" text-center greyFontColor">
                      Tenemos una oferta para ti
                    </h4>
                    <h2 className="text-center greyFontColor mt-3 title_sub">
                      {upgrade}
                      {/* OFERTA ESPECIAL */}
                    </h2>
                    <p className="text-center subTitleImage">
                      <img src={Underline} alt="underlined" />
                    </p>
                    <div className="constainer">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="container py-2">
                            <div className="row align-items-center">
                              <div className="slider">
                                {/* Data room for map */}
                                {upgrade === "Junior Suite" && (
                                  <>
                                    <Carousel>
                                      <Carousel.Item>
                                        <img
                                          className="d-block w100 img-fluid"
                                          src={roomSuiteJrImg1}
                                          alt="First slide"
                                        />
                                      </Carousel.Item>
                                      <Carousel.Item>
                                        <img
                                          className="d-block w100 img-fluid"
                                          src={roomSuiteJrImg2}
                                          alt="Second slide"
                                        />
                                      </Carousel.Item>
                                      <Carousel.Item>
                                        <img
                                          className="d-block w100 img-fluid"
                                          src={roomSuiteJrImg3}
                                          alt="Third slide"
                                        />
                                      </Carousel.Item>
                                    </Carousel>
                                  </>
                                )}
                                {upgrade === "Suite" && (
                                  <>
                                    <Carousel>
                                      <Carousel.Item>
                                        <img
                                          className="d-block w100 img-fluid"
                                          src={roomSuiteImg1}
                                          alt="First slide"
                                        />
                                      </Carousel.Item>
                                      <Carousel.Item>
                                        <img
                                          className="d-block w100 img-fluid"
                                          src={roomSuiteImg2}
                                          alt="Second slide"
                                        />
                                      </Carousel.Item>
                                      <Carousel.Item>
                                        <img
                                          className="d-block w100 img-fluid"
                                          src={roomSuiteImg3}
                                          alt="Third slide"
                                        />
                                      </Carousel.Item>
                                    </Carousel>
                                  </>
                                )}
                                {upgrade === "Suite Superior" && (
                                  <>
                                    <Carousel>
                                      <Carousel.Item>
                                        <img
                                          className="d-block w100 img-fluid"
                                          src={roomSuiteSpImg1}
                                          alt="First slide"
                                        />
                                      </Carousel.Item>
                                      <Carousel.Item>
                                        <img
                                          className="d-block w100 img-fluid"
                                          src={roomSuiteSpImg2}
                                          alt="Second slide"
                                        />
                                      </Carousel.Item>
                                      <Carousel.Item>
                                        <img
                                          className="d-block w100 img-fluid"
                                          src={roomSuiteSpImg3}
                                          alt="Third slide"
                                        />
                                      </Carousel.Item>
                                    </Carousel>
                                  </>
                                )}
                                {upgrade === "Suite Presidencial" && (
                                  <>
                                    <Carousel>
                                      <Carousel.Item>
                                        <img
                                          className="d-block w100 img-fluid"
                                          src={roomSuitePrImg1}
                                          alt="First slide"
                                        />
                                      </Carousel.Item>
                                      <Carousel.Item>
                                        <img
                                          className="d-block w100 img-fluid"
                                          src={roomSuitePrImg2}
                                          alt="Second slide"
                                        />
                                      </Carousel.Item>
                                      <Carousel.Item>
                                        <img
                                          className="d-block w100 img-fluid"
                                          src={roomSuitePrImg3}
                                          alt="Third slide"
                                        />
                                      </Carousel.Item>
                                    </Carousel>
                                  </>
                                )}

                                <h2 className="text-center greyFontColor mt-3 title_sub">
                                  Imágenes
                                </h2>
                                <p className="text-center subTitleImage">
                                  <img src={Underline} alt="underlined" />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <h2 className="text-center greyFontColor mt-3 title_sub">
                            Room Services
                          </h2>
                          <p className="text-center subTitleImage">
                            <img src={Underline} alt="underlined" />
                          </p>
                          <div className="container">
                            <div className="row text-center">
                              <div className="col-6 col-sm-6 col-md-12">
                                <div className="row">
                                  <div className="col-md-6">
                                    <img
                                      src={iconPassengers}
                                      className="romServicesVertical img-fluid"
                                      alt="icon-passengers"
                                    />
                                  </div>
                                  <div className="col-md-6 align-middle">
                                    <p className="textServicesVertical">
                                      4 Personas
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row text-center">
                              <div className="col-6 col-sm-6 col-md-12">
                                <div className="row">
                                  <div className="col-md-6">
                                    <img
                                      src={PisoImage}
                                      className="romServicesVertical img-fluid"
                                      alt="flat-icon"
                                    />
                                  </div>
                                  <div className="col-md-6 align-middle">
                                    <p className="textServicesVertical">
                                      49mt2
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row text-center">
                              <div className="col-6 col-sm-6 col-md-12">
                                <div className="row">
                                  <div className="col-md-6">
                                    <img
                                      src={WifiImage}
                                      className="romServicesVertical img-fluid"
                                      alt="wifi-icon"
                                    />
                                  </div>
                                  <div className="col-md-6 align-middle">
                                    <p className="textServicesVertical">WIFI</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row text-center">
                              <div className="col-6 col-sm-6 col-md-12">
                                <div className="row">
                                  <div className="col-md-6">
                                    <img
                                      src={TerrazaImage}
                                      className="romServicesVertical img-fluid"
                                      alt="terraza-icon"
                                    />
                                  </div>
                                  <div className="col-md-6 align-middle">
                                    <p className="textServicesVertical">
                                      Terraza
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row text-center">
                              <div className="col-6 col-sm-6 col-md-12">
                                <div className="row">
                                  <div className="col-md-6">
                                    <img
                                      src={JacuzziImage}
                                      className="romServicesVertical img-fluid"
                                      alt="jacuzzi-icon"
                                    />
                                  </div>
                                  <div className="col-md-6 align-middle">
                                    <p className="textServicesVertical">
                                      Jacuzzi
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row text-center">
                              <div className="col-6 col-sm-6 col-md-12">
                                <div className="row">
                                  <div className="col-md-6">
                                    <img
                                      src={AirConditionerImage}
                                      className="romServicesVertical img-fluid"
                                      alt="air-icon"
                                    />
                                  </div>
                                  <div className="col-md-6 align-middle">
                                    <p className="textServicesVertical">Aire</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="container">
                          <div className="row">
                            <div className="col-md-12 ">
                              <p className="text-justify">
                                Cama King, área de trabajo, aire acondicionado y
                                calefacción individual, caja de seguridad,
                                frigobar, Wi-Fi y TV cable, Jacuzzi. Ofrecemos
                                servicio de Restaurantes: Los Varietales,
                                especializado en gastronomía chilena destacando
                                productos de la zona.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="container">
                          <div className="row">
                            {typealerta !== "error" && (
                              <div className="col-md-12 text-center">
                                <Link to="/step2">
                                  <button
                                    type="button"
                                    className="btn btn-primary mt-3 equalButton"
                                    // onClick={clickSubmit}
                                  >
                                    <FontAwesomeIcon icon={faChevronRight} />{" "}
                                    CONTINUAR <br /> SIN UPGRADE
                                  </button>
                                </Link>

                                <Link to="/step2">
                                  <button
                                    type="button"
                                    className="btn btn-update mt-3 equalButton upgradeAction"
                                    onClick={() => {
                                      clickWithUpgrade();
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faChevronRight} />{" "}
                                    {"ACTUALIZAR MI"} <br />{" "}
                                    {`RESERVA + $${upgradeValue} ${currency_code}`}
                                  </button>
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    {/* <button onClick={handleClose}>Close</button>
                    <button onClick={handleClose}>Save Changes</button> */}
                  </Modal.Footer>
                </Modal>
    );
};


export default ModalUpgrade;