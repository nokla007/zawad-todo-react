import React from "react";
import Modal from "react-bootstrap/Modal";
import { FormButtons } from "./Buttons";

export const TaskModal = ({
  title,
  onClose,
  showModal,
  submit,
  reset,
  children,
}) => {
  return (
    <Modal
      show={showModal}
      onHide={onClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
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
