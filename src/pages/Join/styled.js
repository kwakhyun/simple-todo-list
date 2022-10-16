import styled from "styled-components";

export const StyledJoin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    border: 1px solid black;
    border-radius: 10px;
    h2 {
      margin-bottom: 20px;
    }
    label {
      margin-bottom: 10px;
    }
    input {
      margin-bottom: 10px;
      width: 300px;
      height: 30px;
      border: 1px solid black;
      border-radius: 5px;
      padding: 0 10px;
    }
    button {
      width: 300px;
      height: 30px;
      border: 1px solid black;
      border-radius: 5px;
      background-color: #fff;
      cursor: pointer;
    }
    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;
