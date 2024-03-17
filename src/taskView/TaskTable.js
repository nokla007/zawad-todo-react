import React, { useState } from "react";
import { Container, Row, Stack, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export const TaskTable = ({ tasks, updateTask, deleteTask }) => {
  const showStatus = (x) => {
    return x.complete ? "Complete" : "Pending";
  };
  const toggleStatus = (x) => {
    console.log(x.complete);
    updateTask({ ...x, complete: !x.complete });
  };
  const statusButton = (x) => {
    return x.complete ? (
      <>
        {" "}
        <Button
          variant="warning"
          onClick={() => {
            toggleStatus(x);
          }}
        >
          Mark Incomplete
        </Button>{" "}
      </>
    ) : (
      <>
        {" "}
        <Button
          variant="success"
          onClick={() => {
            toggleStatus(x);
          }}
        >
          Mark Complete
        </Button>{" "}
      </>
    );
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Details</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => {
          return (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.details}</td>
              <td>{task.priority}</td>
              <td>{showStatus(task)}</td>
              <td>
                {/* <Stack direction="horizontal" gap={1}>
                  {statusButton(task)}
                  <Button
                    variant="danger"
                    onClick={(e) => {
                      deleteTask(task.id);
                    }}
                  >
                    Delete
                  </Button>{" "}
                </Stack> */}
                <Container>
                  <Row>
                    {statusButton(task)}
                    <Button
                      variant="danger"
                      onClick={(e) => {
                        deleteTask(task.id);
                      }}
                    >
                      Delete
                    </Button>{" "}
                  </Row>
                </Container>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
