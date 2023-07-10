import { createContext, useCallback, useContext, useState } from 'react';

const ThemeContext = createContext(null);
const ThemeChangeContext = createContext(null);

export const useTheme = () => useContext(ThemeContext);
export const useThemeChange = () => useContext(ThemeChangeContext);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  const isDarkMode = useCallback(() => theme === true, [theme]);
  const isLightMode = useCallback(() => theme === false, [theme]);

  const toggleTheme = useCallback(() => setTheme(prevTheme => !prevTheme), [setTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, isLightMode }}>
      <ThemeChangeContext.Provider value={toggleTheme}>{children}</ThemeChangeContext.Provider>
    </ThemeContext.Provider>
  );
}
