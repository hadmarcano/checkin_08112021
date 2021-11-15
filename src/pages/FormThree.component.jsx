import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import roomSuiteKgImg1 from "../assets/images/JR_KING.png";
import roomSuiteKgImg2 from "../assets/images/BANO-JACUZZI_644X386PX.png";
import roomSuiteKgImg3 from "../assets/images/breakfast.jpg";
import roomSuiteTwImg1 from "../assets/images/TWIN_644X386PX.png";
import roomSuiteTwImg2 from "../assets/images/BANO-JACUZZI_644X386PX.png";
import roomSuiteTwImg3 from "../assets/images/CMN_7889.png";
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
import Underline from "../assets/images/underline.png";
import roomImage from "../assets/images/triple1.png";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
//Modal components
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
//----
import PisoImage from "../assets/images/piso.png";
import TinaImage from "../assets/images/tina.png";
import TerrazaImage from "../assets/images/terraza.png";
import JacuzziImage from "../assets/images/jacuzzi.png";
import BalconImage from "../assets/images/balcon.png";
import { CheckInContext } from "../context/checkInContext";
import {
  getPackageData,
  saveAdditionalPackages,
  savingRoomSelected,
} from "../constants/apiServices";
import {
  faEdit,
  faChevronRight,
  //   faCameraRetro,
  //   faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Restaurant } from "@material-ui/icons";



const FormThree = () => {
  const currency_code = localStorage.getItem("c-code");
  const roomCatType = localStorage.getItem("updateRoomCategoryLabel");
  const {
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
    roomTypeToMap,
    changeRommTypeMap,
    featureSelected,
    changeFeatureSelected,
    roomAmountFinal,
    changeToRoomAmountFinal,
    // currencyCode,
    // changeToCurrencyCode,
  } = useContext(CheckInContext);
  const [initialAmount, setInitialAmount] = useState(roomAmountFinal);
  // const [initialAmount, setInitialAmount] = useState(196);

  const [ser1, setSer1] = useState(0);
  const [ser2, setSer2] = useState(0);
  const [ser3, setSer3] = useState(0);
  const [ser4, setSer4] = useState(0);

  const [totalAmount, setTotalAmount] = useState(initialAmount);
  const [packageData, setPackageData] = useState([{
    }]);
  // const [totalAmount, setTotalAmount] = useState(roomAmountFinal);
  const [servicesAmount, setServicesAmount] = useState(0);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    console.log(room_CategoryLabel);
    const reqPacks = {
      hotel: nameHotel,
      currency: currency_code,
    };
    // const reqPacks = {
    //   hotel: "HTSCR",
    //   currency: currency_code,
    // };

    init(reqPacks);
  }, []);

  useEffect(() => {
    console.log("este es checked", checked);
    calculatingServiceAmount(checked);
  }, [checked]);

  

  const init = (data) => {
    getPackageData(data).then((response) => {
      const packs = response.resp;
      console.log(packs);
      // Filtering packs by room category label
      const filterPacks = filterPackByTypeRoom(roomCatType,currency_code,packs);
      setPackageData(filterPacks);
    });
  };

  const savingPacks = () => {
    const data = {
      resv_name_id: resvNameId,
      hotel: nameHotel,
      additionals: checked,
    };
    console.log("add pack",data)
    return saveAdditionalPackages(data).then((response) => {
      console.log(response);
      localStorage.removeItem("c-code");
    });
  };

  const handleCheck = (data) => (event) => {
    const { value } = event.target;
    //
    console.log(value);
    const addPackage = {
      product: data.PRODUCT,
      quantity: value,
      price: data.PRICE,
    };
    let found = false;
    for (let i = 0; i < checked.length; i++) {
      if (checked[i].product == data.PRODUCT) {
        found = true;
        break;
      }
    }
    console.log("este es found", found); // ¿existe el servicio en [check]?

    if(found){
      // console.log("pack existe");
      if (value === '0'){
        // console.log(`pack cantidad ${value}`, data.PRODUCT);
        // console.log(checked.filter((pack) => pack.product !== data.PRODUCT));
        setChecked(
          checked.filter((pack) => pack.product !== data.PRODUCT)
          );
        }else{
          // console.log(`pack cantidad ${value}`, data.PRODUCT);
          const updatedCheck = checked.filter((pack) => pack.product !== data.PRODUCT);
          updatedCheck.push(addPackage);
          setChecked(updatedCheck)
        }
      }else{
        
        // console.log("pack no existe");
        setChecked([...checked, addPackage]);
    }

  };

  const calculatingServiceAmount = (data) => {
    // const data = data.filter((pack) => pack.quantity == 0);
    if (data.length === 0) {
      const total = 0;
      const servicesTotal = 0;
      setServicesAmount(servicesTotal);
      setTotalAmount(parseInt(initialAmount) + servicesTotal);
    } else {
      const total = data.map((element) => {
        const a = parseInt(element.quantity);
        const b = element.price;
        return a * b;
      });
      console.log("total Servicios", total);
      let servicesTotal = total.reduce((acc, curr) => acc + curr);
      console.log("total servicios", servicesTotal);
      setServicesAmount(servicesTotal);
      setTotalAmount(parseInt(initialAmount) + servicesTotal);
    }
  };

  const filterPackByTypeRoom = (typ,currType,arr)=>{
    let data = arr;
    if(currType == "USD"){

        if(typ !== "STWS"){
            data = arr.filter((item)=> item.PRODUCT !== "HOTTUBUS" );
        }
        console.log(data);
        return data;
    }else{
        if(typ !== "STWS"){
            data = arr.filter((item)=> item.PRODUCT !=='HOTTUB' );
        }
        console.log(data);
        return data;
    }
}

  let sectorName = null;
  switch (featureSelected) {
    // switch ("STWS") {
    case "MUSE":
      sectorName = "Edificio Museo";
      break;
    case "VINSI":
      sectorName = "Sector Interior";
      break;
    case "ERRAZ":
      sectorName = "Sector Errazuriz";
      break;
    case "VINV":
      sectorName = "Interior Vitral";
      break;
    case "CASI":
      sectorName = "Casino";
      break;
    case "LSQU":
      sectorName = "Plaza de Armas";
      break;
    default:
      sectorName = "";
  }
  return (
    <div className="d-flex align-items-center flex-column justify-content-center h-100 bg-dark backgroundForm text-white header">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="card text-center topSpace">
          <div className="card-header">
            <FontAwesomeIcon icon={faEdit} />
            &nbsp;Bienvenido al Check In en línea
          </div>
          <div className="card-body ">
            <h3 className="text-center orangeFontColor">
              Tu habitación actual
            </h3>

            <h4 className="text-center greyFontColor">{`Habitacion ${room_CategoryLabel}`}</h4>
            <p className="text-center subTitleImage">
              <img src={Underline} alt="underlined" />
            </p>

            <div className="container">
              <div className="row">
                <div className="col-md-12 align-items-center">
                  <div className="container py-2">
                    <div className="row align-items-center">
                      <div className="slider align-items-center">
                        {room_CategoryLabel === "King" && (
                          <Carousel>
                            {/* Data room for map */}
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteKgImg1}
                                alt="First slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteKgImg2}
                                alt="Second slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteKgImg3}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                          </Carousel>
                        )}
                        {room_CategoryLabel === "TWIN" && (
                          <Carousel>
                            {/* Data room for map */}
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteTwImg1}
                                alt="First slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteTwImg2}
                                alt="Second slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteTwImg3}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                          </Carousel>
                        )}
                        {room_CategoryLabel === "Jr Suite King" && (
                          <Carousel>
                            {/* Data room for map */}
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteKgImg1}
                                alt="First slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteKgImg2}
                                alt="Second slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteKgImg2}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                          </Carousel>
                        )}
                        {room_CategoryLabel === "Jr Suite Twin" && (
                          <Carousel>
                            {/* Data room for map */}
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteTwImg1}
                                alt="First slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteTwImg2}
                                alt="Second slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteTwImg3}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                          </Carousel>
                        )}
                        {room_CategoryLabel === "Suite King" && (
                          <Carousel>
                            {/* Data room for map */}
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
                        )}
                        {room_CategoryLabel === "Suite Twin" && (
                          <Carousel>
                            {/* Data room for map */}
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteTwImg1}
                                alt="First slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteTwImg2}
                                alt="Second slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w100 img-fluid"
                                src={roomSuiteTwImg3}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                          </Carousel>
                        )}
                        {room_CategoryLabel === "Suite Presidencial" && (
                          <Carousel>
                            {/* Data room for map */}
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
                        )}
                        {room_CategoryLabel === "Suite Sup. King" && (
                          <Carousel>
                            {/* Data room for map */}
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
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Descriptions */}
              <div className="col-md-12">
                <h2 className="modal-title text-center greyFontColor mt-3">
                  Room Services
                </h2>
                <p className="text-center subTitleImage">
                  <img src={Underline} alt="underlined" />
                </p>
                <div className="container">
                  <div className="row">
                    <div className="col-6 col-sm-6 col-md-2">
                      <div className="col-md-2 mt-3 sinPadding">
                        <div className="col-md-12 text-center">
                          <img
                            src={iconPassengers}
                            className="romServicesVertical maxRoomsimg"
                            alt="icon-passengers"
                          />
                        </div>
                        <div className="col-md-12 d-grid p-2 text-center">
                          <p>4Pers.</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-2">
                      <div className="col-md-2 mt-3 sinPadding">
                        <div className="col-md-12 text-center">
                          <img
                            src={PisoImage}
                            className="romServicesVertical maxRoomsimg"
                            alt="flat-icon"
                          />
                        </div>
                        <div className="col-md-12 d-grid p-2 align-middle text-center">
                          <p>49mt2</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-2">
                      <div className="col-md-2 mt-3 sinPadding">
                        <div className="col-md-12 text-center">
                          <img
                            src={JacuzziImage}
                            className="romServicesVertical maxRoomsimg"
                            alt="jacuzzi-icon"
                          />
                        </div>
                        <div className="col-md-12 d-grid p-2 align-middle text-center">
                          <p>Jacuzzi</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-2">
                      <div className="col-md-2 mt-3 sinPadding">
                        <div className="col-md-12 text-center">
                          <img
                            src={BalconImage}
                            className="romServicesVertical maxRoomsimg"
                            alt="jacuzzi-icon"
                          />
                        </div>
                        <div className="col-md-12 d-grid p-2 align-middle text-center">
                          <p>Balcón</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-2">
                      <div className="col-md-2 mt-3 sinPadding">
                        <div className="col-md-12 text-center">
                          <img
                            src={TinaImage}
                            className="romServicesVertical maxRoomsimg"
                            alt="terraza-icon"
                          />
                        </div>
                        <div className="col-md-12 d-grid p-2 align-middle text-center">
                          <p>Tina</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-2">
                      <div className="col-md-2 mt-3 sinPadding">
                        <div className="col-md-12 text-center">
                          <img
                            src={TerrazaImage}
                            className="romServicesVertical maxRoomsimg"
                            alt="terraza-icon"
                          />
                        </div>
                        <div className="col-md-12 d-grid p-2 align-middle text-center">
                          <p>Terraza</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p className="text-justify">
                    Cama King, área de trabajo, aire acondicionado y calefacción
                    individual, caja de seguridad, frigobar, Wi-Fi y TV cable,
                    Jacuzzi. Ofrecemos servicio de Restaurantes: Los Varietales,
                    especializado en gastronomía chilena destacando productos de
                    la zona.
                  </p>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h4 className="modal-title text-center greyFontColor">
                    Habitación Seleccionada:{" "}
                    <strong>{`Habitacion ${room_selected}`}</strong>
                  </h4>
                  <h4 className="modal-title text-center greyFontColor">
                    Zona: <strong>{`${sectorName}`}</strong>
                  </h4>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="container  mt-5">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h4 className="modal-title text-center greyFontColor">
                    Servicios Adicionales
                  </h4>
                  <p className="text-center subTitleImage">
                    <img src={Underline} alt="underlined" />
                  </p>
                  <div className="container">
                    <div className="form-wrapper">
                      <form action="" className="form">
                        {/* INNER FORM */}

                        {/* PACKAGES */}
                        {packageData.map((pack, i) => {
                          return (
                            <>
                              <hr />
                              <div className="row">
                                <div className="col-md-7 col-9 text-left align-self-center">
                                  <div className="form-check" key={i}>
                                    {/* <input
                                      key={i}
                                      className="form-check-input"
                                      type="checkbox"
                                      id="inlineCheckbox1"
                                      value={pack.PRODUCT}
                                      checked={checked.includes(pack.PRODUCT)}
                                      onChange={(e) => handleCheck(e)}
                                      name={"pack-option"}
                                    /> */}
                                    <p className="servicesList">
                                      {pack.NOMBRE_WEB}
                                    </p>
                                  </div>
                                </div>

                                <div className="col-md-2 col-3 text-center align-self-center">
                                  <div className="input-group form-input quantityForm">
                                    <select
                                      onChange={handleCheck(pack)}
                                      className="custom-select quantitySelect"
                                      id="inputGroupSelect01"
                                      required=""
                                      defaultValue={0}
                                    >
                                      <option value={0}>0</option>
                                      <option value={1}>1</option>
                                      <option value={2}>2</option>
                                      <option value={3}>3</option>
                                      <option value={4}>4</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="col-md-3 col-12 align-self-center">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#desayunoCampoModal"
                                  >
                                    {/* Desplegar Modal */}
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    &nbsp;Detalles
                                  </button>
                                </div>
                              </div>
                            </>
                          );
                        })}
                        {/* PACKAGES */}

                        <hr />
                        <div className="row">
                          <div className="col-md-2"></div>
                          <div className="col-md-5 blackFontColor">
                            <h6>VALOR TOTAL UPGRADE:</h6>
                          </div>
                          <div className="col-md-5 blackFontColor">
                            <h5>
                              <strong>$ {servicesAmount}</strong>
                              <strong>$ {currency_code}</strong>
                            </h5>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-2"></div>
                          <div className="col-md-5 blackFontColor">
                            <h6>VALOR TOTAL SERVICIOS:</h6>
                          </div>
                          <div className="col-md-5 blackFontColor">
                            <h5>
                              <strong>$ {totalAmount}</strong>
                              <strong>$ {currency_code}</strong>
                            </h5>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12 text-center mt-5">
                            <Link to="/step4">
                              <button
                                type="button"
                                className="btn btn-update mt-3"
                                onClick={() => {
                                  savingPacks();
                                }}
                              >
                                <FontAwesomeIcon icon={faChevronRight} />{" "}
                                Siguiente
                              </button>
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormThree;
