import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/authContext";
import { Navigate } from "react-router-dom";

//pages
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

const Router = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
