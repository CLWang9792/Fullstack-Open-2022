import { delData } from '../services/note'

const Show = ({ persons }) => {
  return (
    <div>
      <li>
        {persons.name}: {persons.number}
        <DeleteButton persons={persons} />
      </li>
    </div>
  )
}

const DeleteButton = ({ persons }) => {
  const del = () => {
    if (window.confirm(`Delete ${persons.name} ?`)) {
      delData(persons)
    }
  }
  return (
    <div>
      <button onClick={del}>delete</button>
    </div>
  )
}

const Filter = ({ handleFilter }) => {
  return (
    <div>
      filter shown with{' '}
      <input placeholder='Search ...' onChange={handleFilter} />
    </div>
  )
}

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
  )
}

const Persons = ({ persons, filterData, search }) => {
  if (search === '') {
    return (
      <div>
        <ul>
          {persons.map(persons => (
            <Show key={persons.name} persons={persons} />
          ))}
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <ul>
          {filterData.map(persons => (
            <Show key={persons.name} persons={persons} />
          ))}
        </ul>
      </div>
    )
  }
}

const SuccessNotification = ({ message }) => {
  if (message === null) {
    return null
  }
  return <div className='success'>{message}</div>
}

const ErrorNotification = ({ message }) => {
  if (message === null) {
    return null
  }
  return <div className='error'>{message}</div>
}

export { Filter, PersonsForm, Persons, SuccessNotification, ErrorNotification }
