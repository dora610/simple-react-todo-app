import { useState } from "react";

const TodoElement = ({ todo, modifyTodoItem }) => {
  const [modifiedTodo, setModifiedTodo] = useState(todo);
  const [isView, setIsView] = useState(true);

  const handleEdit = () => {
    setIsView(false);
  };

  const handleSave = () => {
    modifyTodoItem(modifiedTodo);
    setIsView(true);
  };

  return (
    <span>
      {/* show text/modify text field */}
      <span className="todo-text">
        {isView ? (
          <span>{modifiedTodo}</span>
        ) : (
          <span>
            <input
              type="text"
              name="modify-todo"
              id="modify-todo"
              value={modifiedTodo}
              onChange={(e) => setModifiedTodo(e.target.value)}
            />
          </span>
        )}
      </span>

      {/* show/modify button */}
      {(() => {
        const clickHandler = isView ? handleEdit : handleSave;
        const buttonLabel = isView ? "modify" : "confirm";
        return <button onClick={clickHandler}>{buttonLabel}</button>;
      })()}
    </span>
  );
};

export default TodoElement;
