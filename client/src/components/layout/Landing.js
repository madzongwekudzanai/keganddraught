import React, { Fragment } from "react";
import Banner from "./Header/Banner";
import Welcome from "./Welcome";
import Service from "./Service";
import Choose from "./Choose";
import Pricing from "./Pricing";
import Subscribe from "./Subscribe";
import LatestBlog from "../blog/LatestBlog";

const Landing = () => {
  return (
    <Fragment>
      <Banner />
      <Welcome />
      <Service />
      <Choose />
      <Pricing />
      <Subscribe />
      <LatestBlog />
    </Fragment>
  );
};

export default Landing;
