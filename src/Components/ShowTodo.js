import TodoElement from "./TodoElement";
const ShowTodo = ({ todos, deleteTodo, modifyTodo }) => {
  //TODO: Add a minimize view button

  return (
    <div>
      {todos.length === 0 ? (
        <div className="blank-todo">No todos available</div>
      ) : (
        <div className="show-todo">
          {todos.map((todo, index) => (
            <ul key={index} className="todo-list">
              <li className="todo-items">
                {/* Show/ modify todo item */}
                <TodoElement
                  todo={todo}
                  modifyTodoItem={(newTodo) => modifyTodo(newTodo, index)}
                />
                {/* delete button */}
                <button onClick={() => deleteTodo(index)}>x</button>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowTodo;
