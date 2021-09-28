import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const Todo = ({ todo2, toggleComplete, removeItem }) => {
  console.log(todo2);
  function handleCheckboxClick() {
    toggleComplete(todo2.id);
  }

  function handleRemoveClick() {
    removeItem(todo2.id);
  }
  return (
    <ListItem className="list">
      <Checkbox checked={todo2.completed} onClick={handleCheckboxClick} />
      <Typography variant="body1">{todo2.task}</Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
};

export default Todo;
