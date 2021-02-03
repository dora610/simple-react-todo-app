import { useEffect, useState, localStorage } from "react";
import "./App.css";

import AddTodo from "./Components/AddTodo";
import Navbar from "./Components/Navbar";
import ShowTodo from "./Components/ShowTodo";

function App() {
  const [todos, setTodos] = useState([]);

  //TODO: Add localstorage
  /* useEffect(() => {
    let localStore = localStorage.getItem("todos");
    if (localStore) {
      setTodos(JSON.parse(localStore));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", todos);
  }, [todos]); */

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
