import { useEffect, useState } from "react";
import { Filter, PersonsForm, Persons } from "./components/Note";
import { getAll, create, update } from "./services/note";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [persons, setPersons] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // axios.get("http://localhost:3001/persons").then((response) => {
    //   setPersons(response.data);
    // });
    getAll().then((response) => setPersons(response.data));
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
      setSearch("");
    } else {
      setFilterData(newFilter);
      setSearch("have search word");
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
    const id = persons.indexOf(alreadyHave) + 1;
    const upDate = {
      name: newName,
      number: newNumber,
      id: id,
    };

    if (alreadyHave !== undefined) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with new one?`
        )
      ) {
        // axios
        //   .put(`http://localhost:3001/persons/${id}`, update)
        //   .then((response) => {
        //     setPersons(
        //       persons.map((persons) =>
        //         persons.id !== id ? persons : response.data
        //       )
        //     );
        //   });
        update(id, upDate).then((response) => {
          setPersons(
            persons.map((persons) =>
              persons.id !== id ? persons : response.data
            )
          );
        });
      }
    } else {
      // axios
      //   .post("http://localhost:3001/persons", phoneBookObject)
      //   .then((response) => {
      //     setPersons(persons.concat(response.data));
      //   });
      create(phoneBookObject).then((response) => {
        setPersons(persons.concat(response.data));
      });
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonsForm
        add={add}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterData={filterData} search={search} />
    </div>
  );
};
export default App;
