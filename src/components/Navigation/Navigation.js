import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserMenu from "./UserMenu";
import routes from "../../routes";
import { connect } from "react-redux";
import { getUserInfo } from "../../redux/contacts/contactsSelectors";

function Navigation({ user }) {
  return (
    <>
      <Nav
        variant="tabs"
        defaultActiveKey="/home"
        className="justify-content-end"
      >
        <Nav.Item>
          <Link to={routes.home} className="nav-link">
            Home Page
          </Link>
        </Nav.Item>
        {!user && (
          <Nav.Item>
            <Link to={routes.login} className="nav-link">
              Login
            </Link>
          </Nav.Item>
        )}
        {!user && (
          <Nav.Item>
            <Link to={routes.register} className="nav-link">
              Registration
            </Link>
          </Nav.Item>
        )}
        {user && <UserMenu />}
      </Nav>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    user: getUserInfo(state),
  };
};

export default connect(mapStateToProps, null)(Navigation);
