import { Routes, Route } from "react-router-dom";
import Index from "../views/Index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
};

export default AppRoutes;
