import { useState } from "react";
import Note from "./components/Note";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [persons, setPersons] = useState([
    { name: "Arto", number: "040-123456", id: 1 },
    { name: "Ada", number: "39-44-5323523", id: 2 },
    { name: "Dan", number: "12-43-234345", id: 3 },
    { name: "Mary", number: "39-23-6423122", id: 4 },
  ]);
  const [filterData, setFilterData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = persons.filter((value) => {
      return value.name
        .toLocaleLowerCase()
        .includes(searchWord.toLocaleLowerCase());
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const add = (event) => {
    event.preventDefault();
    const phoneBookObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const alreadyHave = persons.find((a) => a.name === newName);

    if (alreadyHave !== undefined) {
      return window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(phoneBookObject));
    }

    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with{" "}
        <input placeholder='Search ...' onChange={handleFilter} />
      </div>
      <div>
        <ul>
          {filterData.map((persons) => (
            <Note key={persons.id} persons={persons} />
          ))}
        </ul>
      </div>
      <form onSubmit={add}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map((persons) => (
            <Note key={persons.id} persons={persons} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
