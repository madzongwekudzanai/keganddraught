import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../about/About";
import ContactUs from "../contact/ContactUs";
import NotFound from "../layout/NotFound";
import Blog from "../blog/Blog";
import SearchResults from "../blog/SearchResults";
import BlogDetail from "../blog/BlogDetail";
import Success from "../layout/Success";
import PageTitle from "../layout/PageTitle";

const Routes1 = () => {
  return (
    <Fragment>
      <PageTitle />
      <Switch>
        <Route exact component={About} path="/about" />
        <Route exact component={ContactUs} path="/contact" />
        <Route exact component={Blog} path="/blog" />
        <Route exact component={SearchResults} path="/search" />
        <Route exact component={BlogDetail} path="/blog/:id" />
        <Route exact component={Success} path="/auth/:token" />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes1;
