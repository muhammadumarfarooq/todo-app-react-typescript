import React, { useState } from 'react';

interface Props {
  handleAddTodoForm: HandleAddTodoForm
}

export const AddTodoForm: React.FC<Props> = ({ handleAddTodoForm }) => {
  const [state, setState] = useState({ text: "", complete: false });
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleAddTodoForm(state);
      setState({ ...state, text: "" });
    }}>
      <input type="text" onChange={(e) => {
        setState({ ...state, text: e.target.value })
      }} value={state.text}/>
      <button type="submit">Add Todo</button>
    </form>
  )
}
