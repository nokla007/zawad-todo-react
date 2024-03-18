import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { TaskCard } from "./taskCard";

export const TaskAccordion = ({
  tasks,
  updateTask,
  deleteTask,
  taskfilter,
}) => {
  return (
    <Accordion>
      {tasks
        .filter((task) => {
          return task.complete == taskfilter.complete;
        })
        .map((task, i) => {
          return (
            <Accordion.Item eventKey={task.id}>
              <Accordion.Header>{task.title}</Accordion.Header>
              <Accordion.Body>
                <TaskCard
                  task={task}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                />
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
    </Accordion>
  );
};
