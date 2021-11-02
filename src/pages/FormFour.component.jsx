import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Underline from "../assets/images/underline.png";
import { CheckInContext } from "../context/checkInContext";
import SnackbarsAlert from "../components/Snackbars.component";
import CanvasDraw from "react-canvas-draw";
import // getDataCheckIn,
// postSaveCheckIn,
// getAllNationalities,
// getRoomRates,
"../constants/apiServices";

import {
  faEdit,
  faChevronRight,
  faEraser,
  faSave,
  //   faCameraRetro,
  //   faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { saveReservationAndAddress } from "../constants/apiServices";

const FormFour = () => {
  const {
    room_selected,
    changeRoomSelected,
    resvNameId,
    changeResvNameId,
    nameHotel,
    changeNameHotel,
    firstHostName,
    changeToFirstHost,
    lastHostName,
    changeToLastHost,
    hostAddress,
    changeToHostAddress,
    hostCountry,
    changeToHostCountry,
    hostCity,
    changeToHostCity,
    phoneHost,
    changeToHostPhone,
    emailHost,
    changeToEmailHost,
    docNumberHost,
    changeToDocNumberHost,
    hostNumberGuest,
    changeToHostNumberGuest,
    typeDocHost,
    changeToTypeDocHost,
    hostCountryLong,
    changeToCountryLong,
    checkIn,
    changeToCheckIn,
    checkOut,
    changeToCheckOut,
    room_CategoryLabel,
  } = useContext(CheckInContext);
  const [signatureBase64, setSignatureBase64] = useState("");
  const [values, setValues] = useState({
    room: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    name: "",
    lastName: "",
    address: "",
    country: "",
    countryLong: "",
    city: "",
    phone: "",
    email: "",
    personalNmb: "",
    carPlate: "",
    passportNmb: "",
    group: "",
    hotel: "",
    resv_name_id: "",
    error: "",
    showalert: false,
    typealerta: "error",
  });

  const {
    room,
    guests,
    name,
    lastName,
    address,
    country,
    countryLong,
    city,
    phone,
    email,
    personalNmb,
    carPlate,
    passportNmb,
    group,
    hotel,
    resv_name_id,
    error,
    showalert,
    typealerta,
  } = values;

  useEffect(() => {
    setValues({
      ...values,
      room: room_selected,
      checkIn: checkIn,
      checkOut: checkOut,
      name: firstHostName,
      lastName: lastHostName,
      address: hostAddress,
      country: hostCountry,
      countryLong: hostCountryLong,
      city: hostCity,
      phone: phoneHost,
      email: emailHost,
      personalNmb: docNumberHost,
      hotel: nameHotel,
      resv_name_id: resvNameId,
      guests: hostNumberGuest,
    });
  }, []);

  const AlertShow = () => showalert && SnackbarsAlert({ error }, typealerta);

  const handleChange = (name) => (event) => {
    const value = name === "foto" ? event.target.files[0] : event.target.value;

    console.log(name);

    setValues({ ...values, [name]: value });
  };

  // const clickSubmit = (event) => {
  const clickSubmit = () => {
    // event.preventDefault();
    setValues({
      ...values,
    });
    // firma
    // signatureBase64;
    const info = {
      room,
      checkIn,
      checkOut,
      guests,
      name,
      lastName,
      address,
      country,
      countryLong,
      city,
      phone,
      email,
      personalNmb,
      carPlate,
      passportNmb,
      group,
      hotel,
      resv_name_id,
      signatureBase64: signatureBase64,
    };

    saveReservationAndAddress(info)
      .then((response) => {
        console.log(response);
        setValues({
          ...values,
          error: "Update OK",
          typealerta: "success",
          showalert: true,
        });
        return response;
      })
      .catch((e) => console.log(e));
  };

  const firstCanvas = useRef(null);
  const handleSign = (e) => {
    const data = firstCanvas.current.getSaveData();
    console.log("data del canvas", data);
    if (firstCanvas.current) {
      const dataImg = firstCanvas.current.canvasContainer.children[1].toDataURL();
      console.log(dataImg);
      setValues({
        ...values,
        error: "Firma guardada",
        typealerta: "success",
        showalert: true,
      });
      setSignatureBase64(dataImg);
      setTimeout(() => {
        setValues({
          ...values,
          showalert: false,
        });
      }, 2000);
    }
  };

  const handleClear = () => {
    firstCanvas.current.clear();
  };

  return (
    <div className="d-flex align-items-center flex-column justify-content-center h-100 bg-dark backgroundForm text-white header">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="card text-center topSpace">
          <div className="card-header">
            <FontAwesomeIcon icon={faEdit} />
            &nbsp;Bienvenido al Check In en línea
          </div>
          {AlertShow()}
          <div className="card-body ">
            <h3 className="text-center orangeFontColor">
              Tu habitación actual
            </h3>

            <h4 className="text-center greyFontColor">{room_CategoryLabel}</h4>
            <p className="text-center subTitleImage">
              <img src={Underline} alt="underlined" />
            </p>

            <h3 className="text-center greyFontColor mt-4">
              Confirma tus Datos
            </h3>
            <p className="text-center subTitleImage">
              <img src={Underline} alt="underlined" />
            </p>

            {/* Formulario */}
            <div className="container">
              <div className="form-wrapper">
                <form className="form" action="">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="Nombre">
                          Nombre
                        </label>
                        <input
                          type="text"
                          className="form-control form-input NombreInput"
                          placeholder={name}
                          value={name}
                          onChange={handleChange("name")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="Apellidos">
                          Apellidos
                        </label>
                        <input
                          type="text"
                          className="form-control form-input ApellidosInput"
                          placeholder={lastName}
                          value={lastName}
                          onChange={handleChange("lastName")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="Direccion">
                          Dirección
                        </label>
                        <input
                          type="text"
                          className="form-control form-input DireccionInput"
                          placeholder={address}
                          value={address}
                          onChange={handleChange("address")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="Pais">
                          País
                        </label>
                        <input
                          type="text"
                          className="form-control form-input PaisInput"
                          placeholder={country}
                          value={country}
                          onChange={handleChange("country")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="Ciudad">
                          Ciudad
                        </label>
                        <input
                          type="text"
                          className="form-control form-input CiudadInput"
                          placeholder={city}
                          value={city}
                          onChange={handleChange("city")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="Telefono">
                          telefono
                        </label>
                        <input
                          type="text"
                          className="form-control form-input TelefonoInput"
                          placeholder={phone}
                          value={phone}
                          onChange={handleChange("phone")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="Email">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control form-input EmailInput"
                          placeholder={email}
                          value={email}
                          onChange={handleChange("email")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          className="form-label"
                          htmlFor="Cédula de Identidad"
                        >
                          Numero de documento
                        </label>
                        <input
                          type="text"
                          className="form-control form-input IdentidadInput"
                          placeholder={personalNmb}
                          value={personalNmb}
                          onChange={handleChange("personalNmb")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          className="form-label"
                          htmlFor="Patente/Placa de Coche"
                        >
                          Patente/Placa de Coche
                        </label>
                        <input
                          type="text"
                          className="form-control form-input PatenteInput"
                          placeholder=""
                          onChange={handleChange("carPlate")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          className="form-label"
                          htmlFor="Numero de Pasajeros"
                        >
                          Número de huéspedes
                        </label>
                        <input
                          type="text"
                          className="form-control form-input PasajerosInput"
                          placeholder={guests}
                          value={guests}
                          onChange={handleChange("guests")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <p>Firma</p>
                        <div className={"pad-container"}>
                          <CanvasDraw
                            ref={firstCanvas}
                            brushRadius={1}
                            canvasWidth={500}
                            canvasHeight={300}
                            gridColor="#e9ecef"
                            hideInterface={true}
                          />
                        </div>
                        <button
                          onClick={() => handleSign()}
                          type="button"
                          className="btn btn-primary m-2 .savesign"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <FontAwesomeIcon icon={faSave} /> Guardar firma
                        </button>
                        {/* nbsp; */}
                        <button
                          onClick={() => {
                            handleClear();
                          }}
                          type="button"
                          className="btn btn-primary m-2"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          {/* <i className="fas fa-eraser"></i> */}
                          <FontAwesomeIcon icon={faEraser} /> Borrar Firma
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <Link to="step5">
                          <button
                            onClick={() => {
                              clickSubmit();
                            }}
                            type="button"
                            className="btn btn-update mt-3"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            {/* <i className="fas fa-check"></i>*/}
                            <FontAwesomeIcon icon={faChevronRight} /> Finalizar
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3"></div>
                </form>
              </div>
            </div>

            {/* formulario */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFour;
