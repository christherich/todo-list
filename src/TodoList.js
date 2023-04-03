import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { TextField, Button, List, Grid } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });

  function handleAddTodo() {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  }

  function handleDeleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function handleToggleCompleted(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={6}>
        <animated.div style={fadeIn}>
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="Add a task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTodo}
            disabled={inputValue.trim() === ""}>
            Add
          </Button>
          <List>
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                text={todo.text}
                completed={todo.completed}
                onToggleCompleted={() => handleToggleCompleted(index)}
                onDelete={() => handleDeleteTodo(index)}
              />
            ))}
          </List>
        </animated.div>
      </Grid>
    </Grid>
  );
}

export default TodoList;
