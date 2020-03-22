import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../layout/Landing";
import Navbar from "../layout/Header/Navbar";
import Footer from "../layout/Footer";
import Routes1 from "./Routes1";

const Routes = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact component={Landing} path="/" />
        <Route component={Routes1} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default Routes;
