import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
} from "@material-ui/core";



import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

function TodoItem({ text, completed, onToggleCompleted, onDelete }) {
  return (
    <ListItem dense button>
      <Checkbox checked={completed} onClick={onToggleCompleted} />
      <ListItemText
        primary={text}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      />
      <IconButton aria-label="delete" onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default TodoItem;
