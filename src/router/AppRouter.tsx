import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.tsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRouter;
