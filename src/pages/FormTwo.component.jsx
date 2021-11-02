import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import Underline from "../assets/images/underline.png";
import ZonesImage from "../assets/images/zones.png";
import SnackbarsAlert from "../components/Snackbars.component";
import { CheckInContext } from "../context/checkInContext";
import {
  getRoomRates,
  getRoomFeatures,
  verifyRoomAvalaibles,
  savingRoomSelected,
} from "../constants/apiServices";
import {
  faEdit,
  faChevronRight,
  //   faCameraRetro,
  //   faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormTwo = () => {
  const {
    type_save,
    changeToType_save,
    roomTypeToVerify,
    roomTypeToMap,
    changeRommTypeMap,
    room_selected,
    changeRoomSelected,
    resvNameId,
    changeResvNameId,
    rateCode,
    changeRateCode,
    nameHotel,
    changeNameHotel,
    agentName,
    changeAgentName,
    amount,
    changeAmount,
    dayArrival,
    changeDayArrival,
    feature,
    room_Class,
    changeRoomClass,
    room_CategoryLabel,
    changeRoomCategoryLabel,
    featureSelected,
    changeFeatureSelected,
  } = useContext(CheckInContext);
  const [roomsAvalaibles, setRoomsAvalaibles] = useState([]);
  const [featuresAvalaiblesG1, setFeaturesAvalaiblesG1] = useState([]);
  const [featuresAvalaiblesG2, setFeaturesAvalaiblesG2] = useState([]);
  const [featuresAvalaiblesG3, setFeaturesAvalaiblesG3] = useState([]);
  const [buttonToStep4, setButtonToStep4] = useState(false);
  const [values, setValues] = useState({
    sector: "",
    number_suite: "",
    room_category_label: "",
    room_class: "",
    error: "",
    showalert: false,
    typealerta: "error",
  });

  const {
    sector,
    number_suite,
    room_category_label,
    room_class,
    error,
    showalert,
    typealerta,
  } = values;

  
  // +++++++ EFECTS +++++++++++++
  useEffect(() => {
    setValues({
      ...values,
      room_category_label: room_CategoryLabel,
    });
    init();
  }, []);

 

  useEffect(() => {
    const request = {
      feature: sector,
      hotel: nameHotel,
      roomTypeLabel: roomTypeToMap,
    };
    getRoomDataAvalaibles(request);
  }, [featureSelected]);
  // ++++++++++++++++++++++++++++++++++++++++++



  const init = () => {
    console.log(roomTypeToMap);
    const data = {
      resvNameId: resvNameId,
      hotel: nameHotel,
      rate_code: rateCode,
      agent_name: agentName,
      amount: amount,
      dayarrival: 1,
      // dayarrival: dayArrival,
    };
    const roomInfo = {
      // room_type: roomTypeToVerify,
      room_type: roomTypeToMap,
      hotel: nameHotel,
      resvNameId: resvNameId,
    };
    getRoomRates(data).then((response) => console.log("js.84", response));
    RoomAvalaiblesByCategoryLabel(roomInfo);
  };
  const RoomAvalaiblesByCategoryLabel = (data) => {
    verifyRoomAvalaibles(data).then((response) => {
      const rooms = response.resp;

      // console.log("features disponibles", rooms.slice(0, 2));
      // console.log("features disponibles", rooms.slice(2, 4));
      // console.log("features disponibles", rooms.slice(4,6));

      if (rooms.length < 1) {
        setValues({
          ...values,
          error: "No hay habitaciones disponibles en este momento",
          typealerta: "warning",
          showalert: true,
        });
        setButtonToStep4(true);
      }
      if (rooms.length < 3) {
        console.log("features disponibles", rooms);
        return setFeaturesAvalaiblesG1(rooms);
      }
      if (rooms.length < 5) {
        console.log("features disponibles G1", rooms.slice(0, 2));
        setFeaturesAvalaiblesG1(rooms.slice(0, 2));
        setFeaturesAvalaiblesG2(rooms.slice(2, 4));
      } else {
        setFeaturesAvalaiblesG1(rooms.slice(0, 2));
        setFeaturesAvalaiblesG2(rooms.slice(2, 4));
        setFeaturesAvalaiblesG3(rooms.slice(4, 6));
      }
    });
  };
  const savingRoomAndNext = () => {
    const data = {
      resv_name_id: resvNameId,
      room: room_selected,
      amount: amount,
      roomCategory: roomTypeToMap,
      typeSave: type_save,
    };
    savingRoomSelected(data).then((response) =>
      console.log("save room ", response)
    );
  };

  const getRoomDataAvalaibles = (data) => {
    getRoomFeatures(data).then((response) => {
      console.log("js.125 habitaciones disponibles", response);
      return setRoomsAvalaibles(response.resp);
    });
  };
  const AlertShow = () => {
    // console.log(showalert);
    return showalert && SnackbarsAlert({ error }, typealerta);
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;

    if (name === "sector") {
      changeFeatureSelected(value);
      return setValues({ ...values, [name]: value });
    }

    if (name === "number_suite") {
      changeRoomSelected(value);
    }
    setRoomsAvalaibles(roomsAvalaibles);
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="d-flex align-items-center flex-column justify-content-center h-100 bg-dark backgroundForm text-white header">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="card text-center topSpace">
          <div className="card-header">
            <FontAwesomeIcon icon={faEdit} />
            &nbsp;Bienvenido al Check In en línea
            {AlertShow()}
          </div>
          <div className="card-body">
            <>
              <h3 className="text-center orangeFontColor">
                Tu habitación actual
              </h3>
              <h4 className="text-center greyFontColor">
                {room_CategoryLabel}
              </h4>
              <h4 className="text-center greyFontColor">
                Selecione la zona y el número de la habitación
              </h4>
              <p className="text-center subTitleImage">
                <img src={Underline} alt="underlined" />
              </p>
            </>

            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <img
                    src={ZonesImage}
                    alt="zones-background"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* {areRoomsAvalaibles && ( */}
            <div className="container backgroundZone text-white">
              <div className="row">
                <div className="col-md-4">
                  {featuresAvalaiblesG1.map((feat, i) => {
                    return (
                      <div className="row" key={i}>
                        <div className="input-group-text">
                          <input
                            type="radio"
                            aria-label="Radio button for following text input"
                            name="zoneHotel"
                            onChange={handleChange("sector")}
                            value={feat.FEATURE}
                          />
                          &nbsp;
                          <span className="step">{parseInt(i + 1)}</span>
                          {feat.VISTA}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="col-md-4">
                  {featuresAvalaiblesG2.map((feat, i) => {
                    return (
                      <div className="row" key={i}>
                        <div className="input-group-text">
                          <input
                            type="radio"
                            aria-label="Radio button for following text input"
                            name="zoneHotel"
                            onChange={handleChange("sector")}
                            value={feat.FEATURE}
                          />
                          &nbsp;
                          <span className="step">{parseInt(i + 3)}</span>
                          {feat.VISTA}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="col-md-4">
                  {featuresAvalaiblesG3.map((feat, i) => {
                    return (
                      <div className="row" key={i}>
                        <div className="input-group-text">
                          <input
                            type="radio"
                            aria-label="Radio button for following text input"
                            name="zoneHotel"
                            onChange={handleChange("sector")}
                            value={feat.FEATURE}
                          />
                          &nbsp;
                          <span className="step">{parseInt({ i }) + 3}</span>
                          {feat.VISTA}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="container">
              {/* {areRoomsAvalaibles && ( */}
              <div className="form-wrapper">
                <form
                  action=""
                  className="form"
                  // onSubmit={clickSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="centerLH greyFontColor fontMedium">
                        Seleccione el número de su habitación :
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group form-input">
                        <select
                          className="custom-select"
                          id="inputGroupSelect01"
                          defaultValue={"Elija una habitacion"}
                          onChange={handleChange("number_suite")}
                        >
                          {/* Options for map */}
                          <option value="Elija un opción">
                            Elija un opción
                          </option>
                          {/* numbers rooms data */}
                          {roomsAvalaibles.map((room, i) => (
                            <option
                              key={i}
                              value={room.ROOM}
                            >{`Habitación ${room.ROOM}`}</option>
                          ))}
                          {/* <option value="315">Habitación 315</option>
                          <option value="316">Habitación 316</option> */}
                        </select>
                      </div>
                    </div>
                  </div>
                  {buttonToStep4 === true ? (
                    <></>
                  ) : (
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <Link to="/step3">
                          <button
                            type="button"
                            className="btn btn-update mt-5"
                            onClick={() => {
                              savingRoomAndNext();
                            }}
                          >
                            <FontAwesomeIcon icon={faChevronRight} /> Siguiente
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </form>
              </div>
              {/* // )} */}
              {buttonToStep4 && (
                <div className="row">
                  <div className="col-md-12 text-center">
                    <Link to="/step4">
                      <button type="button" className="btn btn-update mt-5">
                        <FontAwesomeIcon icon={faChevronRight} /> Siguiente
                      </button>
                    </Link>
                  </div>
                </div>
              )}
              {/* fin_form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTwo;
