import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import "./App.css";
import { useRecoilValue } from "recoil";
import { themeState } from "./themeState";
import ThemeToggle from "./components/ThemeToggle";
import Auth from "./components/Auth";
import UserInfo from "./components/UserInfo";
function App() {
  const theme = useRecoilValue(themeState);

  return (
    <div className={theme}>
      <h1>Bài 1: Counter Global</h1>
      <CounterDisplay />
      <CounterControls />

      <hr />

      <h1>Bài 2: Theme Toggle</h1>
      <ThemeToggle />

      <h1>Bài 3: Auth giả lập</h1>
      <Auth />
      <UserInfo />
    </div>
  );
}

export default App;