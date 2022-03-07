import "./App.css";
import Greet from "./Components/Greet";
import { Person } from "./Components/Person";

function App() {

  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  return (
    <div className="App">
      <Greet name="Pavan" messageCount={11} isLoggedIn={true} />
      <Person name={personName} />
    </div>
  );
}

export default App;
