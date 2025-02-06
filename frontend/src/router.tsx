import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
