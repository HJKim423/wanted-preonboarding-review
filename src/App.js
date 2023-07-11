import { useState } from 'react';
import { ThemeProvider, useTheme, useThemeChange } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Title />
      <ToggleButton />
      <CustomHookExample />
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

const CustomHookExample = () => {
  const [isLightMode, changeMode] = useToggle(false);
  console.log(isLightMode);
  return (
    <>
      <h1
        style={{
          backgroundColor: isLightMode ? 'white' : 'black',
          color: isLightMode ? 'black' : 'white',
        }}
      >
        CustomHook - current mode: {isLightMode ? 'Light Mode' : 'Dark Mode'}
      </h1>
      <button onClick={changeMode}>change mode</button>
    </>
  );
};

//custom Hook
const useToggle = defaultValue => {
  const [toggle, setToggle] = useState(defaultValue);

  const changeToggle = () => {
    setToggle(prev => !prev);
  };

  return [toggle, changeToggle];
};
