import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Congratulations } from "./pages/Congratulations";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/congratulations" element={<Congratulations />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
