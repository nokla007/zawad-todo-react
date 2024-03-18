import React from "react";
import Modal from "react-bootstrap/Modal";
import { FormButtons } from "./Buttons";
import Button from "react-bootstrap/Button";

export const TaskModal = ({
  title,
  onClose,
  showModal,
  setModalShow,
  submit,
  reset,
  children,
}) => {
  return (
    <Modal
      show={showModal}
      onHide={() => {
        console.log(showModal);
        console.log("modal clos clicked");
        setModalShow(false);
      }}
      size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <FormButtons submit={submit} reset={reset} />
      </Modal.Footer>
    </Modal>
  );
};

export const FormModal = ({
  title,
  onClose,
  showModal,
  submit,
  reset,
  children,
}) => {
  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={reset}>
          Clear
        </Button>
        <Button variant="primary" onClick={submit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
