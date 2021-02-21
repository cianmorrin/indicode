import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "../components/css/App.css";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import Dashboard from "./indicode/Dashboard";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Main from "./indicode/Main";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Navbar />
              <Alerts />
              <div className="container">
                <Main />
                <Switch>
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
