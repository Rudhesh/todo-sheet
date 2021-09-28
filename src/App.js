import { useEffect, useState } from "react";
import Item from "./component/Item";
import { ListItem7 } from "./component/ListItem7";
import Typography from "@material-ui/core/Typography";
import "./App.css";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [state, setState] = useState([
    { id: 2, task: "hello", completed: false },
  ]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setState(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  function addTodo(todo1) {
    setState([todo1, ...state]);
  }

  function toggleComplete(id) {
    setState(
      state.map((todo3) => {
        if (todo3.id === id) {
          return { ...todo3, completed: !todo3.completed };
        }
        return todo3;
      })
    );
  }

  function removeItem(id) {
    setState(state.filter((todo4) => todo4.id !== id));
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        React Todo
      </Typography>
      <ListItem7 addTodo={addTodo} />
      <Item
        state={state}
        toggleComplete={toggleComplete}
        removeItem={removeItem}
      />
    </div>
  );
}

export default App;
