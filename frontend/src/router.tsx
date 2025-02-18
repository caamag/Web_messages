import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
