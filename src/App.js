import { useEffect, useState } from "react";
import "./App.css";

import AddTodo from "./Components/AddTodo";
import Navbar from "./Components/Navbar";
import ShowTodo from "./Components/ShowTodo";

function App() {
  const [todos, setTodos] = useState([]);

  // Using localStorage
  // fetch todos from localStorage
  useEffect(() => {
    let localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  // add todos to localStorage
  //TODO: modify isn't working
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (index) => {
    let newTodoList = todos.filter((todo) => todos.indexOf(todo) !== index);
    setTodos(newTodoList);
  };

  const editTodo = (newTodo, index) => {
    todos.splice(index, 1, newTodo);
    setTodos(todos);
  };

  return (
    <div>
      <Navbar />
      <AddTodo createTodo={(newTodo) => setTodos([...todos, newTodo])} />
      <br />
      <ShowTodo
        todos={todos}
        deleteTodo={(index) => deleteTodo(index)}
        modifyTodo={(newTodo, index) => editTodo(newTodo, index)}
      />
    </div>
  );
}

export default App;
