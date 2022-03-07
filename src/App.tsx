import "./App.css";
import Greet from "./Components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Pavan" messageCount={11} isLoggedIn={true} />
    </div>
  );
}

export default App;
