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
  faEnvelope,
  faEraser,
  faSave,
  //   faCameraRetro,
  //   faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormSix = () => {
  return (
    <div className="d-flex align-items-center flex-column justify-content-center h-100 bg-dark backgroundForm text-white header">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="card text-center topSpace">
          {/* <div className="card-header">
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;¡ Muchas gracias por su preferencia !
          </div> */}

          <div className="card-body-six">
            {/* <h3 className="text-center orangeFontColor">
              www.hotelsantacruzplaza.cl
            </h3> */}
            {/* <h4 className="text-center greyFontColor">{room_CategoryLabel}</h4> */}
            {/* <p className="text-center subTitleImage">
              <img src={Underline} alt="underlined" />
            </p> */}
            <a href="https://hotelsantacruzplaza.cl ">
              <button type="button" className="btn btn-primary mt-3">
                <FontAwesomeIcon icon={faChevronRight} />
                &nbsp;Salir
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSix;
