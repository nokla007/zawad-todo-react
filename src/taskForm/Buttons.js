import React from "react";
import Button from "react-bootstrap/Button";

export const FormButtons = ({ reset, submit }) => {
  return (
    <>
      <Button variant="secondary" onClick={reset}>
        Clear
      </Button>
      <Button variant="primary" onClick={submit}>
        Save
      </Button>
    </>
  );
};
