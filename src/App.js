import React from "react";
import "./App.css";
import CalculatorContainer from "containers/calc";
import { themes, ThemeContext } from "./themes";

function App() {
  const [theme, setTheme] = React.useState(themes.light);

  const handleDarkMode = () => setTheme(themes.dark);

  const handleLightMode = () => setTheme(themes.light);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" style={{ backgroundColor: theme.background }}>
        <CalculatorContainer />
        <div className="toggle_buttons">
          <div className="button" onClick={handleLightMode}>
            Light Mode
          </div>
          <div className="button" onClick={handleDarkMode}>
            Dark Mode
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
