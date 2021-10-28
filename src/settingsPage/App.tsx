import { Menu } from "./Menu";

export default function App() {
  return (
    <div className="App">
      {/* Stetching the nav ul with stretch={1}. */}
      <Menu />
      <header>
        <h1>Settings</h1>
      </header>
    </div>
  );
}