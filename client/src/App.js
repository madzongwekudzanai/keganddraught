import React, { Fragment } from "react";
import "./animate.css";
import "./flaticon.css";
import "./nice-select.css";
import "./magnific-popup.css";
import "./mainmenu.css";
import "./App.css";
import "./responsive.css";
import Navbar from "./components/layout/Header/Navbar";
import Banner from "./components/layout/Header/Banner";
import Welcome from "./components/layout/Welcome";
import Service from "./components/layout/Service";
import Choose from "./components/layout/Choose";
import Pricing from "./components/layout/Pricing";
import Subscribe from "./components/layout/Subscribe";
import LatestBlog from "./components/blog/LatestBlog";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Welcome />
      <Service />
      <Choose />
      <Pricing />
      <Subscribe />
      <LatestBlog />
      <Footer />
    </Fragment>
  );
}

export default App;
