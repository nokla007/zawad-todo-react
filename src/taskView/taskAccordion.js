import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { TaskCard } from "./taskCard";
import { Container, Row, Col } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

export const TaskAccordion = ({
  tasks,
  updateTask,
  deleteTask,
  taskfilter,
}) => {
  const _get_chip_variant = (task) => {
    switch (task.priority) {
      case "High":
        return "danger";
      case "Normal":
        return "primary";
      default:
        return "secondary";
    }
  };

  return (
    <Accordion>
      {tasks
        .filter((task) => {
          return task.complete == taskfilter.complete;
        })
        .map((task, i) => {
          return (
            <Accordion.Item eventKey={task.id} key={task.id}>
              <Accordion.Header>
                <Container>
                  <Row>
                    <Col xs={8}>{task.title}</Col>
                    <Col
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Badge pill bg={_get_chip_variant(task)}>
                        {task.priority}
                      </Badge>
                    </Col>
                  </Row>
                </Container>
              </Accordion.Header>
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
