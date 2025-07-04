import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./GlobalStyle";
import { AuthProvider } from "./AuthContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
        </ThemeProvider>
      </AuthProvider>
  </>
);

reportWebVitals();
