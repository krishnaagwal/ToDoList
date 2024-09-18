import React, { useState } from 'react';
import { ListItem, Checkbox, TextField } from '@mui/material';

const TodoItem = ({ todo, index, toggleTodo, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    if (newTitle.trim()) {
      handleEdit(index, newTitle);
      setIsEditing(false);
    }
  };

  return (
    <ListItem>
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(index)} />
      {isEditing ? (
        <TextField
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          fullWidth
        />
      ) : (
        <span onDoubleClick={handleDoubleClick}>
          {todo.completed ? <s>{todo.title}</s> : todo.title}
        </span>
      )}
    </ListItem>
  );
};

export default TodoItem;
