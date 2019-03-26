import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import NavBar from "./NavBar";
import Home from "./Home";
import Auth from "./Auth";
import SocialAuthRedirect from "./SocialAuthRedirect";
import Profile from "./Profile";
import SweetDetail from "./SweetDetail";
import { reAuthUser } from "../reducer/users";
import { connect } from "react-redux";

class AppContainer extends Component {
  componentWillMount() {
    this.props.dispatch(reAuthUser());
  }

  render() {
    return (
      <Router>
        <div style={{ margin: "auto", width: 400 }}>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/socialauthredirect/" component={SocialAuthRedirect} />
          <PrivateRoute path="/profile/:uid" component={Profile} />
          <PrivateRoute path="/detail/:sweetId" component={SweetDetail} />
        </div>
      </Router>
    );
  }
}

AppContainer = connect()(AppContainer);

export default AppContainer;
