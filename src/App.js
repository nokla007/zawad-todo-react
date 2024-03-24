import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { uid } from "uid";
import { AddTask } from "./taskForm/AddTask";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { TaskTable } from "./taskView/TaskTable";
import { Stack } from "react-bootstrap";
import { TaskView } from "./taskView/TaskView";

const mockTasks = [
  {
    id: uid(),
    title: "task 1",
    details: "task 1 details",
    priority: "Normal",
    complete: false,
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
  {
    id: uid(),
    title: "task 2",
    details: "task 2 details",
    priority: "High",
    complete: false,
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
  {
    id: uid(),
    title: "task 3",
    details: "task 3 details",
    priority: "Low",
    complete: false,
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
  {
    id: uid(),
    title: "task 4",
    details: "task 3 details",
    priority: "High",
    complete: true,
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
  {
    id: uid(),
    title: "task 5",
    details: "task 3 details",
    priority: "Normal",
    complete: true,
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
];

const defaultTask = {
  id: uid(),
  title: "",
  details: "",
  priority: "Normal",
  complete: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

function App() {
  const [tasks, setTasks] = useState(mockTasks);
  const [searchTerm, setSearchTerm] = useState("");

  const addtask = (newTask) => {
    console.log("adding task ");
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    const newTasks = tasks.map((x) => {
      if (x.id === updatedTask.id) {
        x = updatedTask;
      }
      return x;
    });
    setTasks(newTasks);

    // new style
    // setTasks((currentTasks)=>{
    //   return currentTasks.map((x)=>{
    //     if(x.id===updateTask.id){
    //       x = updateTask;
    //     }
    //     return x;
    //   })
    // })
  };

  const deleteTask = (id) => {
    console.log("delete");
    setTasks(
      tasks.filter((x) => {
        return x.id !== id;
      })
    );
  };

  return (
    <div className="App page-border">
      <AddTask
        submitTask={addtask}
        defaultTask={defaultTask}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <br />
      {/* <TaskTable
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      /> */}
      <TaskView
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
