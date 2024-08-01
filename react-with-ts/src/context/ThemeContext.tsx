import { createContext, useContext } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const initialTheme = {
  primary: {
    main: "#3f51b5",
    text: "#fff",
  },
  secondary: {
    main: "#f50057",
    text: "#fff",
  },
};

// Known initial state
const ThemeContext = createContext(initialTheme);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={initialTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside the CityProvider");
  return context;
}

export { ThemeContextProvider, useTheme };
