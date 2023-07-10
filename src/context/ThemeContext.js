import { createContext, useCallback, useContext, useState } from 'react';

//1. createContext
const ThemeContext = createContext(null);
const ThemeChangeContext = createContext(null);

//3. useContext통해서 전달
export const useTheme = () => useContext(ThemeContext);
export const useThemeChange = () => useContext(ThemeChangeContext);

//새로운 컴포넌트
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const isDarkMode = useCallback(() => theme === 'dark', [theme]); //theme이 dark 일때 true
  const isLightMode = useCallback(() => theme === 'light', [theme]);

  const toggleTheme = useCallback(
    () => setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light')),
    [setTheme],
  );

  return (
    //2. value를 설정하고 provider로 감싸기
    <ThemeContext.Provider value={{ isDarkMode, isLightMode }}>
      <ThemeChangeContext.Provider value={toggleTheme}>{children}</ThemeChangeContext.Provider>
    </ThemeContext.Provider>
  );
}
