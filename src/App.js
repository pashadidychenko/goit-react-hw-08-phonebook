import React, { Suspense, lazy, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { getUserInfo, getUserToken } from "./redux/contacts/contactsSelectors";
import { getUser } from "./redux/contacts/contactsOperations";

const StartPage = lazy(() => import("./components/HomePage/StartPage"));
const UserPage = lazy(() => import("./components/HomePage/UserPage"));
const LoginPage = lazy(() => import("./components/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("./components/RegistrationPage/RegistrationPage")
);
const ContactList = lazy(() => import("./components/Contacts/ContactList"));
const LogOut = lazy(() => import("./components/AlertPage/LogOut"));

class App extends Component {
  componentDidMount() {
    this.props.getUser(this.props.token);
  }
  render() {
    const { user } = this.props;
    return (
      <Layout>
        <Suspense
          fallback={
            <div>
              <Spinner animation="border" />
            </div>
          }
        >
          <Switch>
            <Route
              path={routes.home}
              exact
              component={user ? UserPage : StartPage}
            />
            <Route path={routes.login} component={LoginPage} />
            <Route path={routes.register} component={RegistrationPage} />
            <Route path={routes.contacts} component={ContactList} />
            <Route path={routes.logout} component={LogOut} />
            <Redirect to={routes.home} />
            <ContactList />
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: getUserInfo(state),
    token: getUserToken(state),
  };
};

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
