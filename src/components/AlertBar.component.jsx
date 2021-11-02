import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

const AlertBar = (type) => {
  //   let mej = { msj };
  //   let erro = mej.msj.error;

  //type = error, warning, info, success
  return (
    <>
      {type == "warning" ? (
        <Alert severity={type}>
          <strong>
            "No puedes continuar con el proceso de Check in On-Line ,
            contactanos al siguiente número. 722209600 o este correo
            electrónico: reservas@hscp.cl"
          </strong>
        </Alert>
      ) : (
        <Alert variant="filled" severity={type}></Alert>
      )}
    </>
  );
};

export default AlertBar;
