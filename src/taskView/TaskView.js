import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { MyTest } from "../taskForm/mytest";
import { TaskAccordion } from "./taskAccordion";

export const TaskView = ({ tasks, updateTask, deleteTask, searchTerm }) => {
  const completeFilter = { complete: true };
  const inCompleteFilter = { complete: false };
  const taskList = tasks.filter((task) => {
    if (!searchTerm) return task;
    return (
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.details.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Container>
      {/* <Row>
        <Col sm>
          <h1>Pending</h1>
        </Col>
        <Col sm>
          <h1>Complete</h1>
        </Col>
      </Row> */}
      <Row>
        <Col sm>
          <div className="page-border">
            <h1>Pending</h1>
          </div>
          <TaskAccordion
            tasks={taskList}
            updateTask={updateTask}
            deleteTask={deleteTask}
            taskfilter={inCompleteFilter}
          />
        </Col>
        <Col sm>
          <div className="page-border">
            <h1>Complete</h1>
          </div>
          <TaskAccordion
            tasks={taskList}
            updateTask={updateTask}
            deleteTask={deleteTask}
            taskfilter={completeFilter}
          />
        </Col>
      </Row>
    </Container>
  );
};
