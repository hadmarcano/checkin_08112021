import React, { useState, useEffect } from "react";
import { Modal, Carousel, Form } from "react-bootstrap";
import Underline from "../assets/images/underline.png";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "../pages/styles";
import AlertBar from "./AlertBar.component";
import {
  faEdit,
  faCameraRetro,
  faChevronRight,
  faTimesCircle,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalSick = (props) => {
  const {
    showAlertBar,
    typealerta,
    show2,
    handleClose2,
    yes,
    no,
    clickAnswer2,
    sicks,
    handleSicks,
    handleAccept,
    accept,
  } = props;

  const AlertBarShow = () => showAlertBar && AlertBar(typealerta);

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Modal show={show2} onHide={handleClose2} size="lg" backdrop="static">
      <Modal.Header></Modal.Header>

      <Modal.Body>
        <h3 className=" text-center orangeFontColor">Declaración Jurada</h3>
        <p className="text-center subTitleImage">
          <img src={Underline} alt="underlined" />
        </p>

        <div className="container">
          {AlertBarShow()}
          <div className="form-wrapper">
            <Form className="form" action="">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <p className="text-center greyFontColor">
                      {
                        "EN LOS ULTIMOS 15 DÍAS ¿HA ESTADO EN CONTACTO CON ALGUIEN DIAGNOSTICADO COVID POSITIVO?(*)"
                      }
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <div className={classes.sick__formcheck_wrap}>
                      <Form.Check
                        type={"radio"}
                        id={`check-api-radio`}
                        // label={<p>SI</p>}
                        checked={yes}
                        value={true}
                        onChange={clickAnswer2("yes")}
                      />
                      <div>SI</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <div className={classes.sick__formcheck_wrap}>
                      <Form.Check
                        type={"radio"}
                        id={`check-api-radio`}
                        // label={<p>NO</p>}
                        checked={no}
                        value={false}
                        onChange={clickAnswer2("no")}
                      />
                      <div>NO</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <p className="text-center greyFontColor">
                      {"¿USTED HA TENIDO ALGUNO DE ESTOS SÍNTOMAS?(*)"}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <div className={classes.sick__formcheck_wrap}>
                      <Form.Check
                        type={"checkbox"}
                        id={`check-api-radio`}
                        //   label={<p>NINGUNO</p>}
                        value={"NINGUNO"}
                        checked={sicks.includes("NINGUNO")}
                        onChange={(e) => handleSicks(e)}
                      />
                      <div>NINGUNO</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className={classes.sick__formcheck_wrap}>
                      <Form.Check
                        type={"checkbox"}
                        id={`check-api-radio`}
                        //   label={<p>DIARREA</p>}
                        onChange={(e) => handleSicks(e)}
                        value={"DIARREA"}
                        checked={sicks.includes("DIARREA")}
                      />
                      <div>DIARREA</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className={classes.sick__formcheck_wrap}>
                      <Form.Check
                        type={"checkbox"}
                        id={`check-api-radio`}
                        //   label={<p>DOLOR MUSCULAR</p>}
                        onChange={(e) => handleSicks(e)}
                        value={"DOLOR MUSCULAR"}
                        checked={sicks.includes("DOLOR MUSCULAR")}
                      />
                      <div>DOLOR MUSCULAR</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <div className={classes.sick__formcheck_wrap}>
                      <Form.Check
                        type={"checkbox"}
                        id={`check-api-radio`}
                        //   label={<p>FIEBRE</p>}
                        onChange={(e) => handleSicks(e)}
                        value={"FIEBRE"}
                        checked={sicks.includes("FIEBRE")}
                      />
                      <div>FIEBRE</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className={classes.sick__formcheck_wrap}>
                      <Form.Check
                        type={"checkbox"}
                        id={`check-api-radio`}
                        //   label={<p>PÉRDIDA DE OLFATO/GUSTO</p>}
                        onChange={(e) => handleSicks(e)}
                        value={"PÉRDIDA DE OLFATO/GUSTO"}
                        checked={sicks.includes("PÉRDIDA DE OLFATO/GUSTO")}
                      />
                      <div>PÉRDIDA DE OLFATO/GUSTO</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <div className={classes.sick__formcheck_wrap}>
                      <Form.Check
                        type={"checkbox"}
                        id={`check-api-radio`}
                        //   label={<p>DIFICULTAD RESPIRATORIA</p>}
                        value={"DIFICULTAD RESPIRATORIA"}
                        checked={sicks.includes("DIFICULTAD RESPIRATORIA")}
                        onChange={(e) => handleSicks(e)}
                      />
                      <div>DIFICULTAD RESPIRATORIA</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className={classes.sick__formcheck_wrap}>
                      <Form.Check
                        type={"checkbox"}
                        id={`check-api-radio`}
                        //   label={<p>TOS</p>}
                        onChange={(e) => handleSicks(e)}
                        value={"TOS"}
                        checked={sicks.includes("TOS")}
                      />
                      <div>TOS</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <p className="text-center greyFontColor">
                      {
                        "DECLARACIÓN JURADA: LOS ANTECEDENTES QUE EXPONGO SON VERDADEROS, EN CASO DE FALSEDAD DE LA DECLARACIÓN, PODRA SER SANCIONADO PENALMENTE.(*)"
                      }
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <div className={classes.sick__formcheck_wrap}>
                      <Form.Check
                        onClick={() => {
                          handleAccept();
                        }}
                        value={accept}
                        checked={accept}
                        type={"radio"}
                        id={`check-api-radio`}
                        //   label={<p>ENTIENDO Y ACEPTO</p>}
                      />
                      <div>ENTIENDO Y ACEPTO</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3"></div>
            </Form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {accept && (
          <button
            onClick={handleClose2}
            type="button"
            className="btn btn-update mt-3"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            {/* <i className="fas fa-check"></i>*/}
            <FontAwesomeIcon icon={faChevronRight} /> Continuar
          </button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalSick;
