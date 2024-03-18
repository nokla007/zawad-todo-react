import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export function ActionButtons(task, updateTask, deleteTask) {
  var variant = task.complete ? "warning" : "success";
  var text = task.complete ? "Mark Incomplete" : " Mark Complete";
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-grid gap-2">
            <Button
              variant={variant}
              onClick={() => {
                updateTask({ ...task, complete: !task.complete });
              }}
              size="md"
            >
              {text}
            </Button>{" "}
          </div>
        </Col>
        <Col>
          <div className="d-grid gap-2">
            <Button
              variant="danger"
              onClick={(e) => {
                deleteTask(task.id);
              }}
              size="md"
            >
              Delete
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
