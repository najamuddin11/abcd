import React, { Component } from "react";
import "./App.scss";
import Home from "./routes/guests/Home.route";
import { Route, Switch, withRouter } from "react-router-dom";
import UserRegistraion from "./routes/registeration/UserRegistraion.route";
import OrganizerRegistration from "./routes/registeration/OrganizerRegistration.route";
import SignIn from "./routes/signIn/SignIn.route";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, setCurrentOrganizer } from "./actions/authActions";
import store from "./store";
import { connect } from "react-redux";
import Footer from "./components/homepage/footer/Footer.component";

class App extends Component {
  constructor(props) {
    super(props);

    // if(localStorage.jwtToken){
    //   setAuthToken(localStorage.jwtToken)
    //   const decoded = jwt_decode(localStorage.jwtToken);
    //   store.dispatch(setCurrentUser(decoded))}

    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);
      if (decoded.isUser) {
        store.dispatch(setCurrentUser(decoded));
      } else if (decoded.isOrganizer) {
        store.dispatch(setCurrentOrganizer(decoded));
      }
    }
  }

  render() {
    return (
      <div className="body">
        <Switch>
          <Route exact path="/" component={withRouter(Home)} />
          <Route
            exact
            path="/register/user"
            component={withRouter(UserRegistraion)}
          />
          <Route
            exact
            path="/register/organizer"
            component={withRouter(OrganizerRegistration)}
          />
          <Route exact path="/sign-in" component={withRouter(SignIn)} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(withRouter(App));
