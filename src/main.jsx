import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./components/userContext";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App.jsx";
import "modern-normalize";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
);
