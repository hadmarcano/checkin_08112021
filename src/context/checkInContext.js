import React, { createContext, useState, useEffect } from "react";

export const CheckInContext = createContext();

const CheckInContextProvider = ({ children }) => {
  // Huesped Info
  const [firstHostName, setFirstHostName] = useState("");
  const [lastHostName, setLastHostName] = useState("");
  const [hostAddress, setHostAddress] = useState("");
  const [hostCountry, setHostCountry] = useState("");
  const [hostCity, setHostCity] = useState("");
  const [phoneHost, setPhoneHost] = useState("");
  const [emailHost, setEmailHost] = useState("");
  const [docNumberHost, setDocNumberHost] = useState("");
  const [hostNumberGuest, setHostNumberGuest] = useState("");
  const [typeDocHost, setTypeDocHost] = useState("");
  const [hostCountryLong, setHostCountryLong] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomAmountFinal, setRoomAmountFinal] = useState("");
  const [currencyCode, setCurrencyCode] = useState("");
  //Declaracion jurada
  const [questionA, setQuestionA] = useState(
    "EN LOS ULTIMOS 15 DÍAS ¿HA ESTADO EN CONTACTO CON ALGUIEN DIAGNOSTICADO COVID POSITIVO?(*)"
  );
  const [questionB, setQuestionB] = useState(
    "¿USTED HA TENIDO ALGUNO DE ESTOS SÍNTOMAS?(*)"
  );
  const [questionC, setQuestionC] = useState(
    "DECLARACIÓN JURADA: LOS ANTECEDENTES QUE EXPONGO SON VERDADEROS, EN CASO DE FALSEDAD DE LA DECLARACIÓN, PODRA SER SANCIONADO PENALMENTE.(*)"
  );
  const [answerA, setAnswerA] = useState(false);
  const [answerB, setAnswerB] = useState([]);
  const [answerC, setAnswerC] = useState(false);

  // DECLARATION EFFECTS
  useEffect(() => {}, [questionA, questionB, questionC]);
  useEffect(() => {}, [answerA]);
  useEffect(() => {}, [answerB]);
  useEffect(() => {}, [answerC]);

  // HOST EFFECTS
  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [firstHostName]);
  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [lastHostName]);
  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [hostAddress]);
  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [hostCountry]);
  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [hostCity]);
  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [phoneHost]);
  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [emailHost]);
  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [docNumberHost]);
  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [hostNumberGuest]);
  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [typeDocHost]);
  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [hostCountryLong]);
  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [checkIn]);
  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [checkOut]);
  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [roomAmountFinal]);
  // useEffect(() => {
  //   // console.log(currencyCode);
  // }, [currencyCode]);

  const changeToCurrencyCode = (newState) => {
    setCurrencyCode(newState);
  };

  const changeToRoomAmountFinal = (newState) => {
    setRoomAmountFinal(newState);
  };
  // HOST CHANGES...
  const changeToFirstHost = (newState) => {
    setFirstHostName(newState);
  };
  const changeToLastHost = (newState) => {
    setLastHostName(newState);
  };
  const changeToHostAddress = (newState) => {
    setHostAddress(newState);
  };
  const changeToHostCountry = (newState) => {
    setHostCountry(newState);
  };
  const changeToHostCity = (newState) => {
    setHostCity(newState);
  };
  const changeToHostPhone = (newState) => {
    setPhoneHost(newState);
  };
  const changeToEmailHost = (newState) => {
    setEmailHost(newState);
  };
  const changeToDocNumberHost = (newState) => {
    setDocNumberHost(newState);
  };
  const changeToHostNumberGuest = (newState) => {
    setHostNumberGuest(newState);
  };
  const changeToTypeDocHost = (newState) => {
    setTypeDocHost(newState);
  };
  const changeToCountryLong = (newState) => {
    setHostCountryLong(newState);
  };
  const changeToCheckIn = (newState) => {
    setCheckIn(newState);
  };
  const changeToCheckOut = (newState) => {
    setCheckOut(newState);
  };

  // variable of status
  const [resvNameId, setResNameId] = useState("");
  const [rateCode, setRateCode] = useState("");
  const [nameHotel, setNameHotel] = useState("");
  const [agentName, setAgentName] = useState("");
  const [amount, setAmount] = useState("");
  const [dayArrival, setDayArrival] = useState("");
  const [feature, setFeature] = useState("");
  const [roomTypeToMap, setRoomTypeToMap] = useState("");
  const [room_Class, setRoom_Class] = useState("");
  const [room_CategoryLabel, setRoom_categoryLabel] = useState("");
  const [featureSelected, setfeatureSelected] = useState("");
  const [room_selected, setRoom_selected] = useState("");
  const [roomTypeToVerify, setRoomTypeToVeriy] = useState("");
  const [type_save, SetType_save] = useState("save");

  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [room_Class]);

  // useEffect(() => {
  //   // console.log(room_CategoryLabel);
  // }, [room_CategoryLabel]);

  // useEffect(() => {
  //   // console.log(room_Class);
  // }, [resvNameId]);

  // useEffect(() => {
  //   // console.log(room_CategoryLabel);
  // }, [rateCode]);

  // useEffect(() => {
  //   // console.log("agent,amount,dayArrival");
  // }, [agentName, amount, dayArrival]);

  // useEffect(() => {
  //   // console.log(room_CategoryLabel);
  // }, [rateCode]);
  // useEffect(() => {
  //   // console.log(room_CategoryLabel);
  // }, [roomTypeToVerify]);

  // useEffect(() => {
  //   // console.log(featureSelected);
  // }, [featureSelected]);

  // useEffect(() => {
  //   // console.log(type_save);
  // }, [type_save]);

  const changeToType_save = (newState) => {
    SetType_save(newState);
  };
  const changeRoomTypeToVerify = (newState) => {
    setRoomTypeToVeriy(newState);
  };

  const changeRommTypeMap = (newState) => {
    setRoomTypeToMap(newState);
  };

  const changeRoomSelected = (newState) => {
    setRoom_selected(newState);
  };
  const changeFeatureSelected = (newState) => {
    setfeatureSelected(newState);
  };

  const changeResvNameId = (newState) => {
    setResNameId(newState);
  };

  const changeRateCode = (newState) => {
    setRateCode(newState);
  };

  const changeNameHotel = (newState) => {
    setNameHotel(newState);
  };

  const changeAgentName = (newState) => {
    setAgentName(newState);
  };

  const changeRoomClass = (newState) => {
    setRoom_Class(newState);
  };
  const changeRoomCategoryLabel = (newState) => {
    let typeRoom = null;
    switch (newState) {
      // switch ("STWS") { STWN
      case "STWS":
        typeRoom = "Jr Suite King";
        break;
      // case "JST":
      case "JST":
        typeRoom = "Jr Suite Twin";
        break;
      case "STWN":
        typeRoom = "Jr Suite Twin";
        break;
      case "KGNS":
        typeRoom = "King";
        break;
      case "TWNS":
        typeRoom = "TWIN";
        break;
      case "STNS":
        typeRoom = "Suite King";
        break;
      case "STNT":
        typeRoom = "Suite Twin";
        break;
      case "STPR":
        typeRoom = "Suite Presidencial";
        break;
      case "STSM":
        typeRoom = "Suite Sup. King";
        break;
      default:
        typeRoom = "";
    }

    return setRoom_categoryLabel(typeRoom);
  };
  const changeDayArrival = (newState) => {
    setDayArrival(newState);
  };
  const changeAmount = (newState) => {
    setAmount(newState);
  };
  const changeFeature = (newState) => {
    setFeature(newState);
  };

  // DECLARATION EFFECTS
  const changeAnswerA = (newState) => {
    setAnswerA(newState);
  };
  const changeAnswerB = (newState) => {
    setAnswerB(newState);
  };
  const changeAnswerC = (newState) => {
    setAnswerC(newState);
  };

  return (
    <CheckInContext.Provider
      value={{
        type_save,
        changeToType_save,
        roomTypeToVerify,
        changeRoomTypeToVerify,
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
        currencyCode,
        changeToCurrencyCode,
        // DECLARACION CONTEXT
        answerA,
        answerB,
        answerC,
        changeAnswerA,
        changeAnswerB,
        changeAnswerC,
      }}
    >
      {children}
    </CheckInContext.Provider>
  );
};

export default CheckInContextProvider;
