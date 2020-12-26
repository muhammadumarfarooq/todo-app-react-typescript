import React from 'react';
import './styles/todo-list-item.css';

//Interface is used to define the structure of an object.
interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label style={{ textDecoration: todo.complete ? "line-through" : "none" }}>
        <input onChange={() => toggleTodo(todo)} type="checkbox" checked={todo.complete}/> {todo.text}
      </label>
    </li>
  )
};

