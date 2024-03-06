"use client";
import PhMoonFill from "@/components/icons/moon";
import PhSunBold from "@/components/icons/sun";
import React, { ReactNode, useContext, useEffect, useReducer } from "react";

// 定义state和action的类型
type ThemeState = {
  theme: "light" | "dark";
};

type ThemeAction = {
  type: "TOGGLE_THEME";
};

// 定义上下文类型
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

const initialState: ThemeState = { theme: "light" };

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
}

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        toggleTheme: () => dispatch({ type: "TOGGLE_THEME" }),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemedButton() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemedButton must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = context;

  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? <PhMoonFill /> : <PhSunBold />}
    </div>
  );
}
