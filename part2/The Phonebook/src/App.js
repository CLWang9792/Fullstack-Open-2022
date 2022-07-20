import { useEffect, useState } from "react";
import axios from "axios";
import { Filter, PersonsForm, Persons } from "./components/Note";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [persons, setPersons] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
      <Filter handleFilter={handleFilter} filterData={filterData} />
      <h3>Add a new</h3>
      <PersonsForm
        add={add}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};
export default App;
