import "./App.css";
import useRoutes from "./hooks/useRoutes";

function App() {
  const routees = useRoutes();

  return <div className="App">{routees}</div>;
}

export default App;
