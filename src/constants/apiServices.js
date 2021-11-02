import { API_REST, API_SERVICES_NATIONS } from "./index";
// import { readPost } from "../utils/index";

/** SERVICES **/

// GET DATA
export const getDataCheckIn = (data) => {
  // let data = values;
  //   if (NODE_ENV === "production") {
  //     //data = { param: encryptedaes256cbc(values, JWT_SECRET) };
  //   }

  return fetch(`${API_REST}/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: values,
    body: JSON.stringify(data),
  })
    .then((response) => {
      // const result = readPost(response.json());
      let result = response.json();

      //   if (result.status === "ERROR") {
      //     result = {
      //       data: { status: "ERROR", message: "Error! input requiered" },
      //     };
      //     return result;
      //   }
      //   console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err.toString());
      //   let error = { data: { status: "ERROR", message: err.toString() } };
      //   return error.data;
    });
};

// // GET ALL NATIONALITIES

export const getAllNationalities = () => {
  return fetch(`${API_SERVICES_NATIONS}/reservation/nationality`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: values,
    // body: JSON.stringify(data),
  })
    .then((response) => {
      // const result = readPost(response.json());
      let result = response.json();

      // console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err.toString());
    });
};

// RESERVATION SAVE_CHECKIN SERVICES

export const postSaveCheckIn = (data) => {
  return fetch(`${API_SERVICES_NATIONS}/reservation/save_checkin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: values,
    body: JSON.stringify(data),
  })
    .then((response) => {
      // const result = readPost(response.json());
      let result = response.json();

      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err.toString());
    });
};

// GET ROOM - GET RATES

export const getRoomRates = (data) => {
  return fetch(`${API_SERVICES_NATIONS}/room/get_rates`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: values,
    body: JSON.stringify(data),
  })
    .then((response) => {
      // const result = readPost(response.json());
      let result = response.json();

      // console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err.toString());
    });
};

// GET ROOM - FEATURES

export const getRoomFeatures = (data) => {
  return fetch(`${API_SERVICES_NATIONS}/room/get_rooms_feature`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: values,
    body: JSON.stringify(data),
  })
    .then((response) => {
      // const result = readPost(response.json());
      let result = response.json();

      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err.toString());
    });
};

export const verifyRoomAvalaibles = (data) => {
  return fetch(`${API_SERVICES_NATIONS}/room/get_features/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // const result = readPost(response.json());
      let result = response.json();

      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err.toString());
    });
};

export const getPackageData = (data) => {
  return fetch(`${API_SERVICES_NATIONS}/packages/get_packages_price/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // const result = readPost(response.json());
      let result = response.json();

      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err.toString());
    });
};

export const savingRoomSelected = (data) => {
  return fetch(`${API_SERVICES_NATIONS}/room/save_room/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // const result = readPost(response.json());
      let result = response.json();

      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err.toString());
    });
};

export const saveAdditionalPackages = (data) => {
  return fetch(`${API_SERVICES_NATIONS}/room/set_additionals`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // const result = readPost(response.json());
      let result = response.json();

      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err.toString());
    });
};

export const saveReservationAndAddress = (data) => {
  return fetch(`${API_SERVICES_NATIONS}/reservation/set_adress`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // const result = readPost(response.json());
      let result = response.json();

      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err.toString());
    });
};
