import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;

  .logout {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #e5e5e5;
    cursor: pointer;
  }

  .todo-form {
    width: 100%;
    height: 100px;
    background-color: #fff;

    h2 {
      text-align: center;
      margin: 20px 0 0 0;
    }
  }

  .todo-list {
    width: 80vw;
    max-width: 600px;
    margin-top: 60px;
  }

  .todo-list > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: 300px;
    height: 50px;
    border-radius: 5px;
    padding: 0 10px;
    margin: 10px auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;
