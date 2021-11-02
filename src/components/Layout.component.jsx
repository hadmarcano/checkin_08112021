import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header.component";
import Footer from "./Footer.component";
import FormOne from "../pages/FormOne.component";
import FormTwo from "../pages/FormTwo.component";
import FormThree from "../pages/FormThree.component";
import FormFour from "../pages/FormFour.component";
import FormFive from "../pages/FormFive.component";
import FormSix from "../pages/FormSix.component";
import CheckInContextProvider from "../context/checkInContext";

const Layout = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <CheckInContextProvider>
          <Switch>
            <Route exact path="/step1/:dataPackage" component={FormOne} />
            {/* <Route exact path="/" component={FormOne} /> */}
            <Route exact path="/step2/" component={FormTwo} />

            <Route exact path="/step3/">
              <FormThree />
            </Route>
            <Route exact path="/step4/">
              <FormFour />
            </Route>

            <Route exact path="/step5">
              <FormFive />
            </Route>
            <Route exact path="/step6">
              <FormSix />
            </Route>
          </Switch>
        </CheckInContextProvider>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default Layout;
