import './styles/index.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <button onClick={toggleTheme}>TOGGLE</button>
      <AppRouter/>
    </div>
  );
}

export default App;