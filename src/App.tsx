import "./App.css";
import Greet from "./Components/Greet";
import { Person } from "./Components/Person";
import { PersonList } from "./Components/PersonList";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Greet name="Pavan" messageCount={11} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
