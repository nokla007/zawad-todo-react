import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { TaskModal, FormModal } from "./TaskModal";
import Modal from "react-bootstrap/Modal";
import { TaskForm } from "./TaskForm";
import { FormButtons } from "./Buttons";
import { uid } from "uid";
import { MyTest } from "./mytest";

export const AddTask = ({ submitTask, defaultTask }) => {
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
