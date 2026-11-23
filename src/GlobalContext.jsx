import { createContext, useContext, useState } from "react";

const AppContext = createContext();

function GlobalProvider({ children }) {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [query, setQuery] = useState("");

  function toggleDarkTheme() {
    const newTheme = !isDarkTheme;
    setDarkTheme(newTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newTheme);
  }

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useGlobalContext() {
  const val = useContext(AppContext);
  if (val === undefined) {
    throw new Error("GlobalContext used outside bounds.");
  }
  return val;
}

export { GlobalProvider, useGlobalContext };
