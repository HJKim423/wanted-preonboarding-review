import { ThemeProvider, useTheme, useThemeChange } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Title />
      <ToggleButton />
    </ThemeProvider>
  );
}

export default App;

const Title = () => {
  const theme = useTheme();

  const style = {
    color: theme?.isDarkMode() ? 'white' : 'black',
    backgroundColor: theme?.isDarkMode() ? 'black' : 'white',
  };
  return <h1 style={style}>Hello World</h1>;
};

const ToggleButton = () => {
  const toggleTheme = useThemeChange();
  return <button onClick={toggleTheme}>change theme</button>;
};
