import React, { useState, useEffect } from 'react';
import { TextField, Button, List } from '@mui/material';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { title: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const handleEdit = (index, newTitle) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, title: newTitle } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Todo List</h2>
      <TextField 
        fullWidth
        variant="outlined"
        label="New Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        onClick={addTodo}
        style={{ marginTop: '10px' }}
      >
        Add
      </Button>
      
      <List>
        {todos.map((todo, index) => (
          <TodoItem 
            key={index}
            todo={todo}
            index={index}
            toggleTodo={toggleTodo}
            handleEdit={handleEdit}
          />
        ))}
      </List>

      <Button 
        variant="contained" 
        color="secondary" 
        fullWidth 
        onClick={deleteCompleted}
        style={{ marginTop: '10px' }}
      >
        Clear Completed
      </Button>
    </div>
  );
};

export default TodoApp;
