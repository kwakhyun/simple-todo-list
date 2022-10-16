import { useRef } from "react";
import styled from "styled-components";
import { todoAPI } from "../../server/api";

export const TodoForm = ({ setTodos }) => {
  const input = useRef(null);

  const handleAddTodo = () => {
    todoAPI.createTodo({ todo: input.current.value }).then((response) => {
      setTodos(response);
    });
  };

  return (
    <StyledTodoForm>
      <input type="text" ref={input} />
      <button
        className="add-button"
        onClick={() => {
          handleAddTodo();
          input.current.value = "";
        }}
      >
        추가
      </button>
    </StyledTodoForm>
  );
};

const StyledTodoForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;

  input {
    width: 300px;
    height: 30px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    padding: 0 10px;
  }

  .add-button {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    background-color: #e5e5e5;
  }
`;
