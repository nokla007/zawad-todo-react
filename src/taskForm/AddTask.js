import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { TaskModal } from "./TaskModal";
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
    <>
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
        onClose={() => {
          setModalShow(false);
          console.log("modal closed");
        }}
        title={"hello"}
      >
        <TaskForm />
      </TaskModal>
      <br />
      <TaskForm task={task} setTask={setTask} />
      <FormButtons submit={submit} reset={reset} />
      <br />
    </>
  );
};
