import React from "react";
import { List } from "@material-ui/core";
import Todo from "./Todo";
function Item({ state, toggleComplete, removeItem }) {
  return (
    <List>
      {state.map((todo2) => (
        <Todo
          key={todo2.id}
          todo2={todo2}
          toggleComplete={toggleComplete}
          removeItem={removeItem}
        />
      ))}
    </List>
  );
}

export default Item;
