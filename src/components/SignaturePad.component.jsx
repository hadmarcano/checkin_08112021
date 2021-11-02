import React from "react";
import SignaturePad from "react-signature-canvas";

const SignCanvasPad = () => {
  return (
    <>
      <SignaturePad
        canvasProps={{
          className: "signatureCanvas",
        }}
      />
    </>
  );
};

export default SignCanvasPad;
