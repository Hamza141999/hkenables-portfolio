import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  isDarkTheme: null,
  setIsDarkTheme: () => {},
  toggleTheme: () => {},
});

function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
  useEffect(() => {
    if (typeof window !== undefined) {
      const theme = window.localStorage.getItem("theme");
      toggleTheme(theme);
    }
  }, []);

  const [isDarkTheme, setIsDarkTheme] = useState(null);

  const toggleTheme = (theme) => {
    setIsDarkTheme(theme);
  };

  const value = {
    toggleTheme,
    isDarkTheme,
    setIsDarkTheme,
  };

  return (
    <>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </>
  );
}

export { useTheme, ThemeProvider };
