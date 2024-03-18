import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { MyTest } from "../taskForm/mytest";
import { TaskAccordion } from "./taskAccordion";

export const TaskView = ({ tasks, updateTask, deleteTask }) => {
  const completeFilter = { complete: true };
  const inCompleteFilter = { complete: false };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Pending</h1>
        </Col>
        <Col>
          <h1>Complete</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskAccordion
            tasks={tasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
            taskfilter={inCompleteFilter}
          />
        </Col>
        <Col>
          <TaskAccordion
            tasks={tasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
            taskfilter={completeFilter}
          />
        </Col>
      </Row>
    </Container>
  );
};
