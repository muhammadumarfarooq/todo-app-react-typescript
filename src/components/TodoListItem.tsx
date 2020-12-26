import React from 'react';
import './styles/todo-list-item.css';

//Interface is used to define the structure of an object.
interface Props {
  todo: Todo
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
  return (
    <li>
      <label style={{ textDecoration: todo.complete ? "line-through" : "none" }}>
        <input type="checkbox" checked={todo.complete}/> {todo.text}
      </label>
    </li>
  )
};

