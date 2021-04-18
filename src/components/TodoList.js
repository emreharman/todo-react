import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const sortedTodos = todos.sort((a, b) => a.id - b.id);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      {todos.length > 0 ? (
        <>
          {sortedTodos.map((todo) => (
            <Todo key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />
          ))}
        </>
      ) : (
        <div
          className="alert alert-warning"
          role="alert"
          style={{ width: "50%" }}
        >
          No todos yet.
        </div>
      )}
    </div>
  );
};

export default TodoList;
