import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Container, Row, Stack, Col, Button } from "react-bootstrap";
import { ActionButtons } from "./ActionButtons";

export const TaskCard = ({ task, updateTask, deleteTask }) => {
  return (
    <Card>
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>{task.details}</Card.Text>

        <Container fluid>
          <Row>
            <div className="page-border">
              <Form.Select
                onChange={(e) => {
                  console.log(e);
                  updateTask({ ...task, priority: e.target.value });
                }}
                value={task.priority}
              >
                <option value={"High"}>High</option>
                <option value={"Normal"}>Normal</option>
                <option value={"Low"}>Low</option>
              </Form.Select>
            </div>
          </Row>
          <Row>
            {/* <ActionButtons updateTask={updateTask} deleteTask={deleteTask} /> */}
            {ActionButtons(task, updateTask, deleteTask)}
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};
