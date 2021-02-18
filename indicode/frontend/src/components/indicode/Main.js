import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "../accounts/Login";
import Learning from "./Learning";
import Register from "../accounts/Register";
import PrivateRoute from "../common/PrivateRoute";

export class Main extends Component {
  render() {
    return (
      <div className={this.props.sidebar ? "main-window" : "main-window lg"}>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/learning" component={Learning} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sidebar: state.sidebar.sidebar,
});

export default connect(mapStateToProps, null)(Main);
