import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

export const ListItem7 = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task) {
      addTodo({ ...todo, id: Math.random() });
      setTodo({ ...todo, task: "" });
    }
  }

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  return (
    <>
      <TextField
        label="Task"
        type="text"
        placeholder="type here..."
        value={todo.task}
        onChange={handleTaskInputChange}
      />

      <Button type="submit" onClick={handleSubmit}>
        submit
      </Button>
    </>
  );
};
