import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

const Snackbars = (msj, type) => {
  let mej = { msj };
  let erro = mej.msj.error;

  //type = error, warning, info, success
  return (
    <>
      {type == "warning" ? (
        <Alert severity={type}>
          <AlertTitle>{erro}</AlertTitle>—.{" "}
          <strong>
            ¡Su número de habitacion será asignada al momento de su llegada!
          </strong>
        </Alert>
      ) : (
        <Alert variant="filled" severity={type}>
          {erro}
        </Alert>
      )}
    </>
  );
};

export default Snackbars;
