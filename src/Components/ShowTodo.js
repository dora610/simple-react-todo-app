const ShowTodo = ({ todos, deleteTodo }) => {
  //TODO: Add a minimize view button

  //TODO: Add modify button
  return (
    <div>
      {todos.length === 0 ? (
        <div className="blank-todo">No todos available</div>
      ) : (
        <div className="show-todo">
          {todos.map((todo, index) => (
            <ul key={index} className="todo-list">
              <li className="todo-items">
                <span>{todo}</span>
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
