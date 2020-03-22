import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../about/About";
import ContactUs from "../contact/ContactUs";
import Blog from "../blog/Blog";
import BlogDetail from "../blog/BlogDetail";
import PageTitle from "../layout/PageTitle";

const Routes1 = () => {
  return (
    <Fragment>
      <PageTitle />
      <Switch>
        <Route exact component={About} path="/about" />
        <Route exact component={ContactUs} path="/contact" />
        <Route exact component={Blog} path="/blog" />
        <Route exact component={BlogDetail} path="/blogDetail" />
      </Switch>
    </Fragment>
  );
};

export default Routes1;
