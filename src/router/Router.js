import { Route, Routes } from "react-router-dom";
import { Join } from "../pages/Join";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Join />} />
      <Route path="/todo" element={<Main />} />
    </Routes>
  );
};
