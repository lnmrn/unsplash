import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalProvider } from "./GlobalContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </GlobalProvider>
  </StrictMode>,
);
