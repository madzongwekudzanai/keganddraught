import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./animate.css";
import "./flaticon.css";
import "./nice-select.css";
import "./magnific-popup.css";
import "./mainmenu.css";
import "./App.css";
import "./responsive.css";
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
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
