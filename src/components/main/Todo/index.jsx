import { useRef, useState } from "react";
import { todoAPI } from "../../../server/api";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { StyledTodo } from "./styled";

export const Todo = ({ todo, todos, setTodos }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const input = useRef(null);
  const [value, setValue] = useState(todo.todo);

  const handleCompleteTodo = () => {
    todoAPI
      .updateTodo(todo.id, {
        todo: value,
        isCompleted: !isCompleted,
      })
      .then(({ data }) => {
        setTodos(
          todos.map((v) => {
            return v.id !== todo.id ? v : data;
          })
        );
      });
  };

  const handleUpdateTodo = () => {
    todoAPI
      .updateTodo(todo.id, {
        todo: value,
        isCompleted: isCompleted,
      })
      .then(({ data }) => {
        setTodos(
          todos.map((v) => {
            return v.id !== todo.id ? v : data;
          })
        );
        setIsUpdate(false);
      });
  };

  const handleDeleteTodo = () => {
    todoAPI.deleteTodo(todo.id).then(() => {
      setTodos(todos.filter((v) => v.id !== todo.id));
    });
  };

  return (
    <StyledTodo>
      {isUpdate ? (
        isCompleted ? (
          <AiFillCheckCircle
            className="icon"
            onClick={() => {
              setIsCompleted(false);
            }}
          />
        ) : (
          <AiOutlineCheckCircle
            className="icon"
            onClick={() => {
              setIsCompleted(true);
            }}
          />
        )
      ) : isCompleted ? (
        <AiFillCheckCircle
          className="icon"
          onClick={() => {
            handleCompleteTodo();
            setIsCompleted(false);
          }}
        />
      ) : (
        <AiOutlineCheckCircle
          className="icon"
          onClick={() => {
            handleCompleteTodo();
            setIsCompleted(true);
          }}
        />
      )}

      {isUpdate ? (
        <input
          type="text"
          defaultValue={value}
          ref={input}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <span>{todo.todo}</span>
      )}

      <div className="button-box">
        <button
          onClick={() => {
            !isUpdate ? setIsUpdate(true) : handleUpdateTodo();
          }}
        >
          {!isUpdate ? "수정" : "제출"}
        </button>

        {isUpdate ? (
          <button
            onClick={() => {
              setIsUpdate(false);
              setIsCompleted(todo.isCompleted);
            }}
          >
            취소
          </button>
        ) : (
          <button onClick={handleDeleteTodo}>삭제</button>
        )}
      </div>
    </StyledTodo>
  );
};
