import Router from "./router";
import { GlobalStyle } from "./global/styles";
import { AuthProvider } from "./context/authContext";

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router />
    </AuthProvider>
  );
};

export default App;
