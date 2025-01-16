import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  uiTheme: { name: string; color: string }[];
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  uiTheme: [],
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  const uiTheme = [
    { name: "zinc", color: "rgb(161, 161, 170)" },
    { name: "slate", color: "rgb(148, 163, 184)" },
    { name: "stone", color: "rgb(168, 162, 158)" },
    { name: "gray", color: "rgb(156, 163, 175)" },
    { name: "neutral", color: "rgb(163, 163, 163)" },
    { name: "orange", color: "rgb(233, 110, 52)" },
    { name: "green", color: "rgb(34, 197, 94)" },
    { name: "blue", color: "rgb(59, 130, 246)" },
    { name: "yellow", color: "rgb(234, 179, 8)" },
    { name: "purple", color: "rgb(139, 92, 246)" },
    { name: "pink", color: "rgb(236, 72, 153)" },
  ];

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme-related classes except for "light" and "dark"
    root.classList.remove(...uiTheme.map((theme) => theme.name));

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.remove("light", "dark");
      root.classList.add(systemTheme);
    } else {
      if (theme === "light" || theme === "dark") {
        root.classList.remove("light", "dark");
        root.classList.add(theme);
      } else {
        if (!root.classList.contains("dark")) {
          root.classList.add("light"); // Default to light if no dark mode is active
        }
        root.classList.add(theme); // Add the custom theme color
      }
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    uiTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
