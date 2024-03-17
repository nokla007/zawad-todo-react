import React from "react";
import Form from "react-bootstrap/Form";

export const TaskForm = ({ task, setTask }) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          placeholder="Task Title"
          value={task.title}
          onChange={(e) => {
            setTask({ ...task, title: e.target.value });
          }}
        />
        <Form.Label>Details</Form.Label>
        <Form.Control
          placeholder="Details of the task"
          value={task.details}
          onChange={(e) => {
            setTask({ ...task, details: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label>Priority</Form.Label>
        <Form.Select
          onChange={(e) => {
            console.log(e);
            setTask({ ...task, priority: e.target.value });
          }}
          value={task.priority}
          size="sm"
        >
          <option value={"High"}>High</option>
          <option value={"Normal"}>Normal</option>
          <option value={"Low"}>Low</option>
        </Form.Select>
      </Form.Group>
    </>
  );
};
