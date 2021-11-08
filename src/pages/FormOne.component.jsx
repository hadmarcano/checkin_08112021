import React, { useState, useEffect, useContext } from "react";
import { validate, clean, format, getCheckDigit } from "rut.js";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Redirect, useHistory } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import { styles } from "./styles.js";
import Typography from "@material-ui/core/Typography";
import SnackbarsAlert from "../components/Snackbars.component";
import AlertBar from "../components/AlertBar.component";
import ModalSick from "../components/ModalSick.component";
import { CheckInContext } from "../context/checkInContext";
import {
  getDataCheckIn,
  postSaveCheckIn,
  getAllNationalities,
  getRoomRates,
} from "../constants/apiServices";
import {
  faEdit,
  faCameraRetro,
  faChevronRight,
  faTimesCircle,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalUpgrade from "../components/ModalUpgrade.component";

// 30-10-2021 // Review
const FormOne = ({ match }) => {
  const dataPack = match.params.dataPackage;
  let history = useHistory();

  const {
    type_save,
    changeToType_save,
    roomTypeToVerify,
    changeRoomTypeToVerify,
    roomTypeToMap,
    changeRommTypeMap,
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
    //HOST INFO
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
    roomAmountFinal,
    changeToRoomAmountFinal,
    // currencyCode,
    // changeToCurrencyCode,
    // DECLARATION CONTEXT
    answerA,
    answerB,
    answerC,
    changeAnswerA,
    changeAnswerB,
    changeAnswerC,
  } = useContext(CheckInContext);

  // DECLARATION STATUSES
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(true);
  const [sicks, setSicks] = useState([]);
  const [accept, setAccept] = useState(false);
  const [upgradeCategoryLabel, setUpgradeCategoryLabel] = useState("");
  const [showUpgrade, setShowUpgrade] = useState(true);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [listNations, setListNations] = useState([]);
  const [hasUpgrade, setHasUpgrade] = useState(false);
  const [upgradeValue, setUpgradeValue] = useState("");
  const [values, setValues] = useState({
    titularPic: "",
    hotel: "",
    base64: "",
    guestPic: "",
    first: "",
    last: "",
    birth_date: "",
    gender: "M",
    nationality: "",
    id_place: "",
    id_type: "", // Select
    passport: "",
    id_date: "",
    tax1_no: "",
    name_id: "",
    resv_name_id: "",
    rateCode1: "",
    agentName1: "",
    amount1: "",
    dataCheck: {},
    guest_number: "",
    phone: "",
    email: "",
    roomClass: "",
    roomCategoryLabel: "",
    upgradeAmount: "",
    numero_documento: "",
    numero_acompanantes: "",
    first_acom_1: "",
    last_acom_1: "",
    t_doc_1: "",
    n_doc_1: "",
    first_acom_2: "",
    last_acom_2: "",
    t_doc_2: "",
    n_doc_2: "",
    loading: false,
    redirectToFollowStep: false,
    redirectToHome: false,
    error: "",
    showalert: false,
    showAlertBar: false,
    typealerta: "error",
    // formData: new FormData(),
  });

  const {
    titularPic,
    hotel,
    base64,
    guestPic,
    first,
    last,
    birth_date,
    gender,
    nationality,
    id_place,
    id_type,
    passport,
    id_date,
    tax1_no,
    name_id,
    resv_name_id,
    rateCode1,
    agentName1,
    amount1,
    dataCheck,
    guest_number,
    phone,
    email,
    roomClass,
    roomCategoryLabel,
    upgradeAmount,
    numero_documento,
    numero_acompanantes,
    first_acom_1,
    last_acom_1,
    t_doc_1,
    n_doc_1,
    first_acom_2,
    last_acom_2,
    t_doc_2,
    n_doc_2,
    redirectToFollowStep,
    redirectToHome,
    error,
    showalert,
    showAlertBar,
    typealerta,
    loading,
    formData,
  } = values;

  //GET DATA USER FOR EDIT
  useEffect(() => {
    // Call Api...
    // console.log(dataPack);
    init(dataPack);
    // Load Nationalities
    getDataNationalities();
    //Init Declaration
    handleShow2();
  }, []);

  // useEffect(() => {
  //   console.log("answerA", answerA);
  //   console.log("answerB", answerB);
  //   console.log("answerC", answerC);
  // }, [yes, no, sicks, accept]);

  // useEffect(() => {
  //   console.log(sicks);
  // }, [sicks]);

  const AlertShow = () => showalert && SnackbarsAlert({ error }, typealerta);
  const AlertBarShow = () => showAlertBar && AlertBar(typealerta);

  const init = (incomingData) => {
    const data = {
      encrypted: incomingData,
    };

    getDataCheckIn(data).then((response) => {
      console.log(response);

      if (response.err) {
        return setValues({
          ...values,
          error: response.err.error,
          typealerta: "error",
          showalert: true,
        });
      }

      const content = response.resp.content[0];
      const reserva = response.resp.reserva;

      setValues({
        ...values,
        first: content.NOMBRE,
        last: content.APELLIDO,
        guest_number: content.GUEST_NUMBER,
        phone: content.TELEFONO,
        email: content.EMAIL,
        rateCode1: content.RATE_CODE,
        amount1: content.SHARE_AMOUNT,
        roomClass: content.ROOM_CLASS,
        roomCategoryLabel: content.ROOM_CATEGORY_LABEL,
        hotel: reserva.hotel,
        resv_name_id: reserva.resv_name_id,
        agentName1: content.TRAVEL_AGENT_NAME,
        name_id: content.GUEST_NAME_ID,
      });
      changeRoomClass(content.ROOM_CLASS);
      changeRoomCategoryLabel(content.ROOM_CATEGORY_LABEL);
      changeRommTypeMap(content.ROOM_CATEGORY_LABEL);
      changeResvNameId(reserva.resv_name_id);
      changeRateCode(content.RATE_CODE);
      changeNameHotel(reserva.hotel);
      changeAgentName(content.TRAVEL_AGENT_NAME);
      changeAmount(content.SHARE_AMOUNT);
      changeDayArrival(content.CHECK_IN);
      changeRoomTypeToVerify(content.ROOM_CATEGORY_LABEL);

      //INFO HOST
      changeToHostAddress(content.DIRECCION);
      changeToHostCity(content.CIUDAD);
      changeToHostPhone(content.TELEFONO);
      changeToEmailHost(content.EMAIL);
      changeToHostNumberGuest(content.GUEST_NUMBER);
      changeToCountryLong(content.PAIS);
      changeToCheckIn(content.CHECK_IN);
      changeToCheckOut(content.CHECK_OUT);
      changeToRoomAmountFinal(content.SHARE_AMOUNT);
      //Room CategoryLabel
      changeRoomCategoryLabel(content.ROOM_CATEGORY_LABEL);


      // INFO TO OFFER UPGRADE
      const numeroDia = parseInt(new Date(content.CHECK_IN).getDay());
      // console.log(numeroDia);
      const info = {
        resvNameId: reserva.resv_name_id,
        hotel: reserva.hotel,
        rate_code: content.RATE_CODE,
        agent_name: content.TRAVEL_AGENT_NAME,
        amount: content.SHARE_AMOUNT,
        dayarrival: 1,
      };

      getDataToUpgradeModal(info).then((response) => {
        console.log(response);
        const upgradeData = response.resp[0];
        console.log("OFFER", upgradeData);
        if (upgradeData) {
          setHasUpgrade(true);
          setUpgradeValue(upgradeData.AMOUNT_1);
          const upgCatLab = splittingRoomTypes(upgradeData.ROOM_TYPES);
          // console.log("string divi ", upgCatLab);
          
          setUpgradeCategoryLabel(upgCatLab);
          //Actualizando el CategoryLabel
          
          localStorage.setItem("updateRoomCategoryLabel",upgCatLab);
          // changeRoomCategoryLabel(upgCatLab);
          //CURRENCY_CODE: "CLP"or"USD"
          // changeToCurrencyCode(upgradeData.CURRENCY_CODE);
          localStorage.setItem("c-code",upgradeData.CURRENCY_CODE)
          console.log("get room", upgradeData);
        }
      });
    });
  };

  const splittingRoomTypes = (str) => {
    const arrayResult = str.split(",");
    // if (arrayResult.length > 1) {
    //   return arrayResult[1];
    // }
    return arrayResult[0];
  };

  const getDataNationalities = () => {
    getAllNationalities().then((response) => {
      const data = response.resp;
      setListNations(data);
      console.log(response);
      return data;
    });
  };

  const getDataToUpgradeModal = (data) => {
    return getRoomRates(data).then((response) => {
      return response;
    });
  };

  const haveUpgradeOption = (info) => {
    if (info == "HNDC" || "STPR") {
      setShowUpgrade(false);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    // const info = {
    //   resvNameId: resv_name_id,
    //   hotel: hotel,
    //   rate_code: rateCode1,
    //   agent_name: agentName1,
    //   amount: amount1,
    //   dayarrival: 1,
    //   // dayarrival: dayArrival,
    // };

    // getDataToUpgradeModal(info);
    setShow(true);
  };

  const handleShow2 = () => {
    setShow2(true);
  };

  const handleClose2 = () => {
    if (answerA === false && answerB[0] === "NINGUNO" && answerC === true) {
      setShow2(false);
    } else {
      setValues({
        ...values,
        typealerta: "warning",
        showAlertBar: true,
        redirectToHome: true,
      });

      setTimeout(() => {
        console.log("redireccionar");
        history.push("/step6");
      }, 2000);
    }
  };

  // event.target.files[0];
  const handleChange = (name) => (event) => {
    // const value = name === "photo" ? event.target.files[0] : event.target.value;
    // setValues({ ...values, [name]: value });

    // let value;
    if (name === "titularPic") {
      const file = event.target.files[0];
      // encode the file using the FileReader API
      const reader = new FileReader();
      reader.onloadend = () => {
        // use a regex to remove data url part
        const base64String = reader.result
          .replace("data:", "")
          .replace(/^.+,/, "");

        // log to console
        // logs wL2dvYWwgbW9yZ...
        const prefB64 = "data:image/png;base64,";
        // console.log(base64String);

        setValues({
          ...values,
          error: "La imagen ha sido subida correctamente.",
          typealerta: "success",
          showalert: true,
          [name]: `${prefB64}${base64String}`,
        });
      };

      reader.readAsDataURL(file);
    } else {
      const value = event.target.value;
      console.log(name);

      setValues({ ...values, [name]: value });
    }
  };

  const showLoading = () =>
    loading && (
      <div className="alert alert-success">
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToFollowStep) {
      if (!error) {
        return <Redirect to="/step2" />;
      }
    }
  };

  const updateDataForUpgrade = () => {
    changeToType_save("upgrade");
    changeAmount(upgradeValue);

    //Actualizando el CategoryLabel
    // const upgCatLab = splittingRoomTypes(upgradeCategoryLabel);
    // console.log("string divi ", upgCatLab);

    changeRommTypeMap(upgradeCategoryLabel);
    changeToRoomAmountFinal(upgradeValue);
  };

  // Continue with Upgrade
  const clickWithUpgrade = () => {
    const updateRoomCategory = localStorage.getItem("updateRoomCategoryLabel");
    changeRoomCategoryLabel(updateRoomCategory);
    updateDataForUpgrade();
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      error: "",
      redirectToFollowStep: true,
      loading: true,
    });

    // Validate Nationality Field
    if (nationality.length === 0) {
      return setValues({
        ...values,
        error: "Por indique su nacionalidad.",
        typealerta: "error",
        showalert: true,
      });
    }

    // Validate TitulaPic Required
    if (titularPic.length === 0) {
      return setValues({
        ...values,
        error: "Por favor suba la foto de su documento.",
        typealerta: "error",
        showalert: true,
      });
    }

    // Validate Document type
    let rut = "";
    let pasaporte = "";
    id_type === "ID"
      ? (rut = format(numero_documento))
      : (pasaporte = numero_documento);

    if (validate(rut) === false) {
      return setValues({
        ...values,
        error: "Por favor ingrese un número de documento válido",
        typealerta: "error",
        showalert: true,
      });
    }

    let guestArray = [];
    if (guest_number === 2) {
      let passport1;
      let rut1;

      t_doc_1 === "ID" ? (rut1 = format(n_doc_1)) : (passport1 = n_doc_1);
      if (validate(rut1) === false) {
        return setValues({
          ...values,
          error: "Please insert a valid RUT",
          typealerta: "error",
          showalert: true,
        });
      }
      guestArray = [
        {
          first: first_acom_1,
          last: last_acom_1,
          id_type: t_doc_1,
          // birth_date: "1991-12-22",
          birth_date: "",
          gender: "M",
          nationality: "",
          passport: passport1,
          tax1_no: rut1,
          id_place: "",
          guestPic: "",
        },
      ];
    }

    if (guest_number === 3) {
      guestArray = [
        {
          first: first_acom_1,
          last: last_acom_1,
          birth_date: "",
          gender: "",
          nationality: "",
          passport: "",
          tax1_no: "",
          id_place: "",
          guestPic: "",
        },
        {
          first: first_acom_2,
          last: last_acom_2,
          birth_date: "",
          gender: "",
          nationality: "",
          passport: "",
          tax1_no: "",
          id_place: "",
          guestPic: "",
        },
      ];
    }

    // SAVE HOST INFO...
    changeToFirstHost(first);
    changeToLastHost(last);
    changeToHostCountry(nationality);
    changeToDocNumberHost(format(numero_documento));
    changeToTypeDocHost(t_doc_1);

    const data = {
      titularPic: titularPic,
      hotel: hotel,
      base64: base64,
      dataCheck: {
        // all titular array: ""
        first: first,
        last: last,
        birth_date: birth_date,
        gender: gender,
        nationality: nationality,
        id_place: id_place,
        id_type: id_type,
        passport: pasaporte,
        id_date: id_date,
        tax1_no: rut,
        name_id: name_id,
        resv_name_id: resv_name_id,
        guest: guestArray,
      },
    };
    console.log(data);

    // Save Check, send To API...
    postSaveCheckIn(data)
      .then((response) => {
        console.log(response);
        setValues({
          ...values,
          error: "Update OK",
          typealerta: "success",
          showalert: true,
        });
        if (hasUpgrade) {
          setValues({
            ...values,
            error: "",
            typealerta: "",
            showalert: false,
          });
          handleShow();
        } else {
          setValues({
            ...values,
            error: "",
            typealerta: "",
            showalert: false,
          });
          history.push("/step2/");
        }
        return response;
      })
      .catch((e) => console.log(e));

      // Testing without savePostCheckin
    // if (hasUpgrade) {
    //   setValues({
    //     ...values,
    //     error: "",
    //     typealerta: "",
    //     showalert: false,
    //   });
    //   handleShow();
    // } else {
    //   setValues({
    //     ...values,
    //     error: "",
    //     typealerta: "",
    //     showalert: false,
    //   });
    //   history.push("/step2/");
    // }
  };

  // DECLARATION FUNCTIONS
  const clickAnswer2 = (name) => (event) => {
    // console.log(event.target.value);
    const value = event.target.value;
    if (name == "no") {
      setNo(true);
      setYes(false);
      changeAnswerA(false);
    }
    if (name == "yes") {
      setYes(true);
      setNo(false);
      changeAnswerA(true);
    }
  };

  const handleSicks = (event) => {
    const { value } = event.target;

    setSicks(
      sicks.includes(value)
        ? sicks.filter((c) => c !== value)
        : [...sicks, value]
    );

    changeAnswerB(
      sicks.includes(value)
        ? sicks.filter((c) => c !== value)
        : [...sicks, value]
    );
    // changeAnswerB(sicks);
  };

  const handleAccept = () => {
    setAccept(!accept);
    changeAnswerC(!accept);
    // console.log(accept);
  };

  const useStyles = makeStyles(styles);
  const classes = useStyles();

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
          <div className="card-body">
            <p>
              Por favor saque una foto a su documento de identidad o pasaporte o
              selecione una imagen desde su computador.
            </p>
            <label className="btn btn-secondary btn-lg active">
              <FontAwesomeIcon icon={faCameraRetro} />
              &nbsp; &nbsp;Tomar foto o subir imagen
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handleChange("titularPic")}
              ></input>
            </label>

            <div className="container">
              <div className="form-wrapper">
                <form className="form" action="" onSubmit={clickSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="Nombre">
                          Nombre
                        </label>
                        <input
                          type="text"
                          className="form-control form-input NombreInput"
                          placeholder={first}
                          onChange={handleChange("first")}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="Apellido">
                          Apellido
                        </label>
                        <input
                          type="text"
                          className="form-control form-input ApellidoseInput"
                          placeholder={last}
                          onChange={handleChange("last")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="Nacionalidad">
                          Nacionalidad
                        </label>
                        <select
                          className="custom-select"
                          id="inputGroupSelect01"
                          defaultValue={"Nacionalidad"}
                          onChange={handleChange("nationality")}
                        >
                          <option value="Nacionalidad">Seleccione</option>
                          {/* Options for map */}
                          {listNations.map((nation, i) => {
                            return (
                              <option key={i} value={nation.ATTRIBUTE_CODE}>
                                {nation.DESCRIPTION}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          className="form-label"
                          htmlFor="Fecha_nacimiento"
                        >
                          Fecha de Nacimiento
                        </label>
                        <input
                          type="date"
                          className="form-control form-input FechaNacimientoInput"
                          placeholder="DD/MM/AAAA"
                          onChange={handleChange("birth_date")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="Tipo_documento">
                          Tipo de Documento
                        </label>
                        <select
                          className="custom-select"
                          id="inputGroupSelect01"
                          defaultValue={"Seleccione"}
                          onChange={handleChange("id_type")}
                        >
                          {/* Options for map */}
                          <option value="Seleccione">Seleccione</option>
                          <option value="ID">RUT</option>

                          <option value="PASSPORT">PASAPORTE</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          className="form-label"
                          htmlFor="Numero_documento"
                        >
                          Numero de Documento
                        </label>
                        <input
                          type="text"
                          className="form-control form-input numeroDocumentoInput"
                          // placeholder={numero_documento}
                          value={
                            id_type === "ID"
                              ? format(numero_documento)
                              : numero_documento
                          }
                          onChange={handleChange("numero_documento")}
                        />
                      </div>
                    </div>
                  </div>
                  {guest_number === 2 && (
                    <>
                      {/* <Divider variant="middle" /> */}
                      {/* <Divider variant="middle" /> */}
                      <li>
                        <Typography
                          className={classes.dividerInset}
                          color="textSecondary"
                          display="block"
                          variant="caption"
                        >
                          Información del acompañante
                        </Typography>
                      </li>
                      <Divider variant="middle" />
                      {/* <br /> */}
                      <br />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="Numero_acompanantes"
                            >
                              Nombre del Acompañante
                            </label>
                            <input
                              type="text"
                              className="form-control form-input numeroDocumentoInput"
                              placeholder=""
                              onChange={handleChange("first_acom_1")}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="Nombres del acompañante"
                            >
                              Apellido del acompañante
                            </label>
                            <input
                              type="text"
                              className="form-control form-input numeroDocumentoInput"
                              placeholder=""
                              onChange={handleChange("last_acom_1")}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="Tipo_documento"
                            >
                              Tipo de Documento
                            </label>
                            <select
                              className="custom-select"
                              id="inputGroupSelect01"
                              defaultValue={"Seleccione"}
                              onChange={handleChange("t_doc_1")}
                            >
                              {/* Options for map */}
                              <option value="Seleccione">Seleccione</option>
                              <option value="ID">RUT</option>

                              <option value="PASSPORT">PASAPORTE</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="Numero_documento"
                            >
                              Numero de Documento
                            </label>
                            <input
                              type="text"
                              className="form-control form-input numeroDocumentoInput"
                              placeholder={n_doc_1}
                              onChange={handleChange("n_doc_1")}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {guest_number === 3 && (
                    <>
                      {/* <Divider variant="middle" /> */}
                      {/* <Divider variant="middle" /> */}
                      <li>
                        <Typography
                          className={classes.dividerInset}
                          color="textSecondary"
                          display="block"
                          variant="caption"
                        >
                          Información del acompañante 1
                        </Typography>
                      </li>
                      <Divider variant="middle" />
                      {/* <br /> */}
                      <br />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="Numero_acompanantes"
                            >
                              Nombre del Acompañante
                            </label>
                            <input
                              type="text"
                              className="form-control form-input numeroDocumentoInput"
                              placeholder=""
                              onChange={handleChange("first_acom_1")}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="Nombres del acompañante"
                            >
                              Apellido del acompañante
                            </label>
                            <input
                              type="text"
                              className="form-control form-input numeroDocumentoInput"
                              placeholder=""
                              onChange={handleChange("last_acom_1")}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="Tipo_documento"
                            >
                              Tipo de Documento
                            </label>
                            <select
                              className="custom-select"
                              id="inputGroupSelect01"
                              defaultValue={"Seleccione"}
                              onChange={handleChange("t_doc_1")}
                            >
                              {/* Options for map */}
                              <option value="Seleccione">Seleccione</option>
                              <option value="ID">RUT</option>

                              <option value="PASSPORT">PASAPORTE</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="Numero_documento"
                            >
                              Numero de Documento
                            </label>
                            <input
                              type="text"
                              className="form-control form-input numeroDocumentoInput"
                              placeholder={n_doc_1}
                              onChange={handleChange("n_doc_1")}
                            />
                          </div>
                        </div>
                      </div>
                      {/* <Divider variant="middle" /> */}
                      {/* <Divider variant="middle" /> */}
                      <li>
                        <Typography
                          className={classes.dividerInset}
                          color="textSecondary"
                          display="block"
                          variant="caption"
                        >
                          Información del acompañante 2
                        </Typography>
                      </li>
                      <Divider variant="middle" />
                      {/* <br /> */}
                      <br />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="Numero_acompanantes"
                            >
                              Nombre del Acompañante
                            </label>
                            <input
                              type="text"
                              className="form-control form-input numeroDocumentoInput"
                              placeholder=""
                              onChange={handleChange("first_acom_2")}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="Nombres del acompañante"
                            >
                              Apellido del acompañante
                            </label>
                            <input
                              type="text"
                              className="form-control form-input numeroDocumentoInput"
                              placeholder=""
                              onChange={handleChange("last_acom_2")}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="Tipo_documento"
                            >
                              Tipo de Documento
                            </label>
                            <select
                              className="custom-select"
                              id="inputGroupSelect01"
                              defaultValue={"Seleccione"}
                              onChange={handleChange("t_doc_2")}
                            >
                              {/* Options for map */}
                              <option value="Seleccione">Seleccione</option>
                              <option value="ID">RUT</option>

                              <option value="PASSPORT">PASAPORTE</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="Numero_documento"
                            >
                              Numero de Documento
                            </label>
                            <input
                              type="text"
                              className="form-control form-input numeroDocumentoInput"
                              placeholder={n_doc_2}
                              onChange={handleChange("n_doc_2")}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={(event) => {
                      // handleShow();
                      // if (hasUpgrade) {
                      //   handleShow();
                      // }
                      clickSubmit(event);
                    }}
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                    &nbsp;Siguiente
                  </button>

                  <div className="col-md-3"></div>
                </form>

                {/* Modal Upgrade 1 */}
                <ModalUpgrade
                  show={show}
                  handleClose={handleClose}
                  error={error}
                  showalert={showalert}
                  typealerta={typealerta}
                  roomClass={roomClass}
                  clickWithUpgrade={clickWithUpgrade}
                  upgradeValue={upgradeValue}
                />
                {/* Modal Sicks 2 */}
                <ModalSick
                  showAlertBar={showAlertBar}
                  typealerta={typealerta}
                  show2={show2}
                  handleClose2={handleClose2}
                  yes={yes}
                  no={no}
                  clickAnswer2={clickAnswer2}
                  sicks={sicks}
                  handleSicks={handleSicks}
                  handleAccept={handleAccept}
                  accept={accept}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOne;
