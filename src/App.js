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

//컴포넌트들
const Title = () => {
  //custom hook
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
