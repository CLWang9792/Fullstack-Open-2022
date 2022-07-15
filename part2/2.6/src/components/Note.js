const Show = ({ persons }) => {
  return (
    <li>
      {persons.name} {persons.number}
    </li>
  );
};

const Filter = ({ handleFilter, filterData }) => {
  return (
    <div>
      filter shown with{" "}
      <input placeholder='Search ...' onChange={handleFilter} />
      <ul>
        {filterData.map((persons) => (
          <Show key={persons.id} persons={persons} />
        ))}
      </ul>
    </div>
  );
};

const PersonsForm = ({
  add,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
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
  );
};

const Persons = ({ persons }) => {
  return (
    <div>
      <ul>
        {persons.map((persons) => (
          <Show key={persons.id} persons={persons} />
        ))}
      </ul>
    </div>
  );
};

export { Filter, PersonsForm, Persons };
