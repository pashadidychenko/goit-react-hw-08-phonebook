import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/contacts/contactsOperations";

function LogOut({ logoutUser }) {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Confirm log out</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Do you wont log out?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary" type="button" onClick={logoutUser}>
          Log out
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

const mapDispatchToProps = {
  logoutUser,
};

export default connect(null, mapDispatchToProps)(LogOut);
