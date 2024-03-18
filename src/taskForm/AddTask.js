import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { TaskModal, FormModal } from "./TaskModal";
import Modal from "react-bootstrap/Modal";
import { TaskForm } from "./TaskForm";
import { FormButtons } from "./Buttons";

export const AddTask = ({ submitTask, defaultTask }) => {
  const [modalShow, setModalShow] = useState(false); // state for modal
  const [task, setTask] = useState(defaultTask); // state for input task

  const reset = () => {
    setTask(defaultTask);
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
    <div>
      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          console.log("btn");
          setModalShow(true);
        }}
      >
        Add TODO
      </Button>
      <TaskModal
        showModal={modalShow}
        // onClose={(e) => {
        //   setModalShow(false);
        //   console.log("modal closed");
        // }}
        setModalShow={setModalShow}
        title="add task"
      >
        <TaskForm task={task} setTask={setTask} />
      </TaskModal>
      {/* <FormModal
        title="add task"
        showModal={modalShow}
        onClose={() => setModalShow(false)}
        submit={submit}
        reset={reset}
      >
        <TaskForm task={task} setTask={setTask} />
      </FormModal> */}
      <br />
      <TaskForm task={task} setTask={setTask} />
      <FormButtons submit={submit} reset={reset} />
      <br />
    </div>
  );
};
