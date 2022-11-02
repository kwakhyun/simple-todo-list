import { useState } from "react";
import { todoAPI } from "../../api/api";
import { StyledTodoForm } from "./styled";

export const TodoForm = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    todoAPI.createTodo({ todo: newTodo.trim() }).then((response) => {
      setTodos([...todos, response.data]);
      setNewTodo("");
    });
  };

  return (
    <StyledTodoForm>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      {newTodo.trim().length > 0 ? (
        <button onClick={handleAddTodo}>추가</button>
      ) : (
        <button disabled>추가</button>
      )}
    </StyledTodoForm>
  );
};
