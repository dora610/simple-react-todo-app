import { useState } from "react";

const AddTodo = ({ createTodo }) => {
  const [todo, setTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    createTodo(todo);
    setTodo("");
  };

  return (
    <div className="add-todo">
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="Add todo"
          name="todo"
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
