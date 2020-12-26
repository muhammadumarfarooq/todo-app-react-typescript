import React, { useState } from 'react';
import { TodoListItem } from "./components/TodoListItem";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  
  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if ( todo === selectedTodo ) {
        return { ...todo, complete: !selectedTodo.complete }
      }
      return todo
    });
    setTodos(newTodos);
  };
  
  const handleAddTodoForm: HandleAddTodoForm = (todo: Todo) => {
    setTodos([...todos, todo]);
  }
  
  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <AddTodoForm handleAddTodoForm={handleAddTodoForm}/>
    </div>
  );
}

export default App;
