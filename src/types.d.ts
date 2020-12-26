//Interface is used to define the structure of an object.
interface Todo {
  text: string,
  complete: boolean
}

//toggle function
type ToggleTodo = (selectedTodo: Todo) => void;
