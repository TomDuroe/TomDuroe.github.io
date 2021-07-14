import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

function Add(props) {
    const [state, cState] = useState({
        id: 0,
        description: "",
        completed: false,
      });
      toastr.options = {
        closeButton: true,
        debug: false,
        extendedTimeOut: "3000",
        hideDuration: "1000",
        hideEasing: "linear",
        hideMethod: "fadeOut",
        newestOnTop: false,
        onclick: null,
        positionClass: "toast-top-full-width",
        preventDuplicates: true,
        progressBar: true,
        showDuration: "3000",
        showEasing: "swing",
        showMethod: "fadeIn",
        timeOut: "5000",
      };
      toastr.clear();    
  const handleChange = (event) => {
    const newState = { ...state };
    if (event.target.name === "completed") {
      newState[event.target.name] = !state.completed;
    } else {
      newState[event.target.name] = event.target.value;
    }
    cState(newState);
  };
const submitHandler = (event) => {
      event.preventDefault();
      props.onsubmit(state.id, state.description, state.completed);
      toastr.success("successfully added to list");
      cState({
        id: 0,
        description: "",
        completed: false,
  });
};

  return (
    <div className="container">
      <Form onSubmit={(e) => this.submitHandler(e)}>
        <Form.Group controlId="taskID">
          <Form.Label>Task ID</Form.Label>
          <Form.Control
            name="id"
            type="number"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="taskDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            value={state.description}
            placeholder="Description"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="complete">
          <Form.Check
            name="completed"
            type="checkbox"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Button varient="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Add;
