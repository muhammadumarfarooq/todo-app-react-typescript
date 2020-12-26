import React, { useState } from 'react';
import { TodoListItem } from "./components/TodoListItem";

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
  
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if ( todo === selectedTodo ) {
        return { ...todo, complete: !selectedTodo.complete }
      }
      return todo
    });
    setTodos(newTodos);
  };
  
  return (
    <div className="App">
      <ul>
        <TodoListItem toggleTodo={toggleTodo} todo={todos[ 0 ]}/>
        <TodoListItem toggleTodo={toggleTodo} todo={todos[ 1 ]}/>
      </ul>
    </div>
  );
}

export default App;
