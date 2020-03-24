import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./animate.css";
import "./flaticon.css";
import "./nice-select.css";
import "./magnific-popup.css";
import "./mainmenu.css";
import "./App.css";
import "./responsive.css";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import ForgotPassword from "./components/auth/ForgotPassword";
import ScrollToTop from "./components/layout/ScrollToTop";
import ScrollToTopButton from "./components/layout/ScrollToTopButton";
import Alert from "./components/layout/Alert";
import Routes from "./components/routing/Routes";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import { setAuthToken } from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <ScrollToTop />
          <ScrollToTopButton />
          <Alert />
          <Switch>
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/reset" component={ForgotPassword} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
