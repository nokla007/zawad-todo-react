import React, { useState } from "react";
import { Container, Row, Stack, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ActionButtons } from "./ActionButtons";

export const TaskTable = ({ tasks, updateTask, deleteTask }) => {
  const showStatus = (x) => {
    return x.complete ? "Complete" : "Pending";
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
              <td>{ActionButtons(task, updateTask, deleteTask)}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
