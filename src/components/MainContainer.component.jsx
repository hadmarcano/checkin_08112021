import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Layout from "./Layout.component";

const MainContainer = () => {
  return (
    <Fragment>
      <Container fluid className="d-flex flex-column min-vh-100 generalBack">
        <Layout />
      </Container>
    </Fragment>
  );
};

export default MainContainer;
