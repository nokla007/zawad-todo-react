import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { TaskModal, FormModal } from "./TaskModal";
import Modal from "react-bootstrap/Modal";
import { TaskForm } from "./TaskForm";
import { FormButtons } from "./Buttons";
import { uid } from "uid";
import { MyTest } from "./mytest";
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export const AddTask = ({
  submitTask,
  defaultTask,
  searchTerm,
  setSearchTerm,
}) => {
  const newTask = () => {
    return { ...defaultTask, id: uid() };
  };
  const [modalShow, setModalShow] = useState(false); // state for modal
  const [task, setTask] = useState(newTask()); // state for input task

  const reset = () => {
    setTask(newTask());
    console.log("reset");
  };

  const submit = (e) => {
    console.log(task);
    e.preventDefault();
    submitTask(task);
    reset();
    setModalShow(false);
  };

  return (
    <div className="App">
      <Container>
        <Row className="align-items-center">
          <Col sm>
            <div className="page-border">
              <h3>Todo</h3>
            </div>
          </Col>
          <Col sm>
            <FloatingLabel
              controlId="floatingInput"
              label="Search"
              className="mb-3"
            >
              <Form.Control
                placeholder="Search for a task"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </FloatingLabel>
          </Col>
          <Col sm>
            <div>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  console.log("btn");
                  setModalShow(true);
                }}
              >
                Add TODO
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <TaskModal
        showModal={modalShow}
        // onClose={(e) => {
        //   setModalShow(false);
        //   console.log("modal closed");
        // }}
        setModalShow={setModalShow}
        title="add task"
        submit={submit}
        reset={reset}
      >
        <TaskForm task={task} setTask={setTask} />
      </TaskModal>
      <br />
      {/* <TaskForm task={task} setTask={setTask} />
      <FormButtons submit={submit} reset={reset} /> */}
      <br />
    </div>
  );
};
