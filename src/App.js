import { useState } from "react";
import "./App.css";

import AddTodo from "./Components/AddTodo";
import Navbar from "./Components/Navbar";
import ShowTodo from "./Components/ShowTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (index) => {
    let newTodoList = todos.filter((todo) => todos.indexOf(todo) !== index);
    setTodos(newTodoList);
  };

  return (
    <div>
      <Navbar />
      <AddTodo createTodo={(newTodo) => setTodos([...todos, newTodo])} />
      <br />
      <ShowTodo todos={todos} deleteTodo={(index) => deleteTodo(index)} />
    </div>
  );
}

export default App;
