import "./App.css";
import Greet from "./Components/Greet";
import { Heading } from "./Components/Heading";
import { Person } from "./Components/Person";
import { PersonList } from "./Components/PersonList";
import { Status } from "./Components/Status";
import { Oscar } from "./Components/Oscar";
import { Button } from "./Components/Button";
import { Input } from './Components/Input';
import { Container } from "./Components/Container";

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
      <Status status="success" />
      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>Oscar</Heading>
      </Oscar>

      <Greet name="Pavan" isLoggedIn={true} />

      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value='' handleChange={(event)=> console.log(event)} />
      <Container styles={{border: '1px solid black', padding: '1rem' }} />
    </div>
  );
}

export default App;
